<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Range" :items="[{ label: 'Forms' }, { label: 'Range', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-col gap-4">
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="80"
              class="range"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="80"
              class="range"
              disabled
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Step
          </div>
          <div class="mt-4">
            <div class="w-full max-w-xs">
              <input
                type="range"
                aria-label="Range"
                min="0"
                max="100"
                value="25"
                class="range"
                step="25"
              />
              <div class="mt-2 flex justify-between px-2.5 text-xs">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
              </div>
              <div class="mt-2 flex justify-between px-2.5 text-xs">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
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
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="45"
              class="range range-primary"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="45"
              class="range range-secondary"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="45"
              class="range range-accent"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="45"
              class="range range-success"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="45"
              class="range range-info"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="45"
              class="range range-warning"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="45"
              class="range range-error"
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-col gap-4">
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="55"
              class="range range-xs"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="55"
              class="range range-sm"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="55"
              class="range"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="55"
              class="range range-lg"
            />
            <input
              type="range"
              aria-label="Range"
              min="0"
              max="100"
              value="55"
              class="range range-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
