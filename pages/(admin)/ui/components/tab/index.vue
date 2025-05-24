<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Tab" :items="[{ label: 'Components' }, { label: 'Tab', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <div role="tablist" class="tabs">
              <a role="tab" class="tab"> Tab 1 </a>
              <a role="tab" class="tab tab-active"> Tab 2 </a>
              <a role="tab" class="tab"> Tab 3 </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Border
          </div>
          <div class="mt-4">
            <div role="tablist" class="tabs tabs-border">
              <a role="tab" class="tab"> Tab 1 </a>
              <a role="tab" class="tab tab-active text-primary"> Tab 2 </a>
              <a role="tab" class="tab"> Tab 3 </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Lift
          </div>
          <div class="mt-4">
            <div role="tablist" class="tabs tabs-lift">
              <a role="tab" class="tab"> Tab 1 </a>
              <a role="tab" class="tab tab-active"> Tab 2 </a>
              <a role="tab" class="tab"> Tab 3 </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Box
          </div>
          <div class="mt-4 w-fit">
            <div role="tablist" class="tabs tabs-box">
              <a role="tab" class="tab"> Tab 1 </a>
              <a role="tab" class="tab tab-active"> Tab 2 </a>
              <a role="tab" class="tab"> Tab 3 </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Radio Button
          </div>
          <div class="mt-4">
            <div role="tablist" class="tabs tabs-lift">
              <input
                type="radio"
                name="demo-tabs-radio"
                role="tab"
                class="tab"
                aria-label="Tab 1"
              />
              <div class="tab-content border-base-200 bg-base-100 p-6">
                Tab content 1
              </div>

              <input
                type="radio"
                name="demo-tabs-radio"
                role="tab"
                class="tab"
                aria-label="Tab 2"
                defaultChecked
              />
              <div class="tab-content border-base-200 bg-base-100 p-6">
                Tab content 2
              </div>

              <input
                type="radio"
                name="demo-tabs-radio"
                role="tab"
                class="tab"
                aria-label="Tab 3"
              />
              <div class="tab-content border-base-200 bg-base-100 p-6">
                Tab content 3
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Bottom Tab
          </div>
          <div class="mt-4">
            <div role="tablist" class="tabs tabs-lift tabs-bottom">
              <input
                type="radio"
                name="demo-tabs-bottom-radio"
                role="tab"
                class="tab"
                aria-label="Tab 1"
              />
              <div class="tab-content border-base-200 bg-base-100 p-6">
                Tab content 1
              </div>

              <input
                type="radio"
                name="demo-tabs-bottom-radio"
                role="tab"
                class="tab"
                aria-label="Tab 2"
                defaultChecked
              />
              <div class="tab-content border-base-200 bg-base-100 p-6">
                Tab content 2
              </div>

              <input
                type="radio"
                name="demo-tabs-bottom-radio"
                role="tab"
                class="tab"
                aria-label="Tab 3"
              />
              <div class="tab-content border-base-200 bg-base-100 p-6">
                Tab content 3
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Disabled
          </div>
          <div class="mt-4">
            <div role="tablist" class="tabs tabs-lift">
              <input
                type="radio"
                name="demo-tabs-disabled-radio"
                role="tab"
                class="tab"
                aria-label="Tab 1"
                defaultChecked
              />
              <div class="tab-content border-base-200 bg-base-100 p-6">
                Tab content 1
              </div>

              <input
                type="radio"
                name="demo-tabs-disabled-radio"
                role="tab"
                class="tab"
                aria-label="Tab 2"
                disabled
              />
              <div class="tab-content border-base-200 bg-base-100 p-6">
                Tab content 2
              </div>

              <input
                type="radio"
                name="demo-tabs-disabled-radio"
                role="tab"
                class="tab"
                aria-label="Tab 3"
              />
              <div class="tab-content border-base-200 bg-base-100 p-6">
                Tab content 3
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-col items-center gap-2">
            <div role="tablist" class="tabs tabs-xs">
              <a role="tab" class="tab"> Tab 1 </a>
              <a role="tab" class="tab tab-active"> Tab 2 </a>
              <a role="tab" class="tab"> Tab 3 </a>
            </div>
            <div role="tablist" class="tabs tabs-sm">
              <a role="tab" class="tab"> Tab 1 </a>
              <a role="tab" class="tab tab-active"> Tab 2 </a>
              <a role="tab" class="tab"> Tab 3 </a>
            </div>
            <div role="tablist" class="tabs">
              <a role="tab" class="tab"> Tab 1 </a>
              <a role="tab" class="tab tab-active"> Tab 2 </a>
              <a role="tab" class="tab"> Tab 3 </a>
            </div>
            <div role="tablist" class="tabs tabs-lg">
              <a role="tab" class="tab"> Tab 1 </a>
              <a role="tab" class="tab tab-active"> Tab 2 </a>
              <a role="tab" class="tab"> Tab 3 </a>
            </div>
            <div role="tablist" class="tabs tabs-xl">
              <a role="tab" class="tab"> Tab 1 </a>
              <a role="tab" class="tab tab-active"> Tab 2 </a>
              <a role="tab" class="tab"> Tab 3 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
