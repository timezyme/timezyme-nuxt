<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Progress" :items="[{ label: 'Components' }, { label: 'Progress', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-col gap-y-3">
            <progress
              class="progress w-56"
              max="100"
              value="0"
            ></progress>
            <progress
              class="progress w-56"
              max="100"
              value="15"
            ></progress>
            <progress
              class="progress w-56"
              max="100"
              value="30"
            ></progress>
            <progress
              class="progress w-56"
              max="100"
              value="40"
            ></progress>
            <progress
              class="progress w-56"
              max="100"
              value="75"
            ></progress>
            <progress
              class="progress w-56"
              max="100"
              value="100"
            ></progress>
            <progress class="progress w-56"></progress>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Color
          </div>
          <div class="mt-4 flex flex-col gap-y-3">
            <progress
              class="progress progress-primary w-56"
              max="100"
              value="20"
            ></progress>
            <progress
              class="progress progress-secondary w-56"
              max="100"
              value="30"
            ></progress>
            <progress
              class="progress progress-accent w-56"
              max="100"
              value="40"
            ></progress>
            <progress
              class="progress progress-success w-56"
              max="100"
              value="50"
            ></progress>
            <progress
              class="progress progress-info w-56"
              max="100"
              value="60"
            ></progress>
            <progress
              class="progress progress-warning w-56"
              max="100"
              value="70"
            ></progress>
            <progress
              class="progress progress-error w-56"
              max="100"
              value="80"
            ></progress>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Radial
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <div
              aria-label="Radial progress"
              aria-valuenow="20"
              class="radial-progress"
              role="progressbar"
              style="--value: 20; --thickness: 4px; --size: 4rem"
            >
              20%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="40"
              class="radial-progress"
              role="progressbar"
              style="--value: 40; --thickness: 4px; --size: 4rem"
            >
              40%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="60"
              class="radial-progress"
              role="progressbar"
              style="--value: 60; --thickness: 4px; --size: 4rem"
            >
              60%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="80"
              class="radial-progress"
              role="progressbar"
              style="--value: 80; --thickness: 4px; --size: 4rem"
            >
              80%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="95"
              class="radial-progress"
              role="progressbar"
              style="--value: 95; --thickness: 4px; --size: 4rem"
            >
              95%
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Radial: Size
          </div>
          <div class="mt-4 flex gap-4">
            <div
              aria-label="Radial progress"
              aria-valuenow="75"
              class="radial-progress text-xs"
              role="progressbar"
              style="--value: 75; --thickness: 2px; --size: 2rem"
            >
              75%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="75"
              class="radial-progress text-sm"
              role="progressbar"
              style="--value: 75; --thickness: 3px; --size: 3rem"
            >
              75%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="75"
              class="radial-progress"
              role="progressbar"
              style="--value: 75; --thickness: 4px; --size: 4rem"
            >
              75%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="75"
              class="radial-progress"
              role="progressbar"
              style="--value: 75; --thickness: 5px; --size: 5rem"
            >
              75%
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Radial: Color
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <div
              aria-label="Radial progress"
              aria-valuenow="80"
              class="radial-progress text-primary"
              role="progressbar"
              style="--value: 80; --thickness: 4px; --size: 4rem"
            >
              80%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="80"
              class="radial-progress text-secondary"
              role="progressbar"
              style="--value: 80; --thickness: 4px; --size: 4rem"
            >
              80%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="80"
              class="radial-progress text-accent"
              role="progressbar"
              style="--value: 80; --thickness: 4px; --size: 4rem"
            >
              80%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="80"
              class="radial-progress text-success"
              role="progressbar"
              style="--value: 80; --thickness: 4px; --size: 4rem"
            >
              80%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="80"
              class="radial-progress text-info"
              role="progressbar"
              style="--value: 80; --thickness: 4px; --size: 4rem"
            >
              80%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="80"
              class="radial-progress text-warning"
              role="progressbar"
              style="--value: 80; --thickness: 4px; --size: 4rem"
            >
              80%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="80"
              class="radial-progress text-error"
              role="progressbar"
              style="--value: 80; --thickness: 4px; --size: 4rem"
            >
              80%
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Radial: Soft
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <div
              aria-label="Radial progress"
              aria-valuenow="65"
              class="radial-progress text-primary outline-primary/15 outline-4 -outline-offset-4"
              role="progressbar"
              style="--value: 65; --thickness: 4px; --size: 4rem"
            >
              65%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="65"
              class="radial-progress text-secondary outline-secondary/15 outline-4 -outline-offset-4"
              role="progressbar"
              style="--value: 65; --thickness: 4px; --size: 4rem"
            >
              65%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="65"
              class="radial-progress text-accent outline-accent/15 outline-4 -outline-offset-4"
              role="progressbar"
              style="--value: 65; --thickness: 4px; --size: 4rem"
            >
              65%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="65"
              class="radial-progress text-success outline-success/15 outline-4 -outline-offset-4"
              role="progressbar"
              style="--value: 65; --thickness: 4px; --size: 4rem"
            >
              65%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="65"
              class="radial-progress text-info outline-info/15 outline-4 -outline-offset-4"
              role="progressbar"
              style="--value: 65; --thickness: 4px; --size: 4rem"
            >
              65%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="65"
              class="radial-progress text-warning outline-warning/15 outline-4 -outline-offset-4"
              role="progressbar"
              style="--value: 65; --thickness: 4px; --size: 4rem"
            >
              65%
            </div>
            <div
              aria-label="Radial progress"
              aria-valuenow="65"
              class="radial-progress text-error outline-error/15 outline-4 -outline-offset-4"
              role="progressbar"
              style="--value: 65; --thickness: 4px; --size: 4rem"
            >
              65%
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Background
          </div>
          <div class="mt-4 flex gap-4">
            <div
              aria-label="Radial progress"
              aria-valuenow="75"
              class="radial-progress border-primary bg-primary text-primary-content border-4"
              role="progressbar"
              style="--value: 75; --thickness: 4px; --size: 4rem"
            >
              75%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
