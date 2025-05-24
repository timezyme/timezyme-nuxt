<script setup lang="ts">
import GroupedBarChart from "./GroupedBarChart.vue";
import MarkerWithBarChart from "./MarkerWithBarChart.vue";
import NegativeValueBarChart from "./NegativeValueBarChart.vue";
import StackedBarChart from "./StackedBarChart.vue";

definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Bar Charts" :items="[{ label: 'Apex Charts' }, { label: 'Bar', active: true }]" />

    <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body gap-3 pb-0">
          <div class="card-title">
            Bar With Markers
          </div>
          <MarkerWithBarChart />
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body gap-3 pb-0">
          <div class="card-title">
            Grouped Bar
          </div>
          <GroupedBarChart />
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body gap-3 pb-0">
          <div class="card-title">
            Stacked Bar
          </div>
          <StackedBarChart />
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body gap-3 pb-0">
          <div class="card-title">
            Negative Value
          </div>
          <NegativeValueBarChart />
        </div>
      </div>
    </div>
  </div>
</template>
