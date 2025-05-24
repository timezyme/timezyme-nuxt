<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Button" :items="[{ label: 'Components' }, { label: 'Button', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <button class="btn btn-primary">
              Click me
            </button>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Disabled
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <button class="btn btn-disabled">
              Using class
            </button>
            <button class="btn" disabled>
              Using attribute
            </button>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Solid
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <button class="btn btn-primary">
              Primary
            </button>
            <button class="btn btn-secondary">
              Secondary
            </button>
            <button class="btn btn-accent">
              Accent
            </button>
            <button class="btn btn-success">
              Success
            </button>
            <button class="btn btn-info">
              Info
            </button>
            <button class="btn btn-warning">
              Warning
            </button>
            <button class="btn btn-error">
              Error
            </button>
            <button class="btn btn-neutral">
              Neutral
            </button>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Soft
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <button class="btn btn-soft btn-primary">
              Primary
            </button>
            <button class="btn btn-soft btn-secondary">
              Secondary
            </button>
            <button class="btn btn-soft btn-accent">
              Accent
            </button>
            <button class="btn btn-soft btn-success">
              Success
            </button>
            <button class="btn btn-soft btn-info">
              Info
            </button>
            <button class="btn btn-soft btn-warning">
              Warning
            </button>
            <button class="btn btn-soft btn-error">
              Error
            </button>
            <button class="btn btn-soft btn-neutral">
              Neutral
            </button>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Outline
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <button class="btn btn-outline btn-primary">
              Primary
            </button>
            <button class="btn btn-outline btn-secondary">
              Secondary
            </button>
            <button class="btn btn-outline btn-accent">
              Accent
            </button>
            <button class="btn btn-outline btn-success">
              Success
            </button>
            <button class="btn btn-outline btn-info">
              Info
            </button>
            <button class="btn btn-outline btn-warning">
              Warning
            </button>
            <button class="btn btn-outline btn-error">
              Error
            </button>
            <button class="btn btn-outline btn-neutral">
              Neutral
            </button>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Dash
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <button class="btn btn-dash btn-primary">
              Primary
            </button>
            <button class="btn btn-dash btn-secondary">
              Secondary
            </button>
            <button class="btn btn-dash btn-accent">
              Accent
            </button>
            <button class="btn btn-dash btn-success">
              Success
            </button>
            <button class="btn btn-dash btn-info">
              Info
            </button>
            <button class="btn btn-dash btn-warning">
              Warning
            </button>
            <button class="btn btn-dash btn-error">
              Error
            </button>
            <button class="btn btn-dash btn-neutral">
              Neutral
            </button>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Ghost & Link
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <button class="btn btn-ghost">
              Default
            </button>
            <button class="btn btn-ghost btn-primary">
              Primary
            </button>
            <button class="btn btn-ghost btn-secondary">
              Secondary
            </button>
            <button class="btn btn-ghost btn-accent">
              Accent
            </button>
            <button class="btn btn-ghost btn-success">
              Success
            </button>
            <button class="btn btn-ghost btn-info">
              Info
            </button>
            <button class="btn btn-ghost btn-warning">
              Warning
            </button>
            <button class="btn btn-ghost btn-error">
              Error
            </button>
            <button class="btn btn-ghost btn-neutral">
              Neutral
            </button>
            <button class="btn btn-link">
              Link
            </button>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Icon
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <button class="btn btn-square gap-2" aria-label="Icon">
              <span class="iconify lucide--heart size-4"></span>
            </button>
            <button class="btn gap-2">
              <span class="iconify lucide--heart size-4"></span>
              Like
            </button>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Rounded
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <button class="btn btn-circle gap-2" aria-label="Icon">
              <span class="iconify lucide--heart size-4"></span>
            </button>
            <button class="btn btn-circle gap-2" aria-label="Icon">
              <span class="iconify lucide--settings-2 size-4"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Loading
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <button class="btn btn-square gap-2" aria-label="Icon">
              <span class="loading loading-spinner size-5"></span>
            </button>
            <button class="btn gap-2">
              <span class="loading loading-spinner size-5"></span>
              Loading
            </button>
            <button
              class="btn btn-square gap-2"
              disabled
              aria-label="Icon"
            >
              <span class="loading loading-spinner size-5"></span>
            </button>
            <button class="btn gap-2" disabled>
              <span class="loading loading-spinner size-5"></span>
              Loading
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
