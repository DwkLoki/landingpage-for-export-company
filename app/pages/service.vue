<script setup>
const { t } = useI18n();

useHead({
  title: computed(() => t("meta.serviceTitle")),
});
</script>
<template>
  <div>
    <!-- Page Header -->
    <section
      class="bg-gradient-to-br from-green-light/30 via-white to-stone-50 py-16 md:py-20"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-green-dark">
          {{ $t("content.service.title") }}
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          {{ $t("content.service.desc") }}
        </p>
      </div>
    </section>

    <!-- Services -->
    <section class="py-12 md:py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-light p-6 md:p-8 rounded-xl">
            <h2 class="text-xl font-bold text-gray-900 mb-3">
              {{ $t("content.service.ourService.firstPoint") }}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {{ $t("content.service.ourService.firstPointDesc") }}
            </p>
          </div>
          <div class="bg-gray-light p-6 md:p-8 rounded-xl">
            <h2 class="text-xl font-bold text-gray-900 mb-3">
              {{ $t("content.service.ourService.secondPoint") }}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {{ $t("content.service.ourService.secondPointDesc") }}
            </p>
          </div>
          <div class="bg-gray-light p-6 md:p-8 rounded-xl">
            <h2 class="text-xl font-bold text-gray-900 mb-3">
              {{ $t("content.service.ourService.thirdPoint") }}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {{ $t("content.service.ourService.thirdPointDesc") }}
            </p>
          </div>
          <div class="bg-gray-light p-6 md:p-8 rounded-xl">
            <h2 class="text-xl font-bold text-gray-900 mb-3">
              {{ $t("content.service.ourService.fourthPoint") }}
            </h2>
            <p class="text-gray-600 leading-relaxed">
              {{ $t("content.service.ourService.fourthPointDesc") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="py-16 md:py-20 bg-gray-light">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p class="text-lg text-gray-700 mb-6">
          {{ $t("cta.readyToScale") }}
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg transition-colors"
        >
          {{ $t("label.reqExport") }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
