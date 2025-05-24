<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

function openModal(id: string) {
  document.querySelector<HTMLDialogElement>(id)?.showModal();
}
</script>

<template>
  <div>
    <PageTitle title="Modal" :items="[{ label: 'Components' }, { label: 'Modal', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <button class="btn" @click="openModal('#demo-modal-1')">
              Open
            </button>
            <dialog id="demo-modal-1" class="modal">
              <div class="modal-box">
                <h3 class="text-lg font-medium">
                  Hello!
                </h3>
                <p class="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div class="modal-action">
                  <form method="dialog">
                    <button class="btn">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Close: Button
          </div>
          <div class="mt-4">
            <button class="btn" @click="openModal('#demo-modal-2')">
              Open
            </button>
            <dialog id="demo-modal-2" class="modal">
              <div class="modal-box">
                <form method="dialog">
                  <button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
                    <span class="iconify lucide--x size-4"></span>
                  </button>
                </form>
                <h3 class="text-lg font-medium">
                  Hello!
                </h3>
                <p class="py-4">
                  Press ESC key or click on x button to close
                </p>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Close: Outside
          </div>
          <div class="mt-4">
            <button class="btn" @click="openModal('#demo-modal-3')">
              Open
            </button>
            <dialog id="demo-modal-3" class="modal">
              <div class="modal-box">
                <h3 class="text-lg font-medium">
                  Hello!
                </h3>
                <p class="py-4">
                  Press ESC key or click the button below to close
                </p>
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Close: Button & Outside
          </div>
          <div class="mt-4">
            <button class="btn" @click="openModal('#demo-modal-4')">
              Open
            </button>
            <dialog id="demo-modal-4" class="modal">
              <div class="modal-box">
                <form method="dialog">
                  <button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
                    <span class="iconify lucide--x size-4"></span>
                  </button>
                </form>
                <h3 class="text-lg font-medium">
                  Hello!
                </h3>
                <p class="py-4">
                  Press ESC key or click the button below to close
                </p>
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Using: Anchor <span class="text-base-content/70 text-sm">(Legacy)</span>
          </div>
          <div class="mt-4">
            <NuxtLink href="#demo-modal-anchor" class="btn">
              Open
            </NuxtLink>

            <div
              id="demo-modal-anchor"
              class="modal"
              role="dialog"
            >
              <div class="modal-box">
                <h3 class="text-lg font-medium">
                  Hello!
                </h3>
                <p class="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div class="modal-action">
                  <NuxtLink href="#close" class="btn">
                    Close
                  </NuxtLink>
                </div>
              </div>
              <NuxtLink href="#close" class="modal-backdrop modal-action"></NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Custom width
          </div>
          <div class="mt-4">
            <button class="btn" @click="openModal('#demo-modal-5')">
              Open
            </button>
            <dialog id="demo-modal-5" class="modal">
              <div class="modal-box w-11/12 max-w-5xl">
                <h3 class="text-lg font-medium">
                  Hello!
                </h3>
                <p class="py-4">
                  Press ESC key or click the button below to close
                </p>
                <div class="modal-action">
                  <form method="dialog">
                    <button class="btn">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
