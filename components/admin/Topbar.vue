<script setup lang="ts">
import ThemeToggleDropdown from "~/components/ThemeToggleDropdown.vue";

import TopbarNotificationButton from "./TopbarNotificationButton.vue";
import TopbarSearchButton from "./TopbarSearchButton.vue";
</script>

<template>
  <div
    id="layout-topbar"
    role="navigation"
    aria-label="Navbar"
    class="flex items-center justify-between px-3"
  >
    <div class="inline-flex items-center gap-3">
      <label
        class="btn btn-square btn-ghost btn-sm"
        aria-label="Leftmenu toggle"
        for="layout-sidebar-toggle-trigger"
      >
        <span class="iconify lucide--menu size-5"></span>
      </label>
      <TopbarSearchButton />
    </div>
    <div class="inline-flex items-center gap-1.5">
      <ThemeToggleDropdown
        trigger-class="btn btn-sm btn-circle btn-ghost"
        dropdown-class="dropdown-center"
        dropdown-content-class="mt-2"
        icon-class="size-4.5"
      />
      <label for="layout-rightbar-drawer" class="btn btn-circle btn-ghost btn-sm drawer-button">
        <span class="iconify lucide--settings-2 size-4.5"></span>
      </label>
      <TopbarNotificationButton />

      <div class="dropdown dropdown-bottom dropdown-end">
        <div
          tabIndex="0"
          role="button"
          class="btn btn-ghost rounded-btn px-1.5"
        >
          <div class="flex items-center gap-2">
            <div class="avatar">
              <div class="bg-base-200 mask mask-squircle w-8">
                <img src="/images/avatars/1.png" alt="Avatar" />
              </div>
            </div>
            <div class="-space-y-0.5 text-start">
              <p class="text-sm">
                Stephen
              </p>
              <p class="text-base-content/60 text-xs">
                Profile
              </p>
            </div>
          </div>
        </div>
        <div tabIndex="0" class="dropdown-content bg-base-100 rounded-box mt-4 w-44 shadow">
          <ul class="menu w-full p-2">
            <li>
              <NuxtLink href="/pages/settings">
                <span class="iconify lucide--user size-4" />
                <span>My Profile</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="/pages/settings">
                <span class="iconify lucide--settings size-4" />
                <span>Settings</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="/pages/get-help">
                <span class="iconify lucide--help-circle size-4" />
                <span>Help</span>
              </NuxtLink>
            </li>
          </ul>
          <hr class="border-base-300" />
          <ul class="menu w-full p-2">
            <li>
              <div>
                <span class="iconify lucide--arrow-left-right size-4" />
                <span>Switch Account</span>
              </div>
            </li>
            <li>
              <NuxtLink class="text-error hover:bg-error/10" href="/auth/login">
                <span class="iconify lucide--log-out size-4" />
                <span>Logout</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
