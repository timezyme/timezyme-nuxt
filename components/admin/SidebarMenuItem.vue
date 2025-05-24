<script lang="ts" setup>
import type { NuxtLinkProps } from "#app/components/nuxt-link";

import type { ISidebarMenuItemBadges } from "./SidebarMenuItemBadges.vue";

import SidebarMenuItemBadges from "./SidebarMenuItemBadges.vue";

export type ISidebarMenuItem = {
  id: string;
  icon?: string;
  label: string;
  isTitle?: boolean;
  url?: string;
  linkProp?: NuxtLinkProps;
  children?: ISidebarMenuItem[];
  badges?: ISidebarMenuItemBadges["badges"];
};

const props = defineProps<ISidebarMenuItem & { activated: Set<string> }>();

const selected = computed(() => props.activated.has(props.id));
</script>

<template>
  <p v-if="props.isTitle" class="sidebar-menu-title">
    {{ props.label }}
  </p>

  <template v-else-if="!props.children">
    <NuxtLink
      :href="props.url ?? ''"
      class="sidebar-menu-item"
      :class="{ active: selected }"
      v-bind="props.linkProp"
    >
      <span
        v-if="props.icon"
        class="iconify size-4"
        :class="[props.icon]"
      />
      <span class="grow">{{ props.label }}</span>
      <SidebarMenuItemBadges :badges="props.badges" />
    </NuxtLink>
  </template>

  <template v-else>
    <div class="group collapse">
      <input
        aria-label="Sidemenu item trigger"
        type="checkbox"
        name="sidebar-menu-parent-item"
        :checked="selected"
        class="peer"
      />
      <div class="collapse-title">
        <span
          v-if="props.icon"
          class="iconify size-4"
          :class="[props.icon]"
        />
        <span class="grow">{{ props.label }}</span>
        <SidebarMenuItemBadges :badges="props.badges" />
        <span class="iconify lucide--chevron-right arrow-icon size-3.5" />
      </div>
      <div class="collapse-content">
        <SidebarMenuItem
          v-for="(item, index) in props.children"
          :key="index"
          v-bind="item"
          :activated="props.activated"
        />
      </div>
    </div>
  </template>
</template>
