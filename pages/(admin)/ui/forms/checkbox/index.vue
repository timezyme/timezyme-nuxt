<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const checkRef1 = ref<HTMLInputElement | null>(null);
const checkRef2 = ref<HTMLInputElement | null>(null);

onMounted(() => {
  if (checkRef1.value) {
    checkRef1.value.indeterminate = true;
  }
  if (checkRef2.value) {
    checkRef2.value.indeterminate = true;
  }
});
</script>

<template>
  <div>
    <PageTitle title="Checkbox" :items="[{ label: 'Forms' }, { label: 'Checkbox', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <input
              type="checkbox"
              class="checkbox"
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox"
              aria-label="Checkbox example"
              disabled
            />
            <input
              type="checkbox"
              class="checkbox"
              aria-label="Checkbox example"
              disabled
              checked
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Color
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <input
              type="checkbox"
              class="checkbox checkbox-primary"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox checkbox-secondary"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox checkbox-accent"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox checkbox-success"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox checkbox-info"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox checkbox-warning"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox checkbox-error"
              checked
              aria-label="Checkbox example"
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <input
              type="checkbox"
              class="checkbox checkbox-xl"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox checkbox-lg"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox checkbox-sm"
              checked
              aria-label="Checkbox example"
            />
            <input
              type="checkbox"
              class="checkbox checkbox-xs"
              checked
              aria-label="Checkbox example"
            />
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Form Control
          </div>
          <form class="form-control bg-base-200 rounded-box mt-4 w-64 p-3 px-4">
            <label class="label flex">
              <span class="label-text grow cursor-pointer">Remember me</span>
              <input type="checkbox" class="checkbox" />
            </label>
          </form>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Indeterminate
          </div>
          <div class="mt-4">
            <div class="flex flex-wrap gap-3">
              <input
                ref="checkRef1"
                type="checkbox"
                class="checkbox"
                aria-label="Checkbox example"
              />
              <input
                ref="checkRef2"
                type="checkbox"
                disabled
                class="checkbox"
                aria-label="Checkbox example"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Custom
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <input
              type="checkbox"
              checked
              aria-label="Checkbox example"
              class="checkbox border-red-300 bg-red-100 text-red-600 checked:border-red-600 checked:bg-red-200"
            />
            <input
              type="checkbox"
              checked
              aria-label="Checkbox example"
              class="checkbox border-blue-300 bg-blue-100 text-blue-600 checked:border-blue-600 checked:bg-blue-200"
            />
            <input
              type="checkbox"
              checked
              aria-label="Checkbox example"
              class="checkbox border-blue-300 bg-linear-to-br from-blue-500 to-purple-500 [background-size:inherit] text-white checked:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
