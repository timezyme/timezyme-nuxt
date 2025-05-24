<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Toggle" :items="[{ label: 'Forms' }, { label: 'Toggle', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <input
              aria-label="Checkbox"
              type="checkbox"
              class="toggle"
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              checked
              class="toggle"
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              disabled
              class="toggle"
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              checked
              disabled
              class="toggle"
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Color
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <input
              aria-label="Checkbox"
              type="checkbox"
              class="toggle toggle-primary"
              checked
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              class="toggle toggle-secondary"
              checked
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              class="toggle toggle-accent"
              checked
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              class="toggle toggle-success"
              checked
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              class="toggle toggle-info"
              checked
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              class="toggle toggle-warning"
              checked
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              class="toggle toggle-error"
              checked
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-4">
            <input
              aria-label="Checkbox"
              type="checkbox"
              checked
              class="toggle toggle-xs"
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              checked
              class="toggle toggle-sm"
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              checked
              class="toggle"
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              checked
              class="toggle toggle-lg"
            />
            <input
              aria-label="Checkbox"
              type="checkbox"
              checked
              class="toggle toggle-xl"
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Icon
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-4">
            <label class="toggle text-base-content toggle-xl">
              <input aria-label="Checkbox" type="checkbox" />
              <span class="iconify lucide--x m-1 flex size-3.5 items-center" aria-label="disabled"></span>
              <span
                class="iconify lucide--check m-1 flex size-3.5 items-center"
                aria-label="enabled"
              ></span>
            </label>
            <label class="toggle text-base-content toggle-xl">
              <input aria-label="Checkbox" type="checkbox" />
              <span
                class="iconify lucide--sun m-1 flex size-3.5 items-center"
                aria-label="disabled"
              ></span>
              <span
                class="iconify lucide--moon m-1 flex size-3.5 items-center"
                aria-label="enabled"
              ></span>
            </label>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Custom
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-4">
            <input
              type="checkbox"
              checked
              aria-label="Checkbox"
              class="toggle border-orange-300 bg-orange-200 text-orange-600 checked:border-orange-600 checked:bg-orange-600 checked:text-white"
            />
            <input
              type="checkbox"
              checked
              aria-label="Checkbox"
              class="toggle border-blue-300 bg-linear-to-br from-blue-300 to-purple-300 text-blue-800 checked:border-blue-500 checked:from-blue-500 checked:to-purple-500 checked:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
