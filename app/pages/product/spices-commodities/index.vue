<script setup>
const { t } = useI18n();
const { getAllProducts } = useRawProducts();

const products = computed(() => getAllProducts());

useHead({
  title: computed(() => t("meta.spicesCommoditiesTitle")),
});
</script>

<template>
  <div>
    <!-- Page Header -->
    <section
      class="bg-gradient-to-br from-green-light/30 via-white to-stone-50 py-16 md:py-20"
    >
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h1 class="text-3xl font-bold text-green-dark md:text-4xl">
          {{ $t("content.productRaw.title") }}
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          {{ $t("content.productRaw.desc") }}
        </p>
      </div>
    </section>

    <!-- Product Catalog -->
    <section class="bg-white py-12 md:py-16 lg:py-20">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductCatalogCard
            v-for="product in products"
            :key="product.slug"
            :image="product.image"
            :name="product.name"
            :moq="product.moq"
            :packaging="product.packaging"
            :payment-system="product.paymentSystem"
            :hs-code="product.hsCode"
            :detail-path="`/product/spices-commodities/${product.slug}`"
          />
        </div>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="bg-gray-light py-16 md:py-20">
      <div class="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <div class="mb-6 text-lg text-gray-700">
          <p>{{ $t("cta.firstProductDesc") }}</p>
          <p>{{ $t("cta.secondProductDesc") }}</p>
        </div>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-lg bg-amber-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-amber-700"
        >
          {{ $t("label.contactOurSales") }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
