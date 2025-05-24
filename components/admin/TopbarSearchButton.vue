<script setup lang="ts">
function showModal() {
  document.querySelector<HTMLDialogElement>("#topbar-search-modal")?.showModal();
}
</script>

<template>
  <button
    class="btn btn-outline btn-sm btn-ghost border-base-300 text-base-content/70 hidden h-9 w-48 justify-start gap-2 !text-sm md:flex"
    onclick="{showModal}"
  >
    <span class="iconify lucide--search size-4"></span>
    <span>Search</span>
  </button>
  <button
    class="btn btn-outline btn-sm btn-square btn-ghost border-base-300 text-base-content/70 flex size-9 md:hidden"
    aria-label="Search"
    @click="showModal"
  >
    <span class="iconify lucide--search size-4"></span>
  </button>
  <dialog id="topbar-search-modal" class="modal p-0">
    <div class="modal-box p-0">
      <div class="input border-base-300 w-full rounded-none border-0 border-b focus:!outline-0 active:!outline-0">
        <span class="iconify lucide--search text-base-content/60 size-4.5"></span>
        <input
          type="search"
          class="grow"
          placeholder="Search"
          aria-label="Search"
        />
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost" aria-label="Close">
            <span class="iconify lucide--x text-base-content/80 size-4"></span>
          </button>
        </form>
      </div>
      <ul class="menu w-full pt-0">
        <li class="menu-title">
          Actions
        </li>
        <li>
          <div>
            <span class="iconify lucide--folder-plus size-4.5"></span>
            <p class="grow text-sm">
              Create a new folder
            </p>
          </div>
        </li>
        <li>
          <div>
            <span class="iconify lucide--file-plus size-4.5"></span>
            <p class="grow text-sm">
              Upload new document
            </p>
          </div>
        </li>
        <li>
          <div>
            <span class="iconify lucide--user-plus size-4.5"></span>
            <p class="grow text-sm">
              Invite to project
            </p>
          </div>
        </li>
      </ul>
      <hr class="border-base-300 h-px" />
      <ul class="menu w-full pt-0">
        <li class="menu-title">
          Quick Links
        </li>
        <li>
          <div>
            <span class="iconify lucide--folders size-4.5"></span>
            <p class="grow text-sm">
              File Manager
            </p>
          </div>
        </li>

        <li>
          <div>
            <span class="iconify lucide--user size-4.5"></span>
            <p class="grow text-sm">
              Profile
            </p>
          </div>
        </li>
        <li>
          <div>
            <span class="iconify lucide--layout-dashboard size-4.5"></span>
            <p class="grow text-sm">
              Dashboard
            </p>
          </div>
        </li>

        <li>
          <div>
            <span class="iconify lucide--help-circle size-4.5"></span>
            <p class="grow text-sm">
              Support
            </p>
          </div>
        </li>

        <li>
          <div>
            <span class="iconify lucide--keyboard size-4.5"></span>
            <p class="grow text-sm">
              Keyboard Shortcuts
            </p>
          </div>
        </li>
      </ul>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
