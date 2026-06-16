<script setup lang="ts">
const route = useRoute();
const { isValidSlug, getProduct } = useRawProducts();

const slug = route.params.slug as string;

if (!isValidSlug(slug)) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
  });
}

const product = computed(() => getProduct(slug));

useHead({
  title: computed(() => product.value.name),
});
</script>

<template>
  <div>
    <!-- Page Header -->
    <section
      class="bg-gradient-to-br from-green-light/30 via-white to-stone-50 py-12 md:py-16"
    >
      <div class="mx-auto max-w-5xl px-4 sm:px-6">
        <NuxtLink
          to="/product/spices-commodities"
          class="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-green-dark hover:underline"
        >
          ← {{ $t("content.product.backToCatalog") }}
        </NuxtLink>
        <h1 class="text-3xl font-bold text-green-dark md:text-4xl">
          {{ product.name }}
        </h1>
      </div>
    </section>

    <!-- Product Detail -->
    <section class="bg-white py-12 md:py-16">
      <div class="mx-auto max-w-5xl px-4 sm:px-6">
        <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <!-- Image -->
          <div
            class="overflow-hidden rounded-2xl border-2 border-green-dark bg-gray-100 shadow-sm"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="aspect-square w-full object-cover"
            />
          </div>

          <!-- Overview -->
          <div>
            <p class="text-lg leading-relaxed text-gray-600">
              {{ product.description }}
            </p>

            <dl
              class="mt-8 grid gap-x-8 gap-y-4 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm sm:grid-cols-2"
            >
              <div>
                <dt class="mb-1 font-semibold text-gray-900">
                  {{ $t("content.product.moq") }}
                </dt>
                <dd class="text-gray-600">{{ product.moq }}</dd>
              </div>
              <div>
                <dt class="mb-1 font-semibold text-gray-900">
                  {{ $t("content.product.packaging") }}
                </dt>
                <dd class="text-gray-600">{{ product.packaging }}</dd>
              </div>
              <div>
                <dt class="mb-1 font-semibold text-gray-900">
                  {{ $t("content.product.paymentSystem") }}
                </dt>
                <dd class="text-gray-600">{{ product.paymentSystem }}</dd>
              </div>
              <div>
                <dt class="mb-1 font-semibold text-gray-900">
                  {{ $t("content.product.hsCode") }}
                </dt>
                <dd class="text-gray-600">{{ product.hsCode }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Specifications & Advantages -->
        <div
          class="mt-12 grid gap-x-12 gap-y-8 text-sm md:grid-cols-2"
        >
          <div>
            <h2 class="mb-3 font-semibold text-gray-900">
              {{ $t("content.productRaw.specificationsLabel") }}
            </h2>
            <dl
              class="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1.5 text-gray-600"
            >
              <template
                v-for="(spec, i) in product.specifications"
                :key="i"
              >
                <dt class="font-medium">{{ spec.label }}</dt>
                <dd>: {{ spec.value }}</dd>
              </template>
            </dl>
          </div>

          <div>
            <h2 class="mb-3 font-semibold text-gray-900">
              {{ $t("content.productRaw.advantagesLabel") }}
            </h2>
            <ol class="list-decimal space-y-1.5 pl-5 text-gray-600">
              <li v-for="(adv, i) in product.advantages" :key="i">
                {{ adv }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
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
