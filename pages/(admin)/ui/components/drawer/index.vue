<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Drawer" :items="[{ label: 'Components' }, { label: 'Drawer', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <div class="drawer">
              <input
                id="demo-drawer"
                type="checkbox"
                class="drawer-toggle"
              />
              <div class="drawer-content">
                <label for="demo-drawer" class="btn drawer-button"> Open </label>
              </div>
              <div class="drawer-side z-[50]">
                <label
                  for="demo-drawer"
                  aria-label="close sidebar"
                  class="drawer-overlay"
                ></label>
                <ul class="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Right Drawer
          </div>
          <div class="mt-4">
            <div class="drawer drawer-end">
              <input
                id="demo-end-drawer"
                type="checkbox"
                class="drawer-toggle"
              />
              <div class="drawer-content">
                <label for="demo-end-drawer" class="btn drawer-button"> Open </label>
              </div>
              <div class="drawer-side z-[50]">
                <label
                  for="demo-end-drawer"
                  aria-label="close sidebar"
                  class="drawer-overlay"
                ></label>
                <ul class="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Close Button
          </div>
          <div class="mt-4">
            <div class="drawer">
              <input
                id="demo-drawer-close"
                type="checkbox"
                class="drawer-toggle"
              />
              <div class="drawer-content">
                <label for="demo-drawer-close" class="btn drawer-button"> Open </label>
              </div>
              <div class="drawer-side z-[50]">
                <label
                  for="demo-drawer-close"
                  aria-label="close sidebar"
                  class="drawer-overlay"
                ></label>
                <div class="bg-base-100 min-h-full w-80 p-4">
                  <div class="flex items-center justify-between">
                    <p class="text-lg font-medium">
                      Drawer Title
                    </p>
                    <label for="demo-drawer-close" class="btn btn-ghost btn-circle drawer-button">
                      <span class="iconify lucide--x"></span>
                    </label>
                  </div>
                  <p class="mt-2">
                    Contents place here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
