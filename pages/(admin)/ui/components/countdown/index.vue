<script setup lang="ts">
import PageTitle from "@/components/PageTitle.vue";

definePageMeta({
  layout: "admin",
});

const value = ref(59);
let interval: number;

onMounted(() => {
  interval = window.setInterval(() => {
    value.value = value.value <= 0 ? 59 : value.value - 1;
    if (value.value < 0) {
      clearInterval(interval);
    }
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <div>
    <PageTitle title="Countdown" :items="[{ label: 'Components' }, { label: 'Countdown', active: true }]" />
    <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <span class="countdown">
              <span :style="`--value: ${value}`"></span>
            </span>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Clock
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-2">
            <span class="countdown"><span style="--value: 10"></span></span>
            <span>:</span>
            <span class="countdown"><span style="--value: 24"></span></span>
            <span>:</span>
            <span class="countdown">
              <span :style="`--value: ${value}`"></span>
            </span>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Label
          </div>
          <div class="mt-4 flex flex-wrap gap-5 text-center">
            <div class="flex flex-col">
              <span class="countdown text-xl md:text-5xl">
                <span style="--value: 15"></span>
              </span>
              Days
            </div>
            <div class="flex flex-col">
              <span class="countdown text-xl md:text-5xl">
                <span style="--value: 10"></span>
              </span>
              Hours
            </div>
            <div class="flex flex-col">
              <span class="countdown text-xl md:text-5xl">
                <span style="--value: 24"></span>
              </span>
              Minutes
            </div>
            <div class="flex flex-col">
              <span class="countdown text-xl md:text-5xl">
                <span :style="`--value: ${value}`"></span>
              </span>
              Seconds
            </div>
          </div>
        </div>
      </div>

      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Boxed
          </div>
          <div class="mt-4 flex flex-wrap gap-3 text-center md:gap-5">
            <div class="bg-base-200 rounded-box flex flex-col items-center gap-1 p-3 text-sm">
              <span class="countdown text-xl md:text-3xl">
                <span style="--value: 15"></span>
              </span>
              Days
            </div>
            <div class="bg-base-200 rounded-box flex flex-col items-center gap-1 p-3 text-sm">
              <span class="countdown text-xl md:text-3xl">
                <span style="--value: 10"></span>
              </span>
              Hours
            </div>
            <div class="bg-base-200 rounded-box flex flex-col items-center gap-1 p-3 text-sm">
              <span class="countdown text-xl md:text-3xl">
                <span style="--value: 24"></span>
              </span>
              Minutes
            </div>
            <div class="bg-base-200 rounded-box flex flex-col items-center gap-1 p-3 text-sm">
              <span class="countdown text-xl md:text-3xl">
                <span :style="`--value: ${value}`"></span>
              </span>
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
