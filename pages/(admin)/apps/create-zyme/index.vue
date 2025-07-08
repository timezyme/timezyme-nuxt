<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

useHead({
  title: "Create Zyme",
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <PageTitle title="Create Zyme" />

    <div class="mt-8">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">
            Create a New Zyme
          </h2>
          <p class="text-base-content/70 mb-6">
            This feature is coming soon. You'll be able to create and configure
            your own Zymes here.
          </p>

          <div class="divider"></div>

          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div class="stat bg-base-200 rounded-box">
              <div class="stat-title">
                Step 1
              </div>
              <div class="stat-value text-primary">
                Define
              </div>
              <div class="stat-desc">
                Set up your Zyme parameters
              </div>
            </div>

            <div class="stat bg-base-200 rounded-box">
              <div class="stat-title">
                Step 2
              </div>
              <div class="stat-value text-secondary">
                Configure
              </div>
              <div class="stat-desc">
                Add workflows and actions
              </div>
            </div>

            <div class="stat bg-base-200 rounded-box">
              <div class="stat-title">
                Step 3
              </div>
              <div class="stat-value text-accent">
                Deploy
              </div>
              <div class="stat-desc">
                Launch your Zyme
              </div>
            </div>
          </div>

          <div class="card-actions justify-center mt-8">
            <button class="btn btn-primary btn-lg" disabled>
              <Icon name="mdi:plus-circle" class="w-5 h-5" />
              Create Zyme (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
