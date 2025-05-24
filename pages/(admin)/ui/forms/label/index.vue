<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Label" :items="[{ label: 'Forms' }, { label: 'Label', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Prefix
          </div>
          <div class="mt-4">
            <label class="input">
              <span class="label">https://</span>
              <input type="text" placeholder="URL" />
            </label>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Suffix
          </div>
          <div class="mt-4">
            <label class="input">
              <input type="text" placeholder="domain name" />
              <span class="label">.com</span>
            </label>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Select
          </div>
          <div class="mt-4">
            <label class="select">
              <span class="label">Type</span>
              <select>
                <option>Personal</option>
                <option>Business</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Date Input
          </div>
          <div class="mt-4">
            <label class="input">
              <span class="label">Publish date</span>
              <input type="date" />
            </label>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100 h-fit">
        <div class="card-body">
          <div class="card-title">
            Floating
          </div>
          <div class="mt-4">
            <label class="floating-label">
              <span>Your name</span>
              <input
                type="text"
                placeholder="Your name"
                class="input input-md"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-col gap-4">
            <label class="floating-label">
              <input
                type="text"
                placeholder="Extra Small"
                class="input input-xs"
              />
              <span>Extra Small</span>
            </label>
            <label class="floating-label">
              <input
                type="text"
                placeholder="Small"
                class="input input-sm"
              />
              <span>Small</span>
            </label>
            <label class="floating-label">
              <input
                type="text"
                placeholder="Medium"
                class="input input-md"
              />
              <span>Medium</span>
            </label>
            <label class="floating-label">
              <input
                type="text"
                placeholder="Large"
                class="input input-lg"
              />
              <span>Large</span>
            </label>
            <label class="floating-label">
              <input
                type="text"
                placeholder="Extra Large"
                class="input input-xl"
              />
              <span>Extra Large</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
