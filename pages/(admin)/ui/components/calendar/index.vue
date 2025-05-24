<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

// DOM element references
const inputCallyEl = ref<HTMLElement | null>(null);
const buttonCallyEl = ref<HTMLElement | null>(null);
const rangeCallyEl = ref<HTMLElement | null>(null);
const multiCallyEl = ref<HTMLElement | null>(null);

// Reactive values
const selectedDate = ref("-");
const selectedDateRange = ref("-");
const selectedDateMulti = ref("-");

// Handlers
function handleSelectedDate(e: Event) {
  const target = e.target as HTMLInputElement;
  selectedDate.value = target.value;
}

function handleSelectedDateRange(e: Event) {
  const target = e.target as HTMLInputElement;
  selectedDateRange.value = target.value;
}

function handleSelectedDateMulti(e: Event) {
  const target = e.target as HTMLInputElement;
  selectedDateMulti.value = target.value;
}

// Mount logic
onMounted(async () => {
  await import("cally");

  inputCallyEl.value?.addEventListener("change", handleSelectedDate);
  buttonCallyEl.value?.addEventListener("change", handleSelectedDate);
  rangeCallyEl.value?.addEventListener("change", handleSelectedDateRange);
  multiCallyEl.value?.addEventListener("change", handleSelectedDateMulti);
});
</script>

<template>
  <div>
    <PageTitle title="Calendar" :items="[{ label: 'Components' }, { label: 'Calendar', active: true }]" />

    <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-4">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Date Picker
          </div>
          <div class="mt-3">
            <p class="label text-sm">
              Input Field
            </p>
            <div class="dropdown dropdown-start mt-1 w-full">
              <div
                tabIndex="0"
                role="button"
                class="input flex w-full items-center gap-2"
              >
                <input
                  v-model="selectedDate"
                  class="grow [appearance:none] [&::-webkit-calendar-picker-indicator]:hidden"
                  placeholder="Pick a day"
                  type="date"
                />
                <div class="btn btn-xs btn-circle btn-ghost">
                  <span class="iconify lucide--calendar text-base-content/70 size-4.5"></span>
                </div>
              </div>
              <div tabIndex="0" class="dropdown-content mt-2">
                <calendar-date
                  ref="inputCallyEl"
                  class="cally bg-base-100 rounded-box shadow-md transition-all hover:shadow-lg"
                  :value="selectedDate"
                >
                  <span slot="previous" class="iconify lucide--chevron-left"></span>
                  <span slot="next" class="iconify lucide--chevron-right"></span>
                  <calendar-month></calendar-month>
                </calendar-date>
              </div>
            </div>
            <p class="label mt-3 text-sm">
              Your birthdate (Single)
            </p>
            <div class="dropdown mt-1 w-full">
              <div
                tabIndex="0"
                role="button"
                class="btn btn-outline border-base-300 flex items-center gap-2"
              >
                <span class="iconify lucide--cake text-base-content/80 size-4.5"></span>
                <p class="text-start">
                  {{ selectedDate.toString() }}
                </p>

                <span class="iconify lucide--chevron-down text-base-content/70 size-4"></span>
              </div>
              <div tabIndex="0" class="dropdown-content mt-2">
                <calendar-date
                  ref="buttonCallyEl"
                  class="cally bg-base-100 rounded-box shadow-md transition-all hover:shadow-lg"
                  value="{selectedDate}"
                >
                  <span slot="previous" class="iconify lucide--chevron-left"></span>
                  <span slot="next" class="iconify lucide--chevron-right"></span>
                  <calendar-month></calendar-month>
                </calendar-date>
              </div>
            </div>
            <p class="label mt-3 text-sm">
              Priority dates (Multi)
            </p>
            <div class="dropdown dropdown-start w-full">
              <div
                tabIndex="0"
                role="button"
                class="btn btn-outline border-base-300 flex items-center gap-3"
              >
                <span class="iconify lucide--stars text-base-content/80 size-4.5 shrink-0"></span>
                <p class="line-clamp-1 text-start">
                  {{ selectedDateMulti.toString() }}
                </p>
                <span
                  class="iconify lucide--calendar-days text-base-content/70 size-4.5 shrink-0"
                ></span>
              </div>
              <div tabIndex="0" class="dropdown-content mt-2">
                <calendar-multi
                  ref="multiCallyEl"
                  class="cally bg-base-100 rounded-box shadow-md transition-all hover:shadow-lg"
                  value="{selectedDateMulti}"
                >
                  <span slot="previous" class="iconify lucide--chevron-left"></span>
                  <span slot="next" class="iconify lucide--chevron-right"></span>
                  <calendar-month></calendar-month>
                </calendar-multi>
              </div>
            </div>
            <p class="label mt-3 text-sm">
              Your travel dates (Range)
            </p>
            <div class="dropdown dropdown-start mt-1 w-full">
              <div
                tabIndex="0"
                role="button"
                class="btn btn-outline border-base-300 flex items-center gap-3"
              >
                <span class="iconify lucide--plane-takeoff text-base-content/80 size-4.5"></span>
                <p class="text-start">
                  {{ selectedDateRange.toString() }}
                </p>
                <span class="iconify lucide--calendar-range text-base-content/70 size-4.5"></span>
              </div>
              <div tabIndex="0" class="dropdown-content mt-2">
                <calendar-range
                  ref="rangeCallyEl"
                  class="cally bg-base-100 rounded-box shadow-md transition-all hover:shadow-lg"
                  value="{selectedDate}"
                >
                  <span slot="previous" class="iconify lucide--chevron-left"></span>
                  <span slot="next" class="iconify lucide--chevron-right"></span>
                  <calendar-month></calendar-month>
                </calendar-range>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Inline
          </div>
          <div class="mt-4">
            <calendar-date class="cally bg-base-100 border-base-300 rounded-box w-full border pt-1">
              <span slot="previous" class="iconify lucide--chevron-left"></span>
              <span slot="next" class="iconify lucide--chevron-right"></span>
              <calendar-month></calendar-month>
            </calendar-date>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Control: Icon
          </div>
          <div class="mt-4">
            <calendar-date class="cally bg-base-100 border-base-300 rounded-box w-full border pt-1">
              <span slot="previous" class="iconify lucide--chevrons-left"></span>
              <span slot="next" class="iconify lucide--chevrons-right"></span>
              <calendar-month></calendar-month>
            </calendar-date>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Control: Text
          </div>
          <div class="mt-4">
            <calendar-date class="cally bg-base-100 border-base-300 rounded-box w-full border pt-1">
              <span slot="previous">Prev</span>
              <span slot="next">Next</span>
              <calendar-month></calendar-month>
            </calendar-date>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Show outside days
          </div>
          <div class="mt-4">
            <calendar-date
              class="cally bg-base-100 border-base-300 rounded-box w-full border pt-1"
              show-outside-days
            >
              <span slot="previous" class="iconify lucide--chevron-left"></span>
              <span slot="next" class="iconify lucide--chevron-right"></span>
              <calendar-month></calendar-month>
            </calendar-date>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Different Heading
          </div>
          <div class="mt-4">
            <calendar-date class="cally bg-base-100 border-base-300 rounded-box w-full border pt-1">
              <span slot="previous" class="iconify lucide--chevron-left"></span>
              <span slot="next" class="iconify lucide--chevron-right"></span>
              <p slot="heading" class="text-center font-medium">
                Your Time, Your Way
              </p>
              <calendar-month></calendar-month>
            </calendar-date>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Week start: Sunday
          </div>
          <div class="mt-4">
            <calendar-date
              class="cally bg-base-100 border-base-300 rounded-box w-full border pt-1"
              first-day-of-week="0"
            >
              <span slot="previous" class="iconify lucide--chevron-left"></span>
              <span slot="next" class="iconify lucide--chevron-right"></span>
              <calendar-month></calendar-month>
            </calendar-date>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Multi Select
          </div>
          <div class="mt-4">
            <calendar-multi class="cally bg-base-100 border-base-300 rounded-box w-full border pt-1">
              <span slot="previous" class="iconify lucide--chevron-left"></span>
              <span slot="next" class="iconify lucide--chevron-right"></span>
              <calendar-month></calendar-month>
            </calendar-multi>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex flex-wrap gap-6">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Range Select
          </div>
          <div class="mt-4">
            <calendar-range
              class="cally bg-base-100 border-base-300 rounded-box border pt-1"
              show-outside-days
            >
              <span slot="previous" class="iconify lucide--chevron-left"></span>
              <span slot="next" class="iconify lucide--chevron-right"></span>
              <calendar-month></calendar-month>
            </calendar-range>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Range Select: Multi Month
          </div>
          <div class="mt-4">
            <calendar-range
              class="cally bg-base-100 border-base-300 rounded-box border pt-1"
              show-outside-days
              months="2"
            >
              <span slot="previous" class="iconify lucide--chevron-left"></span>
              <span slot="next" class="iconify lucide--chevron-right"></span>
              <div class="flex gap-2 max-md:flex-wrap">
                <calendar-month></calendar-month>
                <calendar-month offset="1"></calendar-month>
              </div>
            </calendar-range>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
