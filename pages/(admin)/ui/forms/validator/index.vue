<script setup lang="ts">
definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <PageTitle title="Validator" :items="[{ label: 'Forms' }, { label: 'Validator', active: true }]" />

    <div class="mt-6 grid gap-6 lg:grid-cols-2">
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Email
          </div>
          <div class="mt-4">
            <label class="input validator">
              <span class="iconify lucide--mail text-base-content/60 size-5"></span>
              <input
                class=""
                type="email"
                required
                placeholder="mail@site.com"
              />
            </label>
            <div class="validator-hint">
              Enter valid email address
            </div>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Phone Number
          </div>
          <div class="mt-4">
            <label class="input validator">
              <span class="iconify lucide--smartphone text-base-content/60 size-5"></span>
              <input
                type="tel"
                class="tabular-nums"
                required
                placeholder="Phone"
                pattern="[0-9]*"
                minLength="{10}"
                maxLength="{10}"
                title="Must be 10 digits"
              />
            </label>
            <p class="validator-hint">
              Must be 10 digits
            </p>
          </div>
        </div>
      </div>

      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Date Validator
          </div>
          <div class="mt-4">
            <label class="input validator">
              <span class="iconify lucide--calendar text-base-content/60 size-5"></span>
              <input
                type="date"
                required
                placeholder="Pick a date in 2025"
                min="2025-01-01"
                max="2025-12-31"
                title="Must be valid date"
              />
            </label>
            <p class="validator-hint">
              Must be 2025
            </p>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Time Validator
          </div>
          <div class="mt-4">
            <label class="input validator">
              <span class="iconify lucide--clock text-base-content/60 size-5"></span>
              <input
                type="time"
                min="09:00"
                max="18:00"
                aria-label="Input"
              />
            </label>
            <p class="validator-hint">
              Use only office time (9 AM to 6 PM)
            </p>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Username
          </div>
          <div class="mt-4">
            <label class="input validator">
              <span class="iconify lucide--user text-base-content/60 size-5"></span>
              <input
                type="text"
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="{3}"
                maxLength="{30}"
                title="Only letters, numbers or dash"
              />
            </label>
            <p class="validator-hint">
              Must be 3 to 30 characters
              <br />
              containing only letters, numbers or dash
            </p>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            URL
          </div>
          <div class="mt-4">
            <label class="input validator">
              <span class="iconify lucide--link text-base-content/60 size-4"></span>
              <input
                type="url"
                required
                placeholder="https://"
                defaultValue="https://"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-ZäöüÄÖÜ0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
            </label>
            <p class="validator-hint">
              Must be valid URL
            </p>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Checkbox
          </div>
          <div class="mt-4">
            <input
              type="checkbox"
              class="checkbox checkbox-primary validator"
              required
              title="Required"
            />
            <p class="validator-hint">
              Required
            </p>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Toggle
          </div>
          <div class="mt-4">
            <input
              type="checkbox"
              class="toggle toggle-primary validator"
              required
              title="Required"
            />
            <p class="validator-hint">
              Required
            </p>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Password
          </div>
          <div class="mt-4">
            <label class="input validator">
              <span class="iconify lucide--key-round text-base-content/60 size-5"></span>
              <input
                type="password"
                required
                minLength="{8}"
                pattern="(?=.*d)(?=.*[a-z])(?=.*[A-Z]).&#123;8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p class="validator-hint">
              Must be more than 8 characters, including
              <br />
              At least one number
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
            </p>
          </div>
        </div>
      </div>
      <div class="card card-border bg-base-100">
        <div class="card-body">
          <div class="card-title">
            Form select
          </div>
          <div class="mt-4">
            <form>
              <select
                class="select validator w-64"
                required
                aria-label="Select"
              >
                <option
                  disabled
                  value=""
                  selected
                >
                  Choose:
                </option>
                <option>Tabs</option>
                <option>Spaces</option>
              </select>
              <p class="validator-hint">
                Required
              </p>
              <div class="mt-1 flex gap-3">
                <button class="btn" type="reset">
                  Clear
                </button>
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
