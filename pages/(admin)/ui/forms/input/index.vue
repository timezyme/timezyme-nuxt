<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Input" :items="[{ label: 'Forms' }, { label: 'Input', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <input
              placeholder="Type here"
              class="input"
              type="text"
              aria-label="Input"
            />
            <input
              class="input"
              aria-label="Input"
              type="text"
              value="I have already written something for you"
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Disabled
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <input
              placeholder="Type here"
              class="input"
              disabled
              aria-label="Input"
              type="text"
            />
            <input
              class="input"
              aria-label="Input"
              disabled
              type="text"
              value="I have already written something for you"
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Ghost
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <input
              placeholder="Touch to write"
              class="input input-ghost"
              aria-label="Input"
              type="text"
            />
            <input
              class="input"
              aria-label="Input"
              disabled
              type="text"
              value="I'm ghost, you can't touch me 👻"
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Fieldset
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <fieldset class="fieldset">
              <legend class="fieldset-legend">
                What is your name?
              </legend>
              <input
                class="input"
                aria-label="Input"
                placeholder="Type here"
                type="text"
              />
              <p class="fieldset-label">
                * Required
              </p>
            </fieldset>
          </div>
        </div>
      </div>
      <div class="space-y-5">
        <div class="card card-border bg-base-100">
          <div class="card-body">
            <div class="card-title">
              Label inside
            </div>
            <div class="mt-4 flex flex-col gap-3">
              <label class="input">
                <span class="iconify lucide--search text-base-content/60 size-5"></span>
                <input
                  class="grow"
                  placeholder="Search"
                  type="search"
                />
                <kbd class="kbd kbd-sm">⌘</kbd>
                <kbd class="kbd kbd-sm">K</kbd>
              </label>
              <label class="input">
                <span class="iconify lucide--file text-base-content/60 size-5"></span>
                <input
                  class="grow"
                  placeholder="index.php"
                  type="text"
                />
              </label>
              <label class="input">
                Path
                <input
                  class="grow"
                  placeholder="src/app/"
                  type="text"
                />
                <span class="badge badge-ghost badge-sm">.tsx</span>
              </label>
            </div>
          </div>
        </div>
        <div class="card card-border bg-base-100">
          <div class="card-body">
            <div class="card-title">
              Size
            </div>
            <div class="mt-4 flex flex-col gap-3">
              <input
                placeholder="Type here"
                aria-label="Input"
                class="input input-xs"
                type="text"
              />
              <input
                placeholder="Type here"
                aria-label="Input"
                class="input input-sm"
                type="text"
              />
              <input
                placeholder="Type here"
                aria-label="Input"
                class="input"
                type="text"
              />
              <input
                placeholder="Type here"
                aria-label="Input"
                class="input input-lg"
                type="text"
              />
              <input
                placeholder="Type here"
                aria-label="Input"
                class="input input-xl"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Color
          </div>
          <div class="mt-4 flex flex-col gap-3">
            <input
              placeholder="Type here"
              aria-label="Input"
              class="input input-primary"
              type="text"
            />
            <input
              placeholder="Type here"
              aria-label="Input"
              class="input input-secondary"
              type="text"
            />
            <input
              placeholder="Type here"
              aria-label="Input"
              class="input input-accent"
              type="text"
            />
            <input
              placeholder="Type here"
              aria-label="Input"
              class="input input-success"
              type="text"
            />
            <input
              placeholder="Type here"
              aria-label="Input"
              class="input input-info"
              type="text"
            />
            <input
              placeholder="Type here"
              aria-label="Input"
              class="input input-warning"
              type="text"
            />
            <input
              placeholder="Type here"
              aria-label="Input"
              class="input input-error"
              type="text"
            />
            <input
              placeholder="Type here"
              aria-label="Input"
              class="input input-neutral"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
