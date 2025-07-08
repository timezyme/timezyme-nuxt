<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import ThemeToggleDropdown from "@/components/ThemeToggleDropdown.vue";

const scrollPosition = ref(0);
const prevScrollPosition = ref(0);
const scrolling = ref<"up" | "down" | undefined>(undefined);

function handleScroll() {
  setTimeout(() => {
    prevScrollPosition.value = scrollPosition.value;
    scrollPosition.value = window.scrollY;

    if (scrollPosition.value < 500) {
      scrolling.value = undefined;
    }
    else {
      if (scrollPosition.value - prevScrollPosition.value > 0) {
        scrolling.value = "down";
      }
      else if (scrollPosition.value - prevScrollPosition.value < 0) {
        scrolling.value = "up";
      }
    }
  }, 200);
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    :data-scrolling="scrolling"
    :data-at-top="scrollPosition < 30"
    class="group fixed inset-x-0 z-[60] flex justify-center transition-[top] duration-500 data-[scrolling=down]:-top-full sm:container [&:not([data-scrolling=down])]:top-4"
  >
    <div
      class="group-data-[at-top=false]:bg-base-100 group-data-[at-top=false]:dark:bg-base-200 relative flex w-full items-center justify-between rounded-full px-6 py-3 transition-all duration-500 group-data-[at-top=false]:w-[800px] group-data-[at-top=false]:shadow group-data-[at-top=false]:max-sm:mx-2 lg:py-1.5"
    >
      <!-- Left side: Logo and mobile menu -->
      <div class="flex items-center gap-2 z-10">
        <div class="flex-none lg:hidden">
          <div class="drawer">
            <input
              id="demo-drawer"
              type="checkbox"
              class="drawer-toggle"
            />
            <div class="drawer-content">
              <label
                for="demo-drawer"
                class="btn drawer-button btn-ghost btn-square btn-sm"
              >
                <span class="iconify lucide--menu size-4.5"></span>
              </label>
            </div>
            <div class="drawer-side z-[50]">
              <label
                for="demo-drawer"
                aria-label="close sidebar"
                class="drawer-overlay"
              ></label>
              <ul
                class="menu bg-base-100 text-base-content min-h-full w-80 p-4"
              >
                <li><p>Home</p></li>
                <li>
                  <NuxtLink href="/apps/create-zyme">
                    Dashboard
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink href="/ui/components/accordion">
                    Components
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <NuxtLink href="/dashboards/ecommerce">
          <Logo />
        </NuxtLink>
      </div>

      <!-- Center: Main navigation menu - absolutely centered -->
      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <ul class="menu menu-horizontal hidden gap-2 px-1 lg:inline-flex">
          <li><p>Home</p></li>
          <li>
            <NuxtLink href="/apps/create-zyme">
              Dashboard
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/ui/components/accordion">
              Components
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Right side: Theme toggle and cart -->
      <div class="inline-flex items-center gap-2.5 z-10">
        <ThemeToggleDropdown
          trigger-class="btn btn-square btn-sm border-transparent bg-transparent"
          dropdown-class="dropdown-center dropdown-end"
        />
        <NuxtLink href="/auth/login" class="btn btn-primary btn-sm">
          <span class="iconify lucide--log-in size-4"></span>
          Login
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
