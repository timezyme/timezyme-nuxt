<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Tooltip" :items="[{ label: 'Components' }, { label: 'Tooltip', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <div class="tooltip" data-tip="It's tooltip">
              <button class="btn">
                Hover me
              </button>
            </div>
            <div class="tooltip tooltip-open" data-tip="I'm never go">
              <button class="btn">
                Always
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Position
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <div class="tooltip tooltip-left" data-tip="Left">
              <button class="btn">
                Left
              </button>
            </div>
            <div class="tooltip tooltip-top" data-tip="Top">
              <button class="btn">
                Top
              </button>
            </div>
            <div class="tooltip tooltip-right" data-tip="Right">
              <button class="btn">
                Right
              </button>
            </div>
            <div class="tooltip tooltip-bottom" data-tip="Bottom">
              <button class="btn">
                Bottom
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Color
          </div>
          <div class="mt-4 flex flex-wrap gap-3">
            <div class="tooltip tooltip-primary" data-tip="Primary">
              <button class="btn btn-primary">
                Primary
              </button>
            </div>
            <div class="tooltip tooltip-secondary" data-tip="Secondary">
              <button class="btn btn-secondary">
                Secondary
              </button>
            </div>
            <div class="tooltip tooltip-accent" data-tip="Accent">
              <button class="btn btn-accent">
                Accent
              </button>
            </div>
            <div class="tooltip tooltip-success" data-tip="Success">
              <button class="btn btn-success">
                Success
              </button>
            </div>
            <div class="tooltip tooltip-info" data-tip="Info">
              <button class="btn btn-info">
                Info
              </button>
            </div>
            <div class="tooltip tooltip-warning" data-tip="Warning">
              <button class="btn btn-warning">
                Warning
              </button>
            </div>
            <div class="tooltip tooltip-error" data-tip="Error">
              <button class="btn btn-error">
                Error
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Custom
          </div>
          <div class="mt-4">
            <div class="tooltip">
              <div class="tooltip-content bg-transparent p-0">
                <div class="card card-border bg-base-100 text-base-content shadow-sm">
                  <div class="card-body p-3">
                    <div class="card-title">
                      Card title
                    </div>
                    <p>you can use any element as a tooltip</p>
                  </div>
                </div>
              </div>
              <button class="btn">
                Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
