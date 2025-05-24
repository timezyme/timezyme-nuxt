<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Accordion" :items="[{ label: 'Components' }, { label: 'Accordion', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default (Single)
          </div>
          <div class="mt-4 space-y-1">
            <div class="bg-base-200 rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-default"
                defaultChecked
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #1
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
            <div class="bg-base-200 rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-default"
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #2
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
            <div class="bg-base-200 rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-default"
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #3
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Multiple
          </div>
          <div class="mt-4 space-y-1">
            <div class="bg-base-200 rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="checkbox"
                name="accordion-multiple"
                defaultChecked
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #1
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
            <div class="bg-base-200 rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="checkbox"
                name="accordion-multiple"
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #2
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
            <div class="bg-base-200 rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="checkbox"
                name="accordion-multiple"
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #3
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Icon: Arrow
          </div>
          <div class="mt-4 space-y-1">
            <div class="bg-base-200 collapse-arrow rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-arrow"
                defaultChecked
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #1
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
            <div class="bg-base-200 collapse-arrow rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-arrow"
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #2
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
            <div class="bg-base-200 collapse-arrow rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-arrow"
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #3
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Icon: Plus/Minus
          </div>
          <div class="mt-4 space-y-1">
            <div class="bg-base-200 collapse-plus rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-plus"
                defaultChecked
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #1
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
            <div class="bg-base-200 collapse-plus rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-plus"
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #2
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
            <div class="bg-base-200 collapse-plus rounded-box collapse">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-plus"
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #3
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Join
          </div>
          <div class="join join-vertical mt-4">
            <div class="join-item border-base-300 collapse border">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-join"
                defaultChecked
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #1
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
            <div class="join-item border-base-300 collapse border">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-join"
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #2
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
            <div class="join-item border-base-300 collapse border">
              <input
                aria-label="Collapse trigger"
                type="radio"
                name="accordion-join"
              />
              <div class="collapse-title text-lg font-medium">
                Accordion #3
              </div>
              <div class="collapse-content">
                Here are some hidden content, which is now public
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
