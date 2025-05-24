<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Radio" :items="[{ label: 'Forms' }, { label: 'Radio', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <input
              type="radio"
              aria-label="Radio"
              name="demo-radio-default"
              class="radio"
            />
            <input
              type="radio"
              aria-label="Radio"
              name="demo-radio-default"
              class="radio"
              checked
            />
            <input
              type="radio"
              aria-label="Radio"
              name="demo-radio-disabled"
              class="radio"
              disabled
            />
            <input
              type="radio"
              aria-label="Radio"
              name="demo-radio-disabled"
              class="radio"
              checked
              disabled
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
              type="radio"
              aria-label="Radio"
              name="radio-primary"
              checked
              class="radio radio-primary"
            />
            <input
              type="radio"
              name="radio-secondary"
              aria-label="Radio"
              checked
              class="radio radio-secondary"
            />
            <input
              type="radio"
              aria-label="Radio"
              name="radio-accent"
              checked
              class="radio radio-accent"
            />
            <input
              type="radio"
              aria-label="Radio"
              name="radio-success"
              checked
              class="radio radio-success"
            />
            <input
              type="radio"
              aria-label="Radio"
              name="radio-info"
              checked
              class="radio radio-info"
            />
            <input
              type="radio"
              aria-label="Radio"
              name="radio-warning"
              checked
              class="radio radio-warning"
            />
            <input
              type="radio"
              aria-label="Radio"
              name="radio-error"
              checked
              class="radio radio-error"
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
              type="radio"
              aria-label="Radio"
              name="radio-xl"
              checked
              class="radio radio-xl"
            />
            <input
              type="radio"
              aria-label="Radio"
              name="radio-lg"
              checked
              class="radio radio-lg"
            />
            <input
              type="radio"
              aria-label="Radio"
              name="radio-md"
              checked
              class="radio"
            />
            <input
              type="radio"
              aria-label="Radio"
              name="radio-sm"
              checked
              class="radio radio-sm"
            />
            <input
              type="radio"
              aria-label="Radio"
              name="radio-xs"
              checked
              class="radio radio-xs"
            />
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
              type="radio"
              name="demo-radio-custom"
              aria-label="Radio"
              checked
              class="radio border-red-300 bg-red-100 text-red-600 checked:border-red-600 checked:bg-red-200"
            />
            <input
              type="radio"
              name="demo-radio-custom"
              aria-label="Radio"
              class="radio border-blue-300 bg-blue-100 text-blue-600 checked:border-blue-600 checked:bg-blue-200"
            />
            <input
              type="radio"
              name="demo-radio-custom"
              aria-label="Radio"
              class="radio border-blue-300 bg-linear-to-br from-blue-500 to-purple-500 text-white checked:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
