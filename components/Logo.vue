<script lang="ts" setup>
type ILogo = {
  className?: string;
};

const props = defineProps<ILogo>();
</script>

<template>
  <div class="inline">
    <img
      src="/images/logo/logo-dark.png"
      alt="logo-dark"
      :class="`hidden h-14.5 dark:inline ${props.className ?? ''}`"
    />
    <img
      src="/images/logo/logo-light.png"
      alt="logo-light"
      :class="`h-14.5 dark:hidden ${props.className ?? ''}`"
    />
  </div>
</template>
