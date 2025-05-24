<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Alert" :items="[{ label: 'Components' }, { label: 'Alert', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <div class="alert" role="alert">
              <span class="iconify lucide--info text-info size-5"></span>
              <span>12 unread messages. Tap to see.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Button
          </div>
          <div class="mt-4">
            <div class="alert" role="alert">
              <span class="iconify lucide--cookie text-info size-5"></span>
              <span>12 unread messages. Tap to see.</span>
              <div class="space-x-2">
                <button class="btn btn-sm">
                  Deny
                </button>
                <button class="btn btn-sm btn-primary">
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Description
          </div>
          <div class="mt-4">
            <div class="alert" role="alert">
              <span class="iconify lucide--message-square-dashed size-5"></span>
              <div>
                <h3 class="font-medium">
                  New message!
                </h3>
                <div class="text-base-content/70 text-xs">
                  You have 1 unread message
                </div>
              </div>
              <button class="btn btn-sm">
                See
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Confirmation
          </div>
          <div class="mt-4">
            <div class="alert" role="alert">
              <span class="iconify lucide--trash-2 text-error size-5"></span>
              <div>
                <h3 class="font-bold">
                  12.7 MB Saved
                </h3>
                <div class="text-xs">
                  Some file removed
                </div>
              </div>
              <div class="space-x-2">
                <button class="btn btn-sm">
                  Dismiss
                </button>
                <button class="btn btn-sm btn-primary">
                  Restore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Solid
          </div>
          <div class="mt-4 space-y-3">
            <div class="alert alert-success" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-info" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-warning" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-error" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Soft
          </div>
          <div class="mt-4 space-y-3">
            <div class="alert alert-success alert-soft" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-soft alert-info" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-soft alert-warning" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-error alert-soft" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Outline
          </div>
          <div class="mt-4 space-y-3">
            <div class="alert alert-success alert-outline" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-outline alert-info" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-outline alert-warning" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-outline alert-error" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Dashed
          </div>
          <div class="mt-4 space-y-3">
            <div class="alert alert-success alert-dash" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-dash alert-info" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-dash alert-warning" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
            <div class="alert alert-dash alert-error" role="alert">
              <span class="iconify lucide--info size-5"></span>
              <span>New software update available.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
