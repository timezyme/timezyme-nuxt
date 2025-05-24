<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Badge" :items="[{ label: 'Components' }, { label: 'Badge', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <div class="badge">
              Badge
            </div>
            <div class="badge badge-ghost">
              Ghost
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Empty
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <div class="badge badge-primary badge-xl"></div>
            <div class="badge badge-primary badge-lg"></div>
            <div class="badge badge-primary badge-md"></div>
            <div class="badge badge-primary badge-sm"></div>
            <div class="badge badge-primary badge-xs"></div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Solid
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <div class="badge badge-primary">
              Primary
            </div>
            <div class="badge badge-secondary">
              Secondary
            </div>
            <div class="badge badge-accent">
              Accent
            </div>
            <div class="badge badge-success">
              Success
            </div>
            <div class="badge badge-info">
              Info
            </div>
            <div class="badge badge-warning">
              Warning
            </div>
            <div class="badge badge-error">
              Error
            </div>
            <div class="badge badge-neutral">
              Neutral
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Soft
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <div class="badge badge-soft badge-primary">
              Primary
            </div>
            <div class="badge badge-soft badge-secondary">
              Secondary
            </div>
            <div class="badge badge-soft badge-accent">
              Accent
            </div>
            <div class="badge badge-soft badge-success">
              Success
            </div>
            <div class="badge badge-soft badge-info">
              Info
            </div>
            <div class="badge badge-soft badge-warning">
              Warning
            </div>
            <div class="badge badge-soft badge-error">
              Error
            </div>
            <div class="badge badge-soft badge-neutral">
              Neutral
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Outline
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <div class="badge badge-outline badge-primary">
              Primary
            </div>
            <div class="badge badge-outline badge-secondary">
              Secondary
            </div>
            <div class="badge badge-outline badge-accent">
              Accent
            </div>
            <div class="badge badge-outline badge-success">
              Success
            </div>
            <div class="badge badge-outline badge-info">
              Info
            </div>
            <div class="badge badge-outline badge-warning">
              Warning
            </div>
            <div class="badge badge-outline badge-error">
              Error
            </div>
            <div class="badge badge-outline badge-neutral">
              Neutral
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Dash
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <div class="badge badge-dash badge-primary">
              Primary
            </div>
            <div class="badge badge-dash badge-secondary">
              Secondary
            </div>
            <div class="badge badge-dash badge-accent">
              Accent
            </div>
            <div class="badge badge-dash badge-success">
              Success
            </div>
            <div class="badge badge-dash badge-info">
              Info
            </div>
            <div class="badge badge-dash badge-warning">
              Warning
            </div>
            <div class="badge badge-dash badge-error">
              Error
            </div>
            <div class="badge badge-dash badge-neutral">
              Neutral
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Icon
          </div>
          <div class="mt-4 flex flex-wrap gap-2">
            <div class="badge badge-success">
              <span class="iconify lucide--info"></span>
              Success
            </div>
            <div class="badge badge-info">
              <span class="iconify lucide--circle-alert"></span>
              Info
            </div>
            <div class="badge badge-warning">
              <span class="iconify lucide--triangle-alert"></span>
              Warning
            </div>
            <div class="badge badge-error">
              <span class="iconify lucide--ban"></span>
              Error
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <div class="badge badge-xl">
              Extra Large
            </div>
            <div class="badge badge-lg">
              Large
            </div>
            <div class="badge badge-md">
              Medium
            </div>
            <div class="badge badge-sm">
              Small
            </div>
            <div class="badge badge-xs">
              Extra Small
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Button
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <button class="btn">
              Inbox <span class="badge badge-sm">+99</span>
            </button>
            <button class="btn">
              Inbox <span class="badge badge-primary badge-sm">+99</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
