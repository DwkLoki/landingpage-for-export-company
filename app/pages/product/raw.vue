<script setup>
import blackPepper from "~/assets/images/black-pepper.jpg";
import whitePepper from "~/assets/images/white-pepper.png";
import cloves from "~/assets/images/cloves.jpeg";
import arecaNut from "~/assets/images/areca-nut.jpeg";
import turmeric from "~/assets/images/turmeric.jpg";
import nutmeg from "~/assets/images/nutmeg.jpeg";

const { tm, rt } = useI18n();
const { t } = useI18n();

useHead({
  title: computed(() => t("meta.rawProductTitle")),
});

const products = [
  { id: "blackPepper", image: blackPepper },
  { id: "whitePepper", image: whitePepper },
  { id: "cloves", image: cloves },
  { id: "arecaNut", image: arecaNut },
  { id: "turmeric", image: turmeric },
  { id: "nutmeg", image: nutmeg },
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
          {{ $t("content.productRaw.title") }}
        </h1>
        <p class="mt-4 text-lg text-gray-600">
          {{ $t("content.productRaw.desc") }}
        </p>
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
                :alt="$t(`content.productRaw.${product.id}.name`)"
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
                {{ $t(`content.productRaw.${product.id}.name`) }}
              </h2>

              <p class="text-gray-600 leading-relaxed text-lg mb-8 max-w-3xl">
                {{ $t(`content.productRaw.${product.id}.description`) }}
              </p>

              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-8 text-sm"
              >
                <!-- Specifications -->
                <div>
                  <h3 class="font-semibold text-gray-900 mb-3">
                    {{ $t("content.productRaw.specificationsLabel") }}
                  </h3>
                  <dl
                    class="grid grid-cols-[max-content_1fr] gap-x-3 gap-y-1.5 text-gray-600"
                  >
                    <template
                      v-for="(spec, i) in tm(
                        `content.productRaw.${product.id}.specifications`,
                      )"
                      :key="i"
                    >
                      <dt class="font-medium">
                        {{ rt(spec.label) }}
                      </dt>
                      <dd>: {{ rt(spec.value) }}</dd>
                    </template>
                  </dl>
                </div>

                <!-- Advantages -->
                <div>
                  <h3 class="font-semibold text-gray-900 mb-3">
                    {{ $t("content.productRaw.advantagesLabel") }}
                  </h3>
                  <ol class="list-decimal pl-5 space-y-1.5 text-gray-600">
                    <li
                      v-for="(adv, i) in tm(
                        `content.productRaw.${product.id}.advantages`,
                      )"
                      :key="i"
                    >
                      {{ rt(adv) }}
                    </li>
                  </ol>
                </div>
              </div>
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
