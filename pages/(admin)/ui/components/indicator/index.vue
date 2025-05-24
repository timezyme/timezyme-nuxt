<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Indicator" :items="[{ label: 'Components' }, { label: 'Indicator', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <div class="indicator">
              <div class="badge indicator-item badge-secondary"></div>
              <div class="bg-base-200 rounded-box grid size-24 place-items-center">
                content
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Text
          </div>
          <div class="mt-4">
            <div class="indicator">
              <div class="badge indicator-item badge-primary">
                New
              </div>
              <div class="bg-base-200 rounded-box grid size-24 place-items-center">
                content
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Button
          </div>
          <div class="mt-5">
            <div class="indicator">
              <div class="badge badge-sm indicator-item badge-success">
                +99
              </div>
              <button class="btn">
                Inbox
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Avatar
          </div>
          <div class="mt-4">
            <div class="indicator">
              <div class="badge badge-sm indicator-item badge-ghost indicator-bottom">
                •••
              </div>
              <div class="avatar">
                <div class="bg-secondary/20 mask-squircle mask w-16">
                  <img src="/images/avatars/3.png" alt="Avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
