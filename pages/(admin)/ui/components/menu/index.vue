<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Menu" :items="[{ label: 'Components' }, { label: 'Menu', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <ul class="menu bg-base-200 rounded-box w-40">
              <li>
                <div>Item 1</div>
              </li>
              <li>
                <div>Item 2</div>
              </li>
              <li>
                <div>Item 3</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Boxed
          </div>
          <div class="mt-4">
            <ul class="menu rounded-box border-base-300 w-40 border">
              <li>
                <div>Item 1</div>
              </li>
              <li>
                <div>Item 2</div>
              </li>
              <li>
                <div>Item 3</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Icons
          </div>
          <div class="mt-4">
            <ul class="menu rounded-box bg-base-200">
              <li>
                <div>
                  <span class="iconify lucide--users size-5"></span>
                </div>
              </li>
              <li>
                <div>
                  <span class="iconify lucide--folder size-5"></span>
                </div>
              </li>
              <li>
                <div>
                  <span class="iconify lucide--hard-drive size-5"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Icon with label
          </div>
          <div class="mt-4">
            <ul class="menu rounded-box bg-base-200 w-40">
              <li>
                <div class="space-x-1">
                  <span class="iconify lucide--users size-5"></span>
                  <span>Peoples</span>
                </div>
              </li>
              <li>
                <div class="space-x-1">
                  <span class="iconify lucide--folder size-5"></span>
                  <span>Folders</span>
                </div>
              </li>
              <li>
                <div class="space-x-1">
                  <span class="iconify lucide--hard-drive size-5"></span>
                  <span>Storage</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Horizontal
          </div>
          <div class="mt-4">
            <ul class="menu rounded-box bg-base-200 menu-horizontal">
              <li>
                <div>
                  <span class="iconify lucide--users size-5"></span>
                </div>
              </li>
              <li>
                <div>
                  <span class="iconify lucide--folder size-5"></span>
                </div>
              </li>
              <li>
                <div>
                  <span class="iconify lucide--hard-drive size-5"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Horizontal label
          </div>
          <div class="mt-4">
            <ul class="menu rounded-box bg-base-200 menu-horizontal">
              <li>
                <div class="space-x-1">
                  <span class="iconify lucide--users size-5"></span>
                  <span>Peoples</span>
                </div>
              </li>
              <li>
                <div class="space-x-1">
                  <span class="iconify lucide--folder size-5"></span>
                  <span>Folders</span>
                </div>
              </li>
              <li>
                <div class="space-x-1">
                  <span class="iconify lucide--hard-drive size-5"></span>
                  <span>Storage</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Title
          </div>
          <div class="mt-4">
            <ul class="menu bg-base-200 rounded-box w-40">
              <li>
                <h2 class="menu-title">
                  Main Item
                </h2>
                <ul>
                  <li>
                    <div>Item 1</div>
                  </li>
                  <li>
                    <div>Item 2</div>
                  </li>
                  <li>
                    <div>Item 3</div>
                  </li>
                  <li>
                    <div>Item 4</div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Separator
          </div>
          <div class="bg-base-200 rounded-box mt-4 w-40 p-1">
            <h2 class="menu-title pb-1 font-medium">
              Menu 1
            </h2>

            <ul class="menu w-full pt-0">
              <li>
                <div>Item 1.a</div>
              </li>
              <li>
                <div>Item 1.b</div>
              </li>
            </ul>
            <div class="bg-base-300 -mx-1 h-px"></div>
            <h2 class="menu-title pb-1 font-medium">
              Menu 2
            </h2>
            <ul class="menu w-full pt-0">
              <li>
                <div>Item 2.a</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Sub Menu
          </div>
          <ul class="menu bg-base-200 rounded-box mt-4 w-48">
            <li>
              <div>Item 1</div>
            </li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <div>Submenu 1</div>
                  </li>
                  <li>
                    <div>Submenu 2</div>
                  </li>
                  <li>
                    <details open>
                      <summary>Parent</summary>
                      <ul>
                        <li>
                          <div>Submenu 1</div>
                        </li>
                        <li>
                          <div>Submenu 2</div>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <div>Item 3</div>
            </li>
          </ul>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Responsive
          </div>
          <ul class="menu lg:menu-horizontal bg-base-200 rounded-box mt-4 min-w-48">
            <li>
              <div>Item 1</div>
            </li>
            <li>
              <details open>
                <summary>Parent item</summary>
                <ul class="w-40">
                  <li>
                    <div>Submenu 1</div>
                  </li>
                  <li>
                    <div>Submenu 2</div>
                  </li>
                  <li>
                    <details open>
                      <summary>Parent</summary>
                      <ul>
                        <li>
                          <div>item 1</div>
                        </li>
                        <li>
                          <div>item 2</div>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <div>Item 3</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
