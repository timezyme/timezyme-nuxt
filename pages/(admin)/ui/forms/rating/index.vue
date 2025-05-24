<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Rating" :items="[{ label: 'Forms' }, { label: 'Rating', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Default
          </div>
          <div class="mt-4">
            <div class="rating">
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star"
                aria-label="2 star"
                checked
              />
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Color
          </div>
          <div class="mt-4">
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Hearts
          </div>
          <div class="mt-4">
            <div class="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                class="mask mask-heart bg-red-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-3"
                class="mask mask-heart bg-orange-400"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-3"
                class="mask mask-heart bg-yellow-400"
                aria-label="3 star"
                checked
              />
              <input
                type="radio"
                name="rating-3"
                class="mask mask-heart bg-lime-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-3"
                class="mask mask-heart bg-green-400"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Half
          </div>
          <div class="mt-4">
            <div class="rating rating-lg rating-half">
              <input
                type="radio"
                name="rating-11"
                class="mask mask-star-2 mask-half-1 bg-green-500"
                aria-label="0.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                class="mask mask-star-2 mask-half-2 bg-green-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-11"
                class="mask mask-star-2 mask-half-1 bg-green-500"
                aria-label="1.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                class="mask mask-star-2 mask-half-2 bg-green-500"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-11"
                class="mask mask-star-2 mask-half-1 bg-green-500"
                aria-label="2.5 star"
                checked
              />
              <input
                type="radio"
                name="rating-11"
                class="mask mask-star-2 mask-half-2 bg-green-500"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-11"
                class="mask mask-star-2 mask-half-1 bg-green-500"
                aria-label="3.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                class="mask mask-star-2 mask-half-2 bg-green-500"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-11"
                class="mask mask-star-2 mask-half-1 bg-green-500"
                aria-label="4.5 star"
              />
              <input
                type="radio"
                name="rating-11"
                class="mask mask-star-2 mask-half-2 bg-green-500"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Size
          </div>
          <div class="mt-4 flex flex-col items-center gap-3">
            <div class="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                checked
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-5"
                class="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
            <div class="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                class="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-6"
                class="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                class="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-6"
                class="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-6"
                class="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
            <div class="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
            <div class="rating rating-lg">
              <input
                type="radio"
                name="rating-8"
                class="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-8"
                class="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                checked
              />
              <input
                type="radio"
                name="rating-8"
                class="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-8"
                class="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-8"
                class="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
            <div class="rating rating-xl">
              <input
                type="radio"
                name="rating-9"
                class="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-9"
                class="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                checked
              />
              <input
                type="radio"
                name="rating-9"
                class="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-9"
                class="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-9"
                class="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
