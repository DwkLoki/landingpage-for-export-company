<script setup>
import product1 from "~/assets/images/product-1.jpg";
import product2 from "~/assets/images/product-2.jpg";
import product3 from "~/assets/images/product-3.jpg";
import product4 from "~/assets/images/product-4.jpg";
import bpomLogo from "~/assets/images/bpom.png";
import halalLogo from "~/assets/images/halal.svg";
import pirtLogo from "~/assets/images/pirt.png";
import sniLogo from "~/assets/images/sni.png";

const { t } = useI18n();

useHead({
  title: computed(() => t("meta.finishedProductTitle")),
});

const products = [
  {
    id: "firstProduct",
    name: "Palm Sugar Powder",
    image: product1,
  },
  {
    id: "secondProduct",
    name: "Premium Shredded Tuna",
    image: product2,
  },
  {
    id: "thirdProduct",
    name: "Mackerel Fish Crackers",
    image: product3,
  },
  {
    id: "fourthProduct",
    name: "Passion Fruit Beverage",
    image: product4,
  },
];
</script>

<template>
  <div>
    <!-- Page Header -->
    <section
      class="bg-gradient-to-br from-green-light/30 via-white to-stone-50 py-16 md:py-20"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-green-dark">
          {{ $t("content.product.title") }}
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          {{ $t("content.product.desc") }}
        </p>
      </div>
    </section>

    <!-- Standards & Certifications -->
    <section class="pt-8 md:pt-12 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <p
          class="text-xs uppercase tracking-wider text-gray-500 text-center mb-6 font-semibold"
        >
          {{ $t("content.product.standardsLabel") }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          <img :src="bpomLogo" alt="BPOM" class="h-14 md:h-16 object-contain" />
          <img
            :src="halalLogo"
            alt="Halal"
            class="h-14 md:h-16 object-contain"
          />
          <img
            :src="pirtLogo"
            alt="P-IRT"
            class="h-14 md:h-16 object-contain"
          />
          <img :src="sniLogo" alt="SNI" class="h-14 md:h-16 object-contain" />
        </div>
      </div>
    </section>

    <!-- Products -->
    <section
      class="pt-12 pb-12 md:pt-44 md:pb-24 lg:py-24 bg-white lg:space-y-24 md:space-y-44 space-y-12"
    >
      <article
        v-for="(product, index) in products"
        :key="product.id"
        class="w-full"
      >
        <div
          class="relative flex w-full max-w-screen-xl mx-auto xl:px-12 md:px-12 px-6"
          :class="index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'"
        >
          <!-- IMAGE -->
          <div
            class="absolute top-4 left-1/2 -translate-x-1/2 md:-top-[35%] md:translate-y-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 w-72 h-72 md:w-80 md:h-80 z-10"
            :class="index % 2 === 0 ? 'lg:left-12' : 'lg:right-12 lg:left-auto'"
          >
            <div
              class="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-gray-100"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <!-- CARD -->
          <div
            class="relative lg:w-[90%] w-full rounded-2xl border-2 border-green-dark bg-white shadow-sm lg:py-12 md:py-8 py-4"
            :class="
              index % 2 === 0
                ? 'lg:pl-72 lg:pr-12 md:px-8 md:pt-64 px-4 pt-80'
                : 'lg:pr-72 lg:pl-12 md:px-8 md:pt-64 px-4 pt-80'
            "
          >
            <!-- CONTENT -->
            <div>
              <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {{ $t(`content.product.${product.id}.name`) }}
              </h2>

              <p class="text-gray-600 leading-relaxed text-lg mb-8 max-w-3xl">
                {{ $t(`content.product.${product.id}.description`) }}
              </p>

              <dl class="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
                <div>
                  <dt class="font-semibold text-gray-900 mb-1">
                    {{ $t("content.product.ingredients") }}
                  </dt>
                  <dd class="text-gray-600">
                    {{ $t(`content.product.${product.id}.ingredients`) }}
                  </dd>
                </div>

                <div>
                  <dt class="font-semibold text-gray-900 mb-1">
                    {{ $t("content.product.shelfLife") }}
                  </dt>
                  <dd class="text-gray-600">
                    {{ $t(`content.product.${product.id}.shelfLife`) }}
                  </dd>
                </div>

                <div>
                  <dt class="font-semibold text-gray-900 mb-1">
                    {{ $t("content.product.benefits") }}
                  </dt>
                  <dd class="text-gray-600">
                    {{ $t(`content.product.${product.id}.benefits`) }}
                  </dd>
                </div>

                <div>
                  <dt class="font-semibold text-gray-900 mb-1">
                    {{ $t("content.product.uses") }}
                  </dt>
                  <dd class="text-gray-600">
                    {{ $t(`content.product.${product.id}.uses`) }}
                  </dd>
                </div>

                <div class="md:col-span-2">
                  <dt class="font-semibold text-gray-900 mb-1">
                    {{ $t("content.product.legality") }}
                  </dt>
                  <dd class="text-gray-600">
                    {{ $t(`content.product.${product.id}.legality`) }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- Closing CTA -->
    <section class="py-16 md:py-20 bg-gray-light">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div class="text-lg text-gray-700 mb-6">
          <p>{{ $t("cta.firstProductDesc") }}</p>
          <p>
            {{ $t("cta.secondProductDesc") }}
          </p>
        </div>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg transition-colors"
        >
          {{ $t("label.contactOurSales") }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
