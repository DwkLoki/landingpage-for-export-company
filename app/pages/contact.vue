<script setup lang="ts">
const { t } = useI18n();
const { buildWhatsAppUrl } = useWhatsApp();

useHead({
  title: computed(() => t("meta.contactTitle")),
});

const form = reactive({
  fullName: "",
  companyName: "",
  country: "",
  email: "",
  phone: "",
  productInterest: "",
  orderVolume: "",
  message: "",
});

function onSubmit() {
  const fields: Array<[label: string, value: string]> = [
    [t("content.contact.draft.fullName"), form.fullName],
    [t("content.contact.draft.companyName"), form.companyName],
    [t("content.contact.draft.country"), form.country],
    [t("content.contact.draft.email"), form.email],
    [t("content.contact.draft.phone"), form.phone],
    [t("content.contact.draft.productInterest"), form.productInterest],
    [t("content.contact.draft.orderVolume"), form.orderVolume],
  ];

  const details = fields
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value.trim()}`);

  const message = [
    t("content.contact.draft.title"),
    "",
    ...details,
    "",
    `${t("content.contact.draft.message")}:`,
    form.message.trim(),
  ].join("\n");

  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
</script>

<template>
  <div>
    <section
      class="bg-gradient-to-br from-green-light/30 via-white to-stone-50 py-16 md:py-20"
    >
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 class="text-3xl font-bold text-green-dark md:text-4xl">
          {{ $t("content.contact.title") }}
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          {{ $t("content.contact.desc") }}
        </p>
      </div>
    </section>

    <section class="bg-white py-12 md:py-16">
      <div
        class="mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_20rem] md:gap-16"
      >
        <div>
          <h2 class="text-xl font-bold text-gray-900">
            {{ $t("content.contact.form.title") }}
          </h2>
          <p class="mt-2 text-sm text-gray-500">
            {{ $t("content.contact.form.requiredNote") }}
          </p>

          <form class="mt-6 space-y-5" @submit.prevent="onSubmit">
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  for="fullName"
                  class="mb-1 block text-sm font-medium text-gray-700"
                >
                  {{ $t("content.contact.form.fullName.label") }}
                  <span class="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  id="fullName"
                  v-model="form.fullName"
                  type="text"
                  autocomplete="name"
                  required
                  :placeholder="$t('content.contact.form.fullName.placeholder')"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label
                  for="companyName"
                  class="mb-1 block text-sm font-medium text-gray-700"
                >
                  {{ $t("content.contact.form.companyName.label") }}
                </label>
                <input
                  id="companyName"
                  v-model="form.companyName"
                  type="text"
                  autocomplete="organization"
                  :placeholder="
                    $t('content.contact.form.companyName.placeholder')
                  "
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label
                  for="country"
                  class="mb-1 block text-sm font-medium text-gray-700"
                >
                  {{ $t("content.contact.form.country.label") }}
                </label>
                <input
                  id="country"
                  v-model="form.country"
                  type="text"
                  autocomplete="country-name"
                  :placeholder="$t('content.contact.form.country.placeholder')"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label
                  for="email"
                  class="mb-1 block text-sm font-medium text-gray-700"
                >
                  {{ $t("content.contact.form.email.label") }}
                  <span class="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  required
                  :placeholder="$t('content.contact.form.email.placeholder')"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label
                  for="phone"
                  class="mb-1 block text-sm font-medium text-gray-700"
                >
                  {{ $t("content.contact.form.phone.label") }}
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  autocomplete="tel"
                  :placeholder="$t('content.contact.form.phone.placeholder')"
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label
                  for="productInterest"
                  class="mb-1 block text-sm font-medium text-gray-700"
                >
                  {{ $t("content.contact.form.productInterest.label") }}
                </label>
                <input
                  id="productInterest"
                  v-model="form.productInterest"
                  type="text"
                  :placeholder="
                    $t('content.contact.form.productInterest.placeholder')
                  "
                  class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                />
              </div>
            </div>

            <div>
              <label
                for="orderVolume"
                class="mb-1 block text-sm font-medium text-gray-700"
              >
                {{ $t("content.contact.form.orderVolume.label") }}
              </label>
              <input
                id="orderVolume"
                v-model="form.orderVolume"
                type="text"
                :placeholder="
                  $t('content.contact.form.orderVolume.placeholder')
                "
                class="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
              />
            </div>

            <div>
              <label
                for="message"
                class="mb-1 block text-sm font-medium text-gray-700"
              >
                {{ $t("content.contact.form.message.label") }}
                <span class="text-red-600" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                :placeholder="$t('content.contact.form.message.placeholder')"
                class="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
              />
            </div>

            <button
              type="submit"
              class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-dark px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-dark focus:ring-offset-2 active:translate-y-px sm:w-auto"
            >
              <LucideMessageCircle :size="20" aria-hidden="true" />
              {{ $t("content.contact.form.submit") }}
            </button>
          </form>
        </div>

        <aside>
          <h2 class="mb-4 text-xl font-bold text-gray-900">
            {{ $t("content.contact.directContact") }}
          </h2>
          <div class="space-y-3 text-gray-600">
            <p class="flex items-start gap-2">
              <span aria-hidden="true">📍</span>
              <span>Makassar City & Maros Regency, Indonesia</span>
            </p>
            <p class="flex items-start gap-2">
              <span aria-hidden="true">📧</span>
              <a
                href="mailto:eksporcelebes89@gmail.com"
                class="break-all text-amber-600 hover:underline"
              >
                eksporcelebes89@gmail.com
              </a>
            </p>
            <p class="flex items-start gap-2">
              <span aria-hidden="true">📞</span>
              <a
                :href="buildWhatsAppUrl()"
                target="_blank"
                rel="noopener noreferrer"
                class="text-amber-600 hover:underline"
              >
                +62 822-8993-0399
              </a>
            </p>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
