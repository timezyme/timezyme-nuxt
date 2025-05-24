<script lang="ts" setup>
type IThemeToggleDropdown = {
  triggerClass?: string;
  dropdownClass?: string;
  dropdownContentClass?: string;
  iconClass?: string;
};

const props = defineProps<IThemeToggleDropdown>();
const config = useConfig();
</script>

<template>
  <div :class="`dropdown ${props.dropdownClass ?? ''}`">
    <div
      tabindex="0"
      role="button"
      :class="props.triggerClass ?? ''"
      aria-label="Theme toggle"
    >
      <span
        :class="`iconify lucide--sun hidden size-4 group-data-[theme=light]/html:inline ${props.iconClass ?? ''}`"
      ></span>
      <span
        :class="`iconify lucide--moon hidden size-4 group-data-[theme=dark]/html:inline ${props.iconClass ?? ''}`"
      ></span>
      <span
        :class="`iconify lucide--monitor hidden size-4 group-[:not([data-theme])]/html:inline ${props.iconClass ?? ''}`"
      ></span>
      <span
        :class="`iconify lucide--palette hidden size-4 group-data-[theme=contrast]/html:inline group-data-[theme=dim]/html:inline group-data-[theme=material]/html:inline group-data-[theme=material-dark]/html:inline ${props.iconClass ?? ''}`"
      ></span>
    </div>

    <ul
      tabindex="0"
      :class="`dropdown-content menu bg-base-100 rounded-box z-1 w-36 space-y-0.5 p-1 shadow-sm ${props.dropdownContentClass ?? ''}`"
    >
      <li>
        <div class="group-data-[theme=light]/html:bg-base-200 flex gap-2" @click="config.changeTheme('light')">
          <span class="iconify lucide--sun size-4.5"></span>
          <span class="font-medium">Light</span>
        </div>
      </li>
      <li>
        <div class="group-data-[theme=dark]/html:bg-base-200 flex gap-2" @click="config.changeTheme('dark')">
          <span class="iconify lucide--moon size-4.5"></span>
          <span class="font-medium">Dark</span>
        </div>
      </li>
      <li>
        <div
          class="group-[:not([data-theme])]/html:bg-base-200 flex gap-2"
          @click="config.changeTheme('system')"
        >
          <span class="iconify lucide--monitor size-4.5"></span>
          <span class="font-medium">System</span>
        </div>
      </li>
    </ul>
  </div>
</template>
