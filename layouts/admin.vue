<script setup lang="ts">
import { adminMenuItems } from "~/components/admin/helpers";
import Rightbar from "~/components/admin/Rightbar.vue";
import Sidebar from "~/components/admin/Sidebar.vue";
import Topbar from "~/components/admin/Topbar.vue";
</script>

<template>
  <div class="size-full">
    <div class="flex">
      <Sidebar :menu-items="adminMenuItems" />
      <div class="flex h-screen min-w-0 grow flex-col overflow-auto">
        <Topbar />
        <div id="layout-content">
          <slot />
        </div>
      </div>
    </div>
    <Rightbar />
  </div>
</template>
