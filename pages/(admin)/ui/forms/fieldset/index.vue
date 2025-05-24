<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Fieldset" :items="[{ label: 'Forms' }, { label: 'Fieldset', active: true }]" />

    <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Legend & Label
          </div>
          <div class="mt-3">
            <fieldset class="fieldset">
              <legend class="fieldset-legend">
                Form Title
              </legend>
              <input
                type="text"
                class="input"
                placeholder="My awesome page"
                aria-label="Input"
              />
              <p class="fieldset-label">
                You can edit page title later on from settings
              </p>
            </fieldset>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Background & Border
          </div>
          <div class="mt-3">
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box max-w-xs border p-4">
              <legend class="fieldset-legend bg-base-100 px-1.5 pb-0 font-medium">
                Form Title
              </legend>
              <input
                type="text"
                class="input"
                placeholder="My awesome page"
                aria-label="Input"
              />
              <p class="fieldset-label">
                You can edit page title later on from settings
              </p>
            </fieldset>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Multi field
          </div>
          <div class="mt-3">
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box max-w-xs border p-4">
              <legend class="fieldset-legend bg-base-100 px-1.5 pb-0 font-medium">
                Fill information
              </legend>

              <label for="information-title" class="fieldset-label">Title</label>
              <input
                id="information-title"
                type="text"
                class="input"
                placeholder="My awesome page"
              />

              <label for="information-slug" class="fieldset-label">Slug</label>
              <input
                id="information-slug"
                type="text"
                class="input"
                placeholder="my-awesome-page"
              />

              <label for="information-author" class="fieldset-label">Author</label>
              <input
                id="information-author"
                type="text"
                class="input"
                placeholder="Name"
              />
            </fieldset>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Login
          </div>
          <div class="mt-3">
            <fieldset class="fieldset bg-base-200 border-base-300 rounded-box max-w-xs border p-4">
              <legend class="fieldset-legend bg-base-100 px-1.5 pb-0 font-medium">
                Write your details
              </legend>

              <label class="fieldset-label" for="detail-email">Email</label>
              <input
                id="detail-email"
                type="email"
                class="input"
                placeholder="Email"
              />

              <label for="detail-password" class="fieldset-label">Password</label>
              <input
                id="detail-password"
                type="password"
                class="input"
                placeholder="Password"
              />

              <button class="btn btn-primary mt-4">
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
