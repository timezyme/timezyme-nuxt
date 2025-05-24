<script setup lang="ts">
import GradientDonutChart from "./GradientDonutChart.vue";
import MonochromePieChart from "./MonochromePieChart.vue";
import PatternDonutChart from "./PatternDonutChart.vue";
import SimplePieChart from "./SimplePieChart.vue";

definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Pie Charts" :items="[{ label: 'Apex Charts' }, { label: 'Pie', active: true }]" />

    <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body gap-3 pb-0">
          <div class="card-title">
            Simple Pie
          </div>
          <SimplePieChart />
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body gap-3 pb-0">
          <div class="card-title">
            Monochrome Pie
          </div>
          <MonochromePieChart />
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body gap-3 pb-0">
          <div class="card-title">
            Gradient Donut
          </div>
          <GradientDonutChart />
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body gap-3 pb-0">
          <div class="card-title">
            Pattern Donut
          </div>
          <PatternDonutChart />
        </div>
      </div>
    </div>
  </div>
</template>
