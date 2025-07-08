<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

useHead({
  title: "View Zymes",
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <PageTitle title="View Zymes" />

    <div class="mt-8">
      <!-- Stats Overview -->
      <div class="stats stats-horizontal shadow w-full mb-8">
        <div class="stat">
          <div class="stat-figure text-primary">
            <Icon name="mdi:eye" class="w-8 h-8" />
          </div>
          <div class="stat-title">
            Total Zymes
          </div>
          <div class="stat-value text-primary">
            0
          </div>
          <div class="stat-desc">
            No zymes created yet
          </div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <Icon name="mdi:check-circle" class="w-8 h-8" />
          </div>
          <div class="stat-title">
            Active
          </div>
          <div class="stat-value text-secondary">
            0
          </div>
          <div class="stat-desc">
            Running zymes
          </div>
        </div>

        <div class="stat">
          <div class="stat-figure text-accent">
            <Icon name="mdi:pause-circle" class="w-8 h-8" />
          </div>
          <div class="stat-title">
            Inactive
          </div>
          <div class="stat-value text-accent">
            0
          </div>
          <div class="stat-desc">
            Paused zymes
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body items-center text-center py-16">
          <Icon
            name="mdi:folder-open-outline"
            class="w-24 h-24 text-base-content/20 mb-4"
          />
          <h2 class="card-title text-2xl mb-2">
            No Zymes Yet
          </h2>
          <p class="text-base-content/70 max-w-md">
            You haven't created any Zymes yet. Once you create your first Zyme,
            it will appear here.
          </p>

          <div class="card-actions mt-8">
            <NuxtLink to="/apps/create-zyme" class="btn btn-primary">
              <Icon name="mdi:plus" class="w-5 h-5" />
              Create Your First Zyme
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Placeholder Grid (hidden when empty) -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 hidden">
        <!-- Example Zyme Card -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title">
              Example Zyme
            </h3>
            <p class="text-sm text-base-content/70">
              Description of the zyme
            </p>
            <div class="card-actions justify-end mt-4">
              <button class="btn btn-sm btn-ghost">
                View
              </button>
              <button class="btn btn-sm btn-primary">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
