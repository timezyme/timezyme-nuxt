/*=============================================================================
  TimeZyme – Database Schema (v0.6‑a, 2025-06-18)

-- =========================================================================
-- 1· ENUM TYPES
-- =========================================================================
*/

CREATE TYPE zyme_status_enum AS ENUM ('processing','completed','error','archived');
CREATE TYPE job_status_enum  AS ENUM ('queued','processing','completed','failed');
CREATE TYPE job_type_enum    AS ENUM ('article_ingestion','core_json_extraction','zyme_layer_generation','knowledge_extraction');
CREATE TYPE subscription_tier_enum  AS ENUM ('explorer','pro');
CREATE TYPE subscription_state_enum AS ENUM ('active','past_due','canceled');
CREATE TYPE article_section_type_enum AS ENUM (
    'abstract','introduction','methods','results','discussion','conclusion','references',
    'appendix','section','other');
CREATE TYPE zyme_kind_enum AS ENUM (
    'technical_report','research_paper','review_article','preprint','thesis','case_study',
    'white_paper','legal_opinion','medical_study','financial_report','concept','person',
    'event','general_document','other');
CREATE TYPE relation_type_enum AS ENUM ('CHILD_OF','DEFINED_BY','RELATED_TO','AUTHORED_BY','MENTIONED_IN','EVENT_AT');
CREATE TYPE glossary_source_type_enum AS ENUM ('document_explicit','wikipedia','llm_generated','user_defined');
CREATE TYPE visual_asset_type_enum AS ENUM ('highchart_config','generated_image','image_url');

/*
-- =========================================================================
-- 2· CORE CONTENT: SOURCE ARTICLES
-- =========================================================================
*/

CREATE TABLE article (
    article_id        BIGSERIAL PRIMARY KEY,
    title             TEXT      NOT NULL,
    pdf_url           TEXT      NULL,
    source_text       TEXT      NULL,
    external_ref      TEXT      NULL,
    pub_type          TEXT      NULL,
    pub_date          DATE      NULL,
    field_of_study_id INT       NULL,
    created_at        TIMESTAMPTZ DEFAULT now(),
    updated_at        TIMESTAMPTZ DEFAULT now(),
    search_vector     tsvector  GENERATED ALWAYS AS (to_tsvector('english', coalesce(title,'')||' '||coalesce(source_text,''))) STORED,
    CONSTRAINT uq_article_external_ref UNIQUE (external_ref)
);
CREATE INDEX idx_article_search   ON article USING gin(search_vector);
CREATE INDEX idx_article_pubdate  ON article(pub_date);

CREATE TABLE article_section (
    section_id    BIGSERIAL PRIMARY KEY,
    article_id    BIGINT NOT NULL REFERENCES article(article_id) ON DELETE CASCADE,
    section_type  article_section_type_enum DEFAULT 'other',
    section_order INT,
    title         TEXT NULL,
    body          TEXT NOT NULL,
    created_at    TIMESTAMPTZ DEFAULT now(),
    content_vector tsvector GENERATED ALWAYS AS (to_tsvector('english', coalesce(title,'')||' '||coalesce(body,''))) STORED
);
CREATE INDEX idx_article_section_search        ON article_section USING gin(content_vector);
CREATE INDEX idx_article_section_article_order ON article_section(article_id, section_order);

CREATE TABLE article_author (
    author_id    BIGSERIAL PRIMARY KEY,
    article_id   BIGINT NOT NULL REFERENCES article(article_id) ON DELETE CASCADE,
    first_name   TEXT,
    last_name    TEXT,
    full_name    TEXT GENERATED ALWAYS AS (trim(coalesce(first_name,'')||' '||coalesce(last_name,''))) STORED,
    author_order INT,
    CONSTRAINT uq_article_author_order UNIQUE(article_id, author_order)
);

CREATE TABLE article_reference (
    ref_id       BIGSERIAL PRIMARY KEY,
    article_id   BIGINT NOT NULL REFERENCES article(article_id) ON DELETE CASCADE,
    ref_text     TEXT NOT NULL,
    ref_category TEXT CHECK (ref_category IN ('citation','bibliography','footnote')),
    ref_order    INT
);

CREATE TABLE article_keyword (
    kw_id      BIGSERIAL PRIMARY KEY,
    article_id BIGINT NOT NULL REFERENCES article(article_id) ON DELETE CASCADE,
    keyword    TEXT  NOT NULL,
    confidence NUMERIC(4,3) CHECK (confidence BETWEEN 0 AND 1),
    kw_source  TEXT CHECK (kw_source IN ('author_provided','extracted','ai_generated','user_added')),
    UNIQUE(article_id, keyword)
);

/*
-- =========================================================================
-- 3· IDENTITY & SECURITY
-- =========================================================================
*/

CREATE TABLE app_user (
    user_id        BIGSERIAL PRIMARY KEY,
    email          TEXT    NOT NULL,
    pw_hash        BYTEA   NOT NULL,
    first_name     TEXT,
    last_name      TEXT,
    email_verified BOOLEAN DEFAULT FALSE,
    tier           subscription_tier_enum  DEFAULT 'explorer',
    tier_state     subscription_state_enum DEFAULT 'active',
    tier_ends_at   DATE,
    created_at     TIMESTAMPTZ DEFAULT now(),
    updated_at     TIMESTAMPTZ DEFAULT now(),
    last_login_at  TIMESTAMPTZ,
    CONSTRAINT ck_email_format CHECK (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$')
);
ALTER TABLE app_user ENABLE ROW LEVEL SECURITY;

CREATE UNIQUE INDEX uq_app_user_lower_email ON app_user ((lower(email)));

CREATE TABLE user_token (
    token_id   BIGSERIAL PRIMARY KEY,
    user_id    BIGINT NOT NULL REFERENCES app_user(user_id) ON DELETE CASCADE,
    token      TEXT UNIQUE NOT NULL,
    token_kind TEXT CHECK (token_kind IN ('email_verify','password_reset')),
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

/*
-- =========================================================================
-- 4· SUBSCRIPTION & USAGE
-- =========================================================================
*/

CREATE TABLE subscription_plan (
    tier            subscription_tier_enum PRIMARY KEY,
    name            TEXT NOT NULL,
    monthly_limit   INT  NOT NULL,
    price_month_usd NUMERIC(8,2) NOT NULL,
    features        JSONB NULL
);
INSERT INTO subscription_plan VALUES
    ('explorer','Explorer Tier',15,0.00,'{"max_file_size_mb":5}'),
    ('pro','Pro Plan',50,29.00,'{"max_file_size_mb":25}');

CREATE TABLE user_usage (
    user_id      BIGINT NOT NULL REFERENCES app_user(user_id) ON DELETE CASCADE,
    period_start DATE   NOT NULL,
    zymes_created INT   DEFAULT 0,
    PRIMARY KEY (user_id, period_start),
    CONSTRAINT ck_usage_nonneg CHECK (zymes_created >= 0)
);

/*
-- =========================================================================
-- 5· ZYMES & RELATED OBJECTS
-- =========================================================================
*/

-- 5.1 Logical Zyme header (created first, FK to version added later)
CREATE TABLE zyme (
    zyme_id            BIGSERIAL PRIMARY KEY,
    owner_id           BIGINT NOT NULL REFERENCES app_user(user_id),
    article_id         BIGINT NULL REFERENCES article(article_id) ON DELETE SET NULL,
    current_version_id BIGINT NULL, -- FK added later
    is_public          BOOLEAN DEFAULT FALSE,
    share_acl          JSONB   DEFAULT '{}'::jsonb,
    view_count         INT     DEFAULT 0,
    created_at         TIMESTAMPTZ DEFAULT now(),
    updated_at         TIMESTAMPTZ DEFAULT now(),
    deleted_at         TIMESTAMPTZ
);
CREATE INDEX idx_zyme_owner_live  ON zyme(owner_id)      WHERE deleted_at IS NULL;
CREATE INDEX idx_zyme_public_live ON zyme(is_public)     WHERE is_public AND deleted_at IS NULL;

-- 5.2 Zyme version (content-bearing)
CREATE TABLE zyme_version (
    zyme_version_id      BIGSERIAL PRIMARY KEY,
    zyme_id              BIGINT NOT NULL REFERENCES zyme(zyme_id) ON DELETE CASCADE,
    version_number       INT    NOT NULL,
    core_extraction_method TEXT NULL,
    core_extraction_data   JSONB NULL,
    llm_model_identifier   TEXT NULL,
    llm_generation_params  JSONB NULL,
    title                  TEXT NOT NULL CHECK (char_length(title) BETWEEN 3 AND 255),
    zyme_abstract          TEXT NULL,
    zyme_kind              zyme_kind_enum NOT NULL,
    primary_publication_date DATE NULL,
    primary_authors        JSONB NULL,
    status                 zyme_status_enum DEFAULT 'processing',
    generated_glossary     JSONB NULL,
    processing_secs        INT NULL,
    quality_score          NUMERIC(4,2) NULL CHECK (quality_score BETWEEN 0 AND 1),
    created_at             TIMESTAMPTZ DEFAULT now(),
    processed_at           TIMESTAMPTZ NULL,
    CONSTRAINT uq_zyme_version UNIQUE (zyme_id, version_number)
);
CREATE INDEX idx_zyme_version_kind   ON zyme_version(zyme_kind);
CREATE INDEX idx_zyme_version_pubdat ON zyme_version(primary_publication_date);
CREATE INDEX idx_zyme_version_pair   ON zyme_version(zyme_id, version_number);

-- 5.3 Finish FK loop (after both tables exist)
ALTER TABLE zyme ADD CONSTRAINT fk_zyme_current_version FOREIGN KEY (current_version_id) REFERENCES zyme_version(zyme_version_id);
