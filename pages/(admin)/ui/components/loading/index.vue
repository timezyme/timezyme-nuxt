<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Loading" :items="[{ label: 'Components' }, { label: 'Loading', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <span class="loading-spinner loading"></span>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Color
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-4">
            <span class="loading-spinner loading text-primary"></span>
            <span class="loading-spinner loading text-secondary"></span>
            <span class="loading-spinner loading text-success"></span>
            <span class="loading-spinner loading text-warning"></span>
            <span class="loading-spinner loading text-error"></span>
            <span class="loading-spinner loading text-info"></span>
            <span class="loading-spinner loading text-accent"></span>
            <span class="loading-spinner loading text-ghost"></span>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-4">
            <span class="loading-spinner loading loading-xs"></span>
            <span class="loading-spinner loading loading-sm"></span>
            <span class="loading-spinner loading"></span>
            <span class="loading-spinner loading loading-lg"></span>
            <span class="loading-spinner loading loading-xl"></span>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Variant
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-6">
            <span class="loading-spinner loading"></span>
            <span class="loading loading-ring"></span>
            <span class="loading loading-ball"></span>
            <span class="loading loading-bars"></span>
            <span class="loading loading-infinity"></span>
            <span class="loading loading-dots"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
