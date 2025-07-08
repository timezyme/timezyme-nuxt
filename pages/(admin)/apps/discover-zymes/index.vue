<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

useHead({
  title: "Discover Zymes",
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <PageTitle title="Discover Zymes" />

    <div class="mt-8">
      <!-- Search and Filter Section -->
      <div class="card bg-base-100 shadow mb-8">
        <div class="card-body">
          <div class="flex flex-col lg:flex-row gap-4">
            <div class="form-control flex-1">
              <label class="input input-bordered flex items-center gap-2">
                <Icon name="mdi:magnify" class="w-5 h-5 opacity-70" />
                <input
                  type="text"
                  class="grow"
                  placeholder="Search for Zymes..."
                  disabled
                />
              </label>
            </div>

            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-outline">
                <Icon name="mdi:filter-variant" class="w-5 h-5" />
                Filter
              </label>
            </div>

            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn btn-outline">
                <Icon name="mdi:sort" class="w-5 h-5" />
                Sort by
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Categories -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4">
          Browse by Category
        </h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn btn-sm btn-outline btn-primary" disabled>
            All Categories
          </button>
          <button class="btn btn-sm btn-outline" disabled>
            Productivity
          </button>
          <button class="btn btn-sm btn-outline" disabled>
            Analytics
          </button>
          <button class="btn btn-sm btn-outline" disabled>
            Automation
          </button>
          <button class="btn btn-sm btn-outline" disabled>
            Communication
          </button>
          <button class="btn btn-sm btn-outline" disabled>
            AI & ML
          </button>
        </div>
      </div>

      <!-- Coming Soon Banner -->
      <div class="alert alert-info mb-8">
        <Icon name="mdi:information" class="w-6 h-6" />
        <div>
          <h3 class="font-bold">
            Zyme Marketplace Coming Soon!
          </h3>
          <div class="text-sm">
            Discover and install pre-built Zymes created by the community.
          </div>
        </div>
      </div>

      <!-- Placeholder Grid -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Example Zyme Cards -->
        <div class="card bg-base-100 shadow-xl opacity-60">
          <div class="card-body">
            <div class="flex items-start justify-between">
              <div class="avatar placeholder">
                <div class="bg-primary text-primary-content rounded-lg w-12">
                  <span class="text-xl">Z</span>
                </div>
              </div>
              <div class="badge badge-secondary">
                Popular
              </div>
            </div>

            <h3 class="card-title mt-4">
              Data Analyzer Zyme
            </h3>
            <p class="text-sm text-base-content/70">
              Automatically analyze and visualize your data with AI-powered
              insights.
            </p>

            <div class="flex items-center gap-2 mt-2">
              <div class="rating rating-sm">
                <input type="radio" class="rating-hidden" />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                  checked
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
              </div>
              <span class="text-sm text-base-content/60">(0 reviews)</span>
            </div>

            <div class="card-actions justify-between mt-4">
              <span class="text-sm text-base-content/60">0 installs</span>
              <button class="btn btn-sm btn-primary" disabled>
                Install
              </button>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl opacity-60">
          <div class="card-body">
            <div class="flex items-start justify-between">
              <div class="avatar placeholder">
                <div
                  class="bg-secondary text-secondary-content rounded-lg w-12"
                >
                  <span class="text-xl">Z</span>
                </div>
              </div>
              <div class="badge badge-accent">
                New
              </div>
            </div>

            <h3 class="card-title mt-4">
              Workflow Automator
            </h3>
            <p class="text-sm text-base-content/70">
              Create complex workflows with simple drag-and-drop interface.
            </p>

            <div class="flex items-center gap-2 mt-2">
              <div class="rating rating-sm">
                <input type="radio" class="rating-hidden" />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                  checked
                />
              </div>
              <span class="text-sm text-base-content/60">(0 reviews)</span>
            </div>

            <div class="card-actions justify-between mt-4">
              <span class="text-sm text-base-content/60">0 installs</span>
              <button class="btn btn-sm btn-primary" disabled>
                Install
              </button>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl opacity-60">
          <div class="card-body">
            <div class="flex items-start justify-between">
              <div class="avatar placeholder">
                <div class="bg-accent text-accent-content rounded-lg w-12">
                  <span class="text-xl">Z</span>
                </div>
              </div>
              <div class="badge badge-primary">
                Featured
              </div>
            </div>

            <h3 class="card-title mt-4">
              Team Collaboration Hub
            </h3>
            <p class="text-sm text-base-content/70">
              Enhanced team collaboration with real-time updates and
              notifications.
            </p>

            <div class="flex items-center gap-2 mt-2">
              <div class="rating rating-sm">
                <input type="radio" class="rating-hidden" />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
                <input
                  type="radio"
                  class="mask mask-star-2"
                  disabled
                />
              </div>
              <span class="text-sm text-base-content/60">(0 reviews)</span>
            </div>

            <div class="card-actions justify-between mt-4">
              <span class="text-sm text-base-content/60">0 installs</span>
              <button class="btn btn-sm btn-primary" disabled>
                Install
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
