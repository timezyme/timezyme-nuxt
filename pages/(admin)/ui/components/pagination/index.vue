<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Pagination" :items="[{ label: 'Components' }, { label: 'Pagination', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <div class="join">
              <button class="btn join-item btn-square">
                1
              </button>
              <button class="btn join-item btn-square btn-active">
                2
              </button>
              <button class="btn join-item btn-square">
                3
              </button>
              <button class="btn join-item btn-square">
                4
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Disabled
          </div>
          <div class="mt-4">
            <div class="join">
              <button class="btn join-item btn-square">
                1
              </button>
              <button class="btn join-item btn-square">
                2
              </button>
              <button class="btn join-item btn-square" disabled>
                ...
              </button>
              <button class="btn join-item btn-square">
                8
              </button>
              <button class="btn join-item btn-square">
                9
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Control: Arrow
          </div>
          <div class="mt-4">
            <div class="join">
              <button class="btn btn-square join-item" aria-label="Pagination controls">
                <span class="iconify lucide--chevrons-left"></span>
              </button>
              <button class="btn join-item btn-square">
                1
              </button>
              <button class="btn join-item btn-square btn-active">
                2
              </button>
              <button class="btn join-item btn-square">
                3
              </button>
              <button class="btn btn-square join-item" aria-label="Pagination controls">
                <span class="iconify lucide--chevrons-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Control: Button
          </div>
          <div class="mt-4">
            <div class="join">
              <button class="btn join-item">
                Previous
              </button>
              <button class="btn join-item btn-square">
                1
              </button>
              <button class="btn join-item btn-square btn-active">
                2
              </button>
              <button class="btn join-item btn-square">
                3
              </button>
              <button class="btn join-item">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Variant: Ghost
          </div>
          <div class="mt-4">
            <div class="flex gap-1">
              <button class="btn btn-square btn-ghost join-item" aria-label="Pagination controls">
                <span class="iconify lucide--chevrons-left"></span>
              </button>
              <button class="btn join-item btn-ghost btn-square">
                1
              </button>
              <button class="btn join-item btn-ghost btn-square btn-active">
                2
              </button>
              <button class="btn join-item btn-ghost btn-square">
                3
              </button>
              <button class="btn btn-square btn-ghost join-item" aria-label="Pagination controls">
                <span class="iconify lucide--chevrons-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Variant: Soft
          </div>
          <div class="mt-4">
            <div class="flex gap-1">
              <button
                class="btn btn-square btn-soft join-item btn-primary"
                aria-label="Pagination controls"
              >
                <span class="iconify lucide--chevrons-left"></span>
              </button>
              <button class="btn join-item btn-soft btn-square btn-primary">
                1
              </button>
              <button class="btn join-item btn-soft btn-square btn-active btn-primary">
                2
              </button>
              <button class="btn join-item btn-soft btn-square btn-primary">
                3
              </button>
              <button
                class="btn btn-square btn-soft join-item btn-primary"
                aria-label="Pagination controls"
              >
                <span class="iconify lucide--chevrons-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Variant: Outline
          </div>
          <div class="mt-4">
            <div class="join">
              <button
                class="btn btn-square btn-outline join-item btn-primary"
                aria-label="Pagination controls"
              >
                <span class="iconify lucide--chevrons-left"></span>
              </button>
              <button class="btn join-item btn-outline btn-square btn-primary">
                1
              </button>
              <button class="btn join-item btn-outline btn-square btn-active btn-primary">
                2
              </button>
              <button class="btn join-item btn-outline btn-square btn-primary">
                3
              </button>
              <button
                class="btn btn-square btn-outline join-item btn-primary"
                aria-label="Pagination controls"
              >
                <span class="iconify lucide--chevrons-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Shape: Circle
          </div>
          <div class="mt-4">
            <div class="flex gap-1">
              <button class="btn btn-circle btn-ghost join-item" aria-label="Pagination controls">
                <span class="iconify lucide--chevrons-left"></span>
              </button>
              <button class="btn join-item btn-ghost btn-circle">
                1
              </button>
              <button class="btn join-item btn-ghost btn-circle btn-active">
                2
              </button>
              <button class="btn join-item btn-ghost btn-circle">
                3
              </button>
              <button class="btn btn-circle btn-ghost join-item" aria-label="Pagination controls">
                <span class="iconify lucide--chevrons-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Orientation: Vertical
          </div>
          <div class="mt-4">
            <div class="join join-vertical">
              <button class="btn btn-square join-item" aria-label="Pagination controls">
                <span class="iconify lucide--chevrons-up"></span>
              </button>
              <button class="btn join-item btn-square">
                1
              </button>
              <button class="btn join-item btn-square btn-active">
                2
              </button>
              <button class="btn join-item btn-square">
                ...
              </button>
              <button class="btn join-item btn-square">
                8
              </button>
              <button class="btn btn-square join-item" aria-label="Pagination controls">
                <span class="iconify lucide--chevrons-down"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-col items-center gap-3">
            <div class="join">
              <button class="btn join-item btn-square btn-xs">
                1
              </button>
              <button class="btn join-item btn-square btn-xs btn-active">
                2
              </button>
              <button class="btn join-item btn-square btn-xs">
                3
              </button>
              <button class="btn join-item btn-square btn-xs">
                4
              </button>
            </div>
            <div class="join">
              <button class="btn join-item btn-square btn-sm">
                1
              </button>
              <button class="btn join-item btn-square btn-sm btn-active">
                2
              </button>
              <button class="btn join-item btn-square btn-sm">
                3
              </button>
              <button class="btn join-item btn-square btn-sm">
                4
              </button>
            </div>
            <div class="join">
              <button class="btn join-item btn-square">
                1
              </button>
              <button class="btn join-item btn-square btn-active">
                2
              </button>
              <button class="btn join-item btn-square">
                3
              </button>
              <button class="btn join-item btn-square">
                4
              </button>
            </div>
            <div class="join">
              <button class="btn join-item btn-square btn-lg">
                1
              </button>
              <button class="btn join-item btn-square btn-lg btn-active">
                2
              </button>
              <button class="btn join-item btn-square btn-lg">
                3
              </button>
              <button class="btn join-item btn-square btn-lg">
                4
              </button>
            </div>
            <div class="join">
              <button class="btn join-item btn-square btn-xl">
                1
              </button>
              <button class="btn join-item btn-square btn-xl btn-active">
                2
              </button>
              <button class="btn join-item btn-square btn-xl">
                3
              </button>
              <button class="btn join-item btn-square btn-xl">
                4
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
