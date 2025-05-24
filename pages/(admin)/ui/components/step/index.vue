<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Step" :items="[{ label: 'Components' }, { label: 'Step', active: true }]" />

    <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100 overflow-auto">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 overflow-auto">
            <ul class="steps">
              <li class="step step-primary">
                Register
              </li>
              <li class="step step-primary">
                Choose plan
              </li>
              <li class="step">
                Purchase
              </li>
              <li class="step">
                Receive Product
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100 overflow-auto">
        <div class="card-body">
          <div class="card-title">
            Responsive
          </div>
          <div class="mt-4 overflow-auto">
            <ul class="steps steps-vertical lg:steps-horizontal">
              <li class="step step-primary">
                Register
              </li>
              <li class="step step-primary">
                Choose plan
              </li>
              <li class="step">
                Purchase
              </li>
              <li class="step">
                Receive Product
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100 overflow-auto">
        <div class="card-body">
          <div class="card-title">
            Icon
          </div>
          <div class="mt-4 overflow-auto">
            <ul class="steps">
              <li data-content="?" class="step">
                Step 1
              </li>
              <li data-content="!" class="step">
                Step 2
              </li>
              <li data-content="✓" class="step">
                Step 3
              </li>
              <li data-content="✕" class="step">
                Step 4
              </li>
              <li data-content="★" class="step">
                Step 5
              </li>
              <li data-content="" class="step">
                Step 6
              </li>
              <li data-content="●" class="step">
                Step 7
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100 overflow-auto">
        <div class="card-body">
          <div class="card-title">
            Color
          </div>
          <div class="mt-4 overflow-auto">
            <ul class="steps">
              <li class="step step-info">
                Travel to Mars
              </li>
              <li class="step step-info">
                Establish a base
              </li>
              <li class="step step-info">
                Collect samples
              </li>
              <li class="step step-error" data-content="?">
                Return safely
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
