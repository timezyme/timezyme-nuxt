<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Dropdown" :items="[{ label: 'Components' }, { label: 'Dropdown', active: true }]" />

    <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div class="bg-base-100 card card-border">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <div class="dropdown">
              <div
                tabIndex="{0}"
                role="button"
                class="btn"
              >
                Click
              </div>
              <ul
                tabIndex="{0}"
                class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>

            <div class="dropdown dropdown-hover">
              <div
                tabIndex="{0}"
                role="button"
                class="btn"
              >
                Hover
              </div>
              <ul
                tabIndex="{0}"
                class="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <details class="dropdown">
              <summary class="btn">
                Stick
              </summary>
              <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
            <details class="dropdown">
              <summary class="btn btn-disabled">
                Disabled
              </summary>
              <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Card
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <div class="dropdown">
              <div
                tabIndex="{0}"
                role="button"
                class="btn"
              >
                Information
              </div>
              <div
                tabIndex="{0}"
                class="dropdown-content card rounded-box bg-base-100 card-border my-2 w-60 shadow-sm"
              >
                <div class="card-body p-4">
                  <div class="card-title">
                    Card title!
                  </div>
                  <p>you can use any element as a dropdown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div class="card card-border bg-base-100">
          <div class="card-body">
            <div class="card-title">
              Side
            </div>
            <div class="mt-4 flex flex-wrap gap-4">
              <div class="dropdown dropdown-top dropdown-center">
                <div
                  tabIndex="{0}"
                  role="button"
                  class="btn"
                >
                  Top
                </div>
                <ul
                  tabIndex="{0}"
                  class="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <div class="dropdown dropdown-bottom dropdown-center">
                <div
                  tabIndex="{0}"
                  role="button"
                  class="btn"
                >
                  Bottom
                </div>
                <ul
                  tabIndex="{0}"
                  class="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <div class="dropdown dropdown-left dropdown-center">
                <div
                  tabIndex="{0}"
                  role="button"
                  class="btn"
                >
                  Bottom
                </div>
                <ul
                  tabIndex="{0}"
                  class="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <div class="dropdown dropdown-right dropdown-center">
                <div
                  tabIndex="{0}"
                  role="button"
                  class="btn"
                >
                  Right
                </div>
                <ul
                  tabIndex="{0}"
                  class="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card card-border bg-base-100">
          <div class="card-body">
            <div class="card-title">
              Align
            </div>
            <div class="mt-4 flex flex-wrap gap-4">
              <div class="dropdown dropdown-top dropdown-start">
                <div
                  tabIndex="{0}"
                  role="button"
                  class="btn"
                >
                  Start
                </div>
                <ul
                  tabIndex="{0}"
                  class="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <div class="dropdown dropdown-top dropdown-center">
                <div
                  tabIndex="{0}"
                  role="button"
                  class="btn"
                >
                  Center
                </div>
                <ul
                  tabIndex="{0}"
                  class="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <div class="dropdown dropdown-top dropdown-end">
                <div
                  tabIndex="{0}"
                  role="button"
                  class="btn"
                >
                  Right
                </div>
                <ul
                  tabIndex="{0}"
                  class="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
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
            <div class="grid grid-cols-3 place-items-center gap-4">
              <div class="dropdown dropdown-top dropdown-end">
                <div
                  tabIndex="{0}"
                  aria-label="Dropdown"
                  role="button"
                  class="btn btn-square btn-sm"
                >
                  <span class="iconify lucide--arrow-up -rotate-45"></span>
                </div>
                <div
                  tabIndex="{0}"
                  class="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm"
                >
                  <p>Side: Top</p>
                  <p>Align: End</p>
                </div>
              </div>
              <div class="dropdown dropdown-top dropdown-center">
                <div
                  tabIndex="{0}"
                  aria-label="Dropdown"
                  role="button"
                  class="btn btn-square btn-sm"
                >
                  <span class="iconify lucide--arrow-up"></span>
                </div>
                <div
                  tabIndex="{0}"
                  class="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm"
                >
                  <p>Side: Top</p>
                  <p>Align: Center</p>
                </div>
              </div>
              <div class="dropdown dropdown-top dropdown-start">
                <div
                  tabIndex="{0}"
                  aria-label="Dropdown"
                  role="button"
                  class="btn btn-square btn-sm"
                >
                  <span class="iconify lucide--arrow-up rotate-45"></span>
                </div>
                <div
                  tabIndex="{0}"
                  class="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm"
                >
                  <p>Side: Top</p>
                  <p>Align: Start</p>
                </div>
              </div>
              <div class="dropdown dropdown-left dropdown-center">
                <div
                  tabIndex="{0}"
                  aria-label="Dropdown"
                  role="button"
                  class="btn btn-square btn-sm"
                >
                  <span class="iconify lucide--arrow-up -rotate-90"></span>
                </div>
                <div
                  tabIndex="{0}"
                  class="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm"
                >
                  <p>Side: Left</p>
                  <p>Align: Center</p>
                </div>
              </div>
              <div class="bg-base-200 size-5 rounded-full"></div>
              <div class="dropdown dropdown-right dropdown-center">
                <div
                  tabIndex="{0}"
                  aria-label="Dropdown"
                  role="button"
                  class="btn btn-square btn-sm"
                >
                  <span class="iconify lucide--arrow-up rotate-90"></span>
                </div>
                <div
                  tabIndex="{0}"
                  class="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm"
                >
                  <p>Side: Right</p>
                  <p>Align: Center</p>
                </div>
              </div>
              <div class="dropdown dropdown-bottom dropdown-end">
                <div
                  tabIndex="{0}"
                  aria-label="Dropdown"
                  role="button"
                  class="btn btn-square btn-sm"
                >
                  <span class="iconify lucide--arrow-up -rotate-135"></span>
                </div>
                <div
                  tabIndex="{0}"
                  class="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm"
                >
                  <p>Side: Bottom</p>
                  <p>Align: End</p>
                </div>
              </div>
              <div class="dropdown dropdown-bottom dropdown-center">
                <div
                  tabIndex="{0}"
                  aria-label="Dropdown"
                  role="button"
                  class="btn btn-square btn-sm"
                >
                  <span class="iconify lucide--arrow-up rotate-180"></span>
                </div>
                <div
                  tabIndex="{0}"
                  class="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm"
                >
                  <p>Side: Bottom</p>
                  <p>Align: Center</p>
                </div>
              </div>
              <div class="dropdown dropdown-bottom dropdown-start">
                <div
                  tabIndex="{0}"
                  aria-label="Dropdown"
                  role="button"
                  class="btn btn-square btn-sm"
                >
                  <span class="iconify lucide--arrow-up rotate-135"></span>
                </div>
                <div
                  tabIndex="{0}"
                  class="dropdown-content bg-base-100 card card-border z-1 m-1 w-36 p-3 text-sm shadow-xs hover:shadow-sm"
                >
                  <p>Side: Bottom</p>
                  <p>Align: Start</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            In Text
          </div>
          <div class="mt-2 flex flex-wrap items-center gap-1">
            <span class="text-sm">A normal text and a helper dropdown</span>
            <div class="dropdown dropdown-top dropdown-center">
              <div
                tabIndex="{0}"
                role="button"
                class="btn btn-circle btn-xs btn-ghost"
                aria-label="Dropdown"
              >
                <span class="iconify lucide--info text-base-content/80 size-4"></span>
              </div>
              <div
                tabIndex="{0}"
                class="dropdown-content card rounded-box bg-base-100 card-border my-1 w-44 shadow-sm"
              >
                <div class="card-body gap-1 p-3">
                  <div class="card-title">
                    Need more info?
                  </div>
                  <p class="text-sm">
                    Here is a description!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
