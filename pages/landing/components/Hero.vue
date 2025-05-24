<script lang="ts" setup>
// No imports needed anymore
</script>

<template>
  <div class="relative">
    <div
      class="absolute inset-0 -top-2 h-[1600px] bg-[url(/images/landing/hero-bg-gradient.png)] [background-size:200%_60%] bg-no-repeat opacity-20 [background-position-x:center] sm:[background-size:100%_100%] dark:opacity-15"
    ></div>

    <div class="relative z-10 container py-28 xl:py-40">
      <div class="flex flex-col items-center">
        <NuxtLink
          class="badge badge-secondary rounded-full"
          href="https://nexus.daisyui.com/docs/"
          target="_blank"
        >
          <span class="iconify lucide--sparkles size-3"></span>
          Transform Reading into Understanding
        </NuxtLink>
        <div
          class="mt-4 max-w-[700px] transition-all duration-1000 starting:scale-125 starting:opacity-0 starting:blur-sm"
        >
          <p class="text-center text-xl leading-tight font-bold md:text-5xl">
            TimeZyme: <br />
            Unlock knowledge at {{ " " }}
            <span class="animated-text from-primary bg-linear-to-r via-blue-500 to-purple-500">
              LightSpeed
            </span>
          </p>
        </div>
        <div
          class="mt-6 max-w-[500px] transition-all duration-1000 xl:mt-8 starting:opacity-0 starting:blur-sm"
        >
          <p class="text-center sm:text-lg">
            TimeZyme transforms any document into interactive visual stories.
          </p>
        </div>

        <div
          class="mt-6 inline-flex items-center gap-3 transition-all delay-300 duration-1000 sm:gap-5 xl:mt-10 starting:opacity-0 starting:blur-sm"
        >
          <NuxtLink
            href="/apps/discover"
            target="_blank"
            class="btn from-primary to-secondary group text-primary-content relative gap-3 border-0 bg-linear-to-r text-base"
          >
            <span class="iconify lucide--search size-4 sm:size-5" />
            Discover Zymes
            <div
              class="from-primary to-secondary absolute inset-x-1 top-2 -z-1 h-10 bg-linear-to-r opacity-40 blur-md transition-all duration-500 group-hover:inset-x-0 group-hover:opacity-80 group-hover:blur-lg dark:opacity-20 group-hover:dark:!opacity-40"
            ></div>
          </NuxtLink>
          <NuxtLink
            href="/apps/discover"
            class="btn btn-outline btn-neutral max-sm:btn-sm gap-3 text-base dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <span class="iconify lucide--move-right size-4 sm:size-5" />
            Start
          </NuxtLink>
        </div>
        <div class="relative mt-8 max-w-[95%] md:mt-16 md:max-w-xl lg:max-w-3xl xl:max-w-5xl">
          <div class="group border-base-100/20 bg-base-100/30 dark:border-px relative w-fit rounded-lg border-2 p-2 dark:border-white/2 dark:bg-white/4">
            <img
              src="/images/landing/hero-dashboard-light.png"
              class="h-full w-full rounded-lg dark:hidden"
              alt="Zyme"
            />
            <img
              src="/images/landing/hero-dashboard-dark-4.png"
              class="hidden h-full w-full rounded-lg dark:block"
              alt="Zyme"
            />
            <NuxtLink
              href="/dashboards/ecommerce"
              class="dark:via-dark/40 absolute inset-1.5 flex items-end justify-center rounded-lg bg-linear-to-b from-transparent from-[60%] via-black/20 via-[80%] to-black/80 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:to-black"
            >
              <div
                class="rounded-box mb-8 gap-2.5 bg-white px-4 py-2 text-sm font-medium text-black/80"
              >
                Zyme
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
