<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Timeline" :items="[{ label: 'Components' }, { label: 'Timeline', active: true }]" />

    <div class="mt-6 grid gap-6 xl:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 overflow-auto">
            <ul class="timeline">
              <li>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  First Macintosh computer
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  iMac
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  iPod
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  iPhone
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  Apple Watch
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Top side
          </div>
          <div class="mt-4 overflow-auto">
            <ul class="timeline">
              <li>
                <div class="timeline-start timeline-box">
                  First Macintosh computer
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start timeline-box">
                  iMac
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start timeline-box">
                  iPod
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start timeline-box">
                  iPhone
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start timeline-box">
                  Apple Watch
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Label
          </div>
          <div class="mt-4 overflow-auto">
            <ul class="timeline">
              <li>
                <div class="timeline-start">
                  1984
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  First Macintosh computer
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start">
                  1998
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  iMac
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start">
                  2001
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  iPod
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start">
                  2007
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  iPhone
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start">
                  2015
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  Apple Watch
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Different side
          </div>
          <div class="mt-4 overflow-auto">
            <ul class="timeline">
              <li>
                <div class="timeline-start timeline-box">
                  First Macintosh computer
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  iMac
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start timeline-box">
                  iPod
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  iPhone
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start timeline-box">
                  Apple Watch
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="card card-border bg-base-100">
          <div class="card-body">
            <div class="card-title">
              Color
            </div>
            <div class="mt-4 overflow-auto">
              <ul class="timeline">
                <li>
                  <div class="timeline-start timeline-box">
                    First Macintosh computer
                  </div>
                  <div class="timeline-middle">
                    <div
                      class="text-primary-content bg-primary grid place-items-center rounded-full p-1"
                    >
                      <span class="iconify lucide--check size-3.5"></span>
                    </div>
                  </div>

                  <hr class="from-primary to-secondary bg-linear-to-r" />
                </li>
                <li>
                  <hr class="bg-secondary" />
                  <div class="timeline-middle">
                    <div
                      class="bg-secondary text-secondary-content grid place-items-center rounded-full p-1"
                    >
                      <span class="iconify lucide--check size-3.5"></span>
                    </div>
                  </div>
                  <div class="timeline-end timeline-box">
                    iMac
                  </div>

                  <hr class="from-secondary to-info bg-linear-to-r" />
                </li>
                <li>
                  <hr class="bg-info" />
                  <div class="timeline-start timeline-box">
                    iPod
                  </div>
                  <div class="timeline-middle">
                    <div class="bg-info text-info-content grid place-items-center rounded-full p-1">
                      <span class="iconify lucide--check size-3.5"></span>
                    </div>
                  </div>

                  <hr class="from-success to-success bg-linear-to-r" />
                </li>
                <li>
                  <hr class="bg-success" />
                  <div class="timeline-middle">
                    <div
                      class="bg-success text-success-content grid place-items-center rounded-full p-1"
                    >
                      <span class="iconify lucide--check size-3.5"></span>
                    </div>
                  </div>
                  <div class="timeline-end timeline-box">
                    iPhone
                  </div>

                  <hr class="from-success to-base-300 bg-linear-to-r" />
                </li>
                <li>
                  <hr />
                  <div class="timeline-start timeline-box">
                    Apple Watch
                  </div>
                  <div class="timeline-middle">
                    <div class="bg-base-200 grid place-items-center rounded-full p-1">
                      <span class="iconify lucide--check size-3.5"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card card-border bg-base-100">
          <div class="card-body">
            <div class="card-title">
              Without icon
            </div>
            <div class="mt-4 overflow-auto">
              <ul class="timeline">
                <li>
                  <div class="timeline-start timeline-box">
                    First Macintosh computer
                  </div>

                  <hr />
                </li>
                <li>
                  <hr />

                  <div class="timeline-end timeline-box">
                    iMac
                  </div>

                  <hr />
                </li>
                <li>
                  <hr />
                  <div class="timeline-start timeline-box">
                    iPod
                  </div>

                  <hr />
                </li>
                <li>
                  <hr />

                  <div class="timeline-end timeline-box">
                    iPhone
                  </div>

                  <hr />
                </li>
                <li>
                  <hr />
                  <div class="timeline-start timeline-box">
                    Apple Watch
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100 h-fit">
        <div class="card-body">
          <div class="card-title">
            Vertical
          </div>
          <div class="mt-4 overflow-auto">
            <ul class="timeline timeline-vertical">
              <li>
                <div class="timeline-start timeline-box">
                  First Macintosh computer
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  iMac
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start timeline-box">
                  iPod
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
                <div class="timeline-end timeline-box">
                  iPhone
                </div>

                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start timeline-box">
                  Apple Watch
                </div>
                <div class="timeline-middle">
                  <div class="bg-base-200 grid place-items-center rounded-full p-1">
                    <span class="iconify lucide--check size-3.5"></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
