<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="File Input" :items="[{ label: 'Forms' }, { label: 'File Input', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-col gap-4">
            <input
              type="file"
              aria-label="File"
              class="file-input"
            />
            <input
              type="file"
              aria-label="File"
              class="file-input"
              disabled
            />
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Ghost
          </div>
          <div class="mt-4 flex flex-col gap-4">
            <input
              type="file"
              aria-label="File"
              class="file-input file-input-ghost"
            />
            <input
              type="file"
              aria-label="File"
              class="file-input file-input-ghost"
              disabled
            />
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="card card-border bg-base-100">
          <div class="card-body">
            <div class="card-title">
              Fieldset
            </div>
            <div class="mt-1">
              <fieldset class="fieldset gap-1">
                <legend class="fieldset-legend">
                  Pick a file
                </legend>
                <input
                  id="demo-file"
                  type="file"
                  aria-label="File"
                  class="file-input"
                />
                <span class="fieldset-label">Max size 2MB</span>
              </fieldset>
            </div>
          </div>
        </div>
        <div class="card card-border bg-base-100">
          <div class="card-body">
            <div class="card-title">
              Size
            </div>
            <div class="mt-4 flex flex-col gap-3">
              <input
                type="file"
                aria-label="File"
                class="file-input file-input-xs"
              />
              <input
                type="file"
                aria-label="File"
                class="file-input file-input-sm"
              />
              <input
                type="file"
                aria-label="File"
                class="file-input"
              />
              <input
                type="file"
                aria-label="File"
                class="file-input file-input-lg"
              />
              <input
                type="file"
                aria-label="File"
                class="file-input file-input-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Color
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <input
              type="file"
              aria-label="File"
              class="file-input file-input-primary"
            />
            <input
              type="file"
              aria-label="File"
              class="file-input file-input-secondary"
            />
            <input
              type="file"
              aria-label="File"
              class="file-input file-input-accent"
            />
            <input
              type="file"
              aria-label="File"
              class="file-input file-input-success"
            />
            <input
              type="file"
              aria-label="File"
              class="file-input file-input-info"
            />
            <input
              type="file"
              aria-label="File"
              class="file-input file-input-warning"
            />
            <input
              type="file"
              aria-label="File"
              class="file-input file-input-error"
            />
            <input
              type="file"
              aria-label="File"
              class="file-input file-input-neutral"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
