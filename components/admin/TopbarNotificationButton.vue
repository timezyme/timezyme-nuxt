<script setup lang="ts">
function closeMenu() {
  if (document.activeElement instanceof HTMLElement)
    document.activeElement.blur();
}
</script>

<template>
  <div class="dropdown dropdown-bottom sm:dropdown-end max-sm:dropdown-center">
    <div
      tabIndex="0"
      role="button"
      class="btn btn-circle btn-ghost btn-sm"
      aria-label="Notifications"
    >
      <span class="iconify lucide--bell size-4.5"></span>
    </div>
    <div
      role="menu"
      tabIndex="0"
      class="dropdown-content bg-base-100 rounded-box card card-compact mt-5 w-60 p-2 shadow sm:w-84"
    >
      <div class="flex items-center justify-between px-2">
        <p class="text-base font-medium">
          Notification
        </p>
        <button
          tabIndex="0"
          class="btn btn-sm btn-circle btn-ghost"
          aria-label="Close"
          @click="closeMenu"
        >
          <span class="iconify lucide--x size-4"></span>
        </button>
      </div>
      <div class="flex items-center justify-center">
        <div class="badge badge-sm badge-primary badge-soft">
          Today
        </div>
      </div>
      <div class="mt-2">
        <div class="rounded-box hover:bg-base-200 flex cursor-pointer gap-3 px-2 py-1.5 transition-all">
          <img
            src="/images/avatars/4.png"
            class="bg-base-200 mask mask-squircle size-10 p-0.5"
            alt=""
          />
          <div class="grow">
            <p class="text-sm leading-tight">
              Customer has requested a return for item
            </p>
            <p class="text-base-content/60 text-end text-xs leading-tight">
              1 Hour ago
            </p>
          </div>
        </div>
        <div class="rounded-box hover:bg-base-200 flex cursor-pointer gap-3 px-2 py-1.5 transition-all">
          <img
            src="/images/avatars/5.png"
            class="bg-base-200 mask mask-squircle size-10 p-0.5"
            alt=""
          />
          <div class="grow">
            <p class="text-sm leading-tight">
              A new review has been submitted for product
            </p>
            <p class="text-base-content/60 text-end text-xs leading-tight">
              1 Hour ago
            </p>
          </div>
        </div>
      </div>
      <div class="mt-2 flex items-center justify-center">
        <div class="badge badge-sm">
          Previous
        </div>
      </div>
      <div class="mt-2">
        <div class="rounded-box hover:bg-base-200 flex cursor-pointer gap-3 px-2 py-1.5 transition-all">
          <img
            src="/images/avatars/1.png"
            class="bg-base-200 mask mask-squircle size-10 p-0.5"
            alt=""
          />
          <div class="grow">
            <p class="text-sm leading-tight">
              Prepare for the upcoming weekend promotion
            </p>
            <p class="text-base-content/60 text-end text-xs leading-tight">
              2 Days ago
            </p>
          </div>
        </div>

        <div class="rounded-box hover:bg-base-200 flex cursor-pointer gap-3 px-2 py-1.5 transition-all">
          <img
            src="/images/avatars/2.png"
            class="bg-base-200 mask mask-squircle size-10 p-0.5"
            alt=""
          />
          <div class="grow">
            <p class="text-sm leading-tight">
              Product &apos;ABC123&apos; is running low in stock.
            </p>
            <p class="text-base-content/60 text-end text-xs leading-tight">
              3 Days ago
            </p>
          </div>
        </div>
        <div class="rounded-box hover:bg-base-200 flex cursor-pointer gap-3 px-2 py-1.5 transition-all">
          <img
            src="/images/avatars/3.png"
            class="bg-base-200 mask mask-squircle size-10 p-0.5"
            alt=""
          />
          <div class="grow">
            <p class="text-sm leading-tight">
              Payment received for Order ID: #67890
            </p>
            <p class="text-base-content/60 text-end text-xs leading-tight">
              Week ago
            </p>
          </div>
        </div>
      </div>
      <hr class="border-base-300 -mx-2 mt-2" />
      <div class="flex items-center justify-between pt-2">
        <button class="btn btn-sm btn-ghost">
          Mark as read
        </button>
        <button class="btn btn-sm btn-soft btn-primary">
          View All
        </button>
      </div>
    </div>
  </div>
</template>
