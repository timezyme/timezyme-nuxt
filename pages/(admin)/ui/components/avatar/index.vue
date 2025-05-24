<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Avatar" :items="[{ label: 'Components' }, { label: 'Avatar', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <div class="avatar">
              <div class="bg-base-200 rounded-box w-20">
                <img src="/images/avatars/1.png" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Rounded
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-4">
            <div class="avatar">
              <div class="bg-base-200 w-20 rounded-xl">
                <img src="/images/avatars/1.png" alt="Avatar" />
              </div>
            </div>
            <div class="avatar">
              <div class="bg-base-200 w-20 rounded-full">
                <img src="/images/avatars/2.png" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-4">
            <div class="avatar">
              <div class="bg-base-200 rounded-box w-24">
                <img src="/images/avatars/4.png" alt="Avatar" />
              </div>
            </div>
            <div class="avatar">
              <div class="bg-base-200 rounded-box w-20">
                <img src="/images/avatars/3.png" alt="Avatar" />
              </div>
            </div>
            <div class="avatar">
              <div class="bg-base-200 rounded-box w-16">
                <img src="/images/avatars/2.png" alt="Avatar" />
              </div>
            </div>
            <div class="avatar">
              <div class="bg-base-200 rounded-box w-12">
                <img src="/images/avatars/1.png" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Mask
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-4">
            <div class="avatar">
              <div class="bg-base-200 mask mask-squircle w-20">
                <img src="/images/avatars/4.png" alt="Avatar" />
              </div>
            </div>
            <div class="avatar">
              <div class="bg-base-200 mask mask-hexagon w-20">
                <img src="/images/avatars/5.png" alt="Avatar" />
              </div>
            </div>
            <div class="avatar">
              <div class="bg-base-200 mask mask-hexagon-2 w-20">
                <img src="/images/avatars/7.png" alt="Avatar" />
              </div>
            </div>
            <div class="avatar">
              <div class="bg-base-200 mask mask-diamond w-20">
                <img src="/images/avatars/6.png" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Group
          </div>
          <div class="mt-4">
            <div class="avatar-group -space-x-5">
              <div class="avatar">
                <div class="bg-base-200 w-12 rounded-full">
                  <img src="/images/avatars/4.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div class="bg-base-200 w-12 rounded-full">
                  <img src="/images/avatars/5.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div class="bg-base-200 w-12 rounded-full">
                  <img src="/images/avatars/7.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div class="bg-base-200 w-12 rounded-full">
                  <img src="/images/avatars/8.png" alt="Avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Counter
          </div>
          <div class="mt-4">
            <div class="avatar-group -space-x-5">
              <div class="avatar">
                <div class="bg-base-200 w-12 rounded-full">
                  <img src="/images/avatars/4.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div class="bg-base-200 w-12 rounded-full">
                  <img src="/images/avatars/5.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div class="bg-base-200 w-12 rounded-full">
                  <img src="/images/avatars/7.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar avatar-placeholder">
                <div class="bg-base-300 w-12 rounded-full">
                  +99
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Ring
          </div>
          <div class="mt-4">
            <div class="flex flex-wrap items-center gap-4">
              <div class="avatar">
                <div
                  class="bg-primary/25 ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  <img src="/images/avatars/1.png" alt="Avatar" />
                </div>
              </div>

              <div class="avatar">
                <div
                  class="bg-secondary/25 ring-secondary ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  <img src="/images/avatars/2.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div
                  class="bg-accent/25 ring-accent ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  <img src="/images/avatars/3.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div
                  class="bg-success/25 ring-success ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  <img src="/images/avatars/4.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div
                  class="bg-info/25 ring-info ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  <img src="/images/avatars/5.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div
                  class="bg-warning/25 ring-warning ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  <img src="/images/avatars/6.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div
                  class="bg-error/25 ring-error ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  <img src="/images/avatars/7.png" alt="Avatar" />
                </div>
              </div>
              <div class="avatar">
                <div
                  class="bg-neutral/25 ring-neutral ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  <img src="/images/avatars/8.png" alt="Avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Presence
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-4">
            <div class="avatar avatar-online">
              <div class="bg-base-200 w-12 rounded-full">
                <img src="/images/avatars/1.png" alt="Avatar" />
              </div>
            </div>

            <div class="avatar avatar-offline">
              <div class="bg-base-200 w-12 rounded-full">
                <img src="/images/avatars/2.png" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Placeholder
          </div>
          <div class="mt-4">
            <div class="flex flex-wrap items-center gap-4">
              <div class="avatar avatar-placeholder">
                <div
                  class="bg-primary text-primary-content ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  N
                </div>
              </div>
              <div class="avatar avatar-placeholder">
                <div
                  class="bg-secondary text-secondary-content ring-secondary ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  E
                </div>
              </div>
              <div class="avatar avatar-placeholder">
                <div
                  class="bg-success text-success-content ring-success ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  X
                </div>
              </div>
              <div class="avatar avatar-placeholder">
                <div
                  class="bg-warning text-warning-content ring-warning ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  U
                </div>
              </div>
              <div class="avatar avatar-placeholder">
                <div
                  class="bg-error text-error-content ring-error ring-offset-base-100 w-12 rounded-full ring ring-offset-2"
                >
                  S
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
