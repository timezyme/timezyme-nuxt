<template>
  <div class="container py-8 md:py-12 xl:py-16 2xl:py-24">
    <div class="text-center">
      <div
        class="from-primary to-secondary text-primary-content inline-flex items-center rounded-full bg-linear-to-tr p-2.5"
      >
        <span class="iconify lucide--rocket size-5" />
      </div>
      <p class="text-primary mt-4 text-2xl font-semibold sm:text-3xl">
        Build, launch, and manage fast
      </p>
      <p class="mt-3 inline-block max-w-2xl">
        Pay once, use forever. No subscriptions, only powerful tools and endless possibilities to build with
        confidence.
      </p>
    </div>

    <div class="mt-6 flex justify-center xl:mt-8">
      <ul class="max-w-md space-y-3 text-center">
        <li class="flex items-center gap-2 max-sm:text-sm">
          <span class="iconify lucide--badge-check size-6 text-green-500"></span>
          Built with Tailwind CSS 4 & DaisyUI 5
        </li>
        <li class="flex items-center gap-2 max-sm:text-sm">
          <span class="iconify lucide--badge-check size-6 text-green-500"></span>
          Lifetime access with free updates
        </li>
        <li class="flex items-center gap-2 max-sm:text-sm">
          <span class="iconify lucide--badge-check size-6 text-green-500"></span>
          Fully responsive & optimized for all devices
        </li>
      </ul>
    </div>
    <div class="mt-6 flex items-center justify-center gap-3 sm:gap-5 xl:mt-8">
      <NuxtLink
        href="https://daisyui.com/store/244268"
        target="_blank"
        class="btn from-primary to-secondary group text-primary-content relative gap-3 border-0 bg-linear-to-r text-base"
      >
        <span class="iconify lucide--shopping-cart size-4 sm:size-5" />
        Buy Now
        <div
          class="from-primary to-secondary absolute inset-x-1 top-2 -z-1 h-10 bg-linear-to-r opacity-40 blur-md transition-all duration-500 group-hover:inset-x-0 group-hover:opacity-80 group-hover:blur-lg dark:opacity-20 group-hover:dark:!opacity-40"
        ></div>
      </NuxtLink>
      <NuxtLink href="#faqs" class="btn btn-ghost">
        Need help?
        <span class="iconify lucide--arrow-down size-3.5" />
      </NuxtLink>
    </div>
  </div>
</template>
