<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Breadcrumb" :items="[{ label: 'Components' }, { label: 'Breadcrumb', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="breadcrumbs mt-2 text-sm">
            <ul>
              <li>
                <NuxtLink href="#home">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="#shops">
                  Shops
                </NuxtLink>
              </li>
              <li>Add Shop</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Icon
          </div>
          <div class="breadcrumbs mt-2 text-sm">
            <ul>
              <li>
                <NuxtLink href="#home">
                  <span class="iconify lucide--home"></span>
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="#shops">
                  <span class="iconify lucide--store"></span>
                  Shops
                </NuxtLink>
              </li>
              <li>Add Shop</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Dropdown
          </div>
          <div class="breadcrumbs mt-2 overflow-x-visible text-sm">
            <ul>
              <li>
                <NuxtLink href="#home">
                  <span class="iconify lucide--home"></span>
                  Home
                </NuxtLink>
              </li>
              <li>
                <details class="dropdown dropdown-center dropdown-bottom">
                  <summary class="btn btn-xs hover:no-undeline mx-1">
                    •••
                  </summary>
                  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
                    <li>
                      <NuxtLink href="#store">
                        <span class="iconify lucide--store"></span>
                        Stores
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink href="#users">
                        <span class="iconify lucide--users"></span>
                        Users
                      </NuxtLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li>Add Shop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
