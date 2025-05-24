<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Toast" :items="[{ label: 'Components' }, { label: 'Toast', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <input
              type="checkbox"
              aria-label="Show"
              class="btn peer"
            />
            <div class="opacity-0 transition-all peer-checked:opacity-100">
              <div class="toast">
                <div class="alert alert-info">
                  <span>New message arrived.</span>
                </div>
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
          <div class="mt-4">
            <input
              type="checkbox"
              aria-label="Show"
              class="btn peer"
            />
            <div class="opacity-0 transition-all peer-checked:opacity-100">
              <div class="toast">
                <div class="alert alert-info">
                  <span>New mail arrived.</span>
                </div>
                <div class="alert alert-success">
                  <span>Message sent successfully.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Playground
          </div>
          <div class="grid place-items-center py-6">
            <div class="-mb-16 grid grid-cols-3 place-items-center gap-4">
              <input
                type="checkbox"
                aria-label="Top start"
                class="btn peer/top-start w-fit"
              />
              <input
                type="checkbox"
                aria-label="Top center"
                class="btn peer/top-center w-fit"
              />
              <input
                type="checkbox"
                aria-label="Top end"
                class="btn peer/top-end w-fit"
              />
              <input
                type="checkbox"
                aria-label="Middle start"
                class="btn peer/middle-start w-fit"
              />
              <input
                type="checkbox"
                aria-label="Middle center"
                class="btn peer/middle-center w-fit"
              />
              <input
                type="checkbox"
                aria-label="Middle end"
                class="btn peer/middle-end w-fit"
              />
              <input
                type="checkbox"
                aria-label="Bottom start"
                class="btn peer/bottom-start w-fit"
              />
              <input
                type="checkbox"
                aria-label="Bottom center"
                class="btn peer/bottom-center w-fit"
              />
              <input
                type="checkbox"
                aria-label="Bottom end"
                class="btn peer/bottom-end w-fit"
              />

              <div
                class="z-[-1] opacity-0 transition-all peer-checked/top-start:z-[50] peer-checked/top-start:opacity-100"
              >
                <div class="toast toast-top toast-start">
                  <div class="alert alert-info">
                    <span>New message arrived.</span>
                  </div>
                </div>
              </div>
              <div
                class="z-[-1] opacity-0 transition-all peer-checked/top-center:z-[50] peer-checked/top-center:opacity-100"
              >
                <div class="toast toast-top toast-center">
                  <div class="alert alert-info">
                    <span>New message arrived.</span>
                  </div>
                </div>
              </div>
              <div
                class="z-[-1] opacity-0 transition-all peer-checked/top-end:z-[50] peer-checked/top-end:opacity-100"
              >
                <div class="toast toast-top toast-end">
                  <div class="alert alert-info">
                    <span>New message arrived.</span>
                  </div>
                </div>
              </div>
              <div
                class="z-[-1] opacity-0 transition-all peer-checked/middle-start:z-[50] peer-checked/middle-start:opacity-100"
              >
                <div class="toast toast-middle toast-start">
                  <div class="alert alert-info">
                    <span>New message arrived.</span>
                  </div>
                </div>
              </div>
              <div
                class="z-[-1] opacity-0 transition-all peer-checked/middle-center:z-[50] peer-checked/middle-center:opacity-100"
              >
                <div class="toast toast-middle toast-center">
                  <div class="alert alert-info">
                    <span>New message arrived.</span>
                  </div>
                </div>
              </div>
              <div
                class="z-[-1] opacity-0 transition-all peer-checked/middle-end:z-[50] peer-checked/middle-end:opacity-100"
              >
                <div class="toast toast-middle toast-end">
                  <div class="alert alert-info">
                    <span>New message arrived.</span>
                  </div>
                </div>
              </div>
              <div
                class="z-[-1] opacity-0 transition-all peer-checked/bottom-start:z-[50] peer-checked/bottom-start:opacity-100"
              >
                <div class="toast toast-bottom toast-start">
                  <div class="alert alert-info">
                    <span>New message arrived.</span>
                  </div>
                </div>
              </div>
              <div
                class="z-[-1] opacity-0 transition-all peer-checked/bottom-center:z-[50] peer-checked/bottom-center:opacity-100"
              >
                <div class="toast toast-bottom toast-center">
                  <div class="alert alert-info">
                    <span>New message arrived.</span>
                  </div>
                </div>
              </div>
              <div
                class="z-[-1] opacity-0 transition-all peer-checked/bottom-end:z-[50] peer-checked/bottom-end:opacity-100"
              >
                <div class="toast toast-bottom toast-end">
                  <div class="alert alert-info">
                    <span>New message arrived.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
