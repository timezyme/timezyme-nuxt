<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Select" :items="[{ label: 'Forms' }, { label: 'Select', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <select aria-label="Select" class="select">
              <option
                value=""
                disabled
                selected
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select aria-label="Select" class="select">
              <option disabled>
                Pick your favorite Simpson
              </option>
              <option value="homer">
                Homer
              </option>
              <option value="marge" selected>
                Marge
              </option>
              <option value="bart">
                Bart
              </option>
              <option value="lisa">
                Lisa
              </option>
              <option value="maggie">
                Maggie
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Disabled
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <select
              aria-label="Select"
              class="select"
              disabled
            >
              <option value="" disabled>
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select
              aria-label="Select"
              class="select"
              disabled
            >
              <option disabled>
                Pick your favorite Simpson
              </option>
              <option value="homer">
                Homer
              </option>
              <option value="marge" selected>
                Marge
              </option>
              <option value="bart">
                Bart
              </option>
              <option value="lisa">
                Lisa
              </option>
              <option value="maggie">
                Maggie
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Ghost
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <select aria-label="Select" class="select select-ghost">
              <option
                value=""
                disabled
                selected
              >
                Select any ghost
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select
              aria-label="Select"
              class="select select-ghost"
              disabled
            >
              <option disabled>
                Pick your favorite Simpson
              </option>
              <option value="homer">
                Homer
              </option>
              <option value="marge" selected>
                Can't touch me, I'm already selected
              </option>
              <option value="bart">
                Bart
              </option>
              <option value="lisa">
                Lisa
              </option>
              <option value="maggie">
                Maggie
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Fieldset
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <fieldset class="fieldset">
              <legend class="fieldset-legend">
                Need any favourite simpson?
              </legend>
              <select aria-label="Select" class="select">
                <option
                  value=""
                  selected
                  disabled
                >
                  Pick your favorite Simpson
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <p class="fieldset-label">
                * Optional
              </p>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Color
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <select aria-label="Select" class="select select-primary">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select aria-label="Select" class="select select-secondary">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select aria-label="Select" class="select select-accent">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select aria-label="Select" class="select select-success">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select aria-label="Select" class="select select-info">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select aria-label="Select" class="select select-warning">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select aria-label="Select" class="select select-error">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select aria-label="Select" class="select select-neutral">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <select aria-label="Select" class="select select-xs">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>

            <select aria-label="Select" class="select select-sm">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>

            <select aria-label="Select" class="select">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>

            <select aria-label="Select" class="select select-lg">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>

            <select aria-label="Select" class="select select-xl">
              <option
                value=""
                selected
                disabled
              >
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
