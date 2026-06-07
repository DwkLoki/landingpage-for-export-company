<script setup>
import heroImg from "~/assets/images/hero-image.jpg";
import kemenluLogo from "~/assets/images/kemenlu.png";
import kemendagLogo from "~/assets/images/kemendag.svg";
import beacukaiLogo from "~/assets/images/beacukai.svg";

const { t } = useI18n();

useHead({
  title: computed(() => t("meta.homeTitle")),
});
</script>

<template>
  <div>
    <!-- Hero Section: full viewport, image behind header -->
    <section
      id="hero-section"
      class="-mt-16 relative flex min-h-screen flex-col justify-center bg-gray-900"
      aria-label="Hero"
    >
      <!-- Background image: kekayaan tanaman Indonesia (ganti dengan /images/hero.jpg jika pakai asset lokal) -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${heroImg})` }"
      />
      <!-- Overlay: gradient agar teks terbaca & header menyatu -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75"
        aria-hidden="true"
      />
      <!-- Konten di atas overlay -->
      <div
        class="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6"
      >
        <h1
          class="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {{ $t("content.heroTitle") }}
        </h1>
        <p
          class="mx-auto mt-6 max-w-2xl text-lg text-white/95 drop-shadow-sm md:text-xl"
        >
          {{ $t("content.heroDesc") }}
        </p>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-xl bg-amber-400 px-8 py-4 text-base font-semibold text-amber-900 shadow-lg transition hover:bg-amber-300"
          >
            {{ $t("label.reqQuotation") }}
          </NuxtLink>
          <NuxtLink
            to="/product/finished"
            class="inline-flex items-center justify-center rounded-xl border-2 border-white/90 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            {{ $t("label.exploreOurProducts") }}
          </NuxtLink>
        </div>
      </div>
      <!-- Scroll cue -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
        <span
          class="inline-block h-8 w-5 rounded-full border-2 border-current"
        />
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 md:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          {{ $t("content.aboutUs") }}
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-4">
          {{ $t("content.aboutUsFirstDesc") }}
        </p>
        <p class="text-gray-600 text-lg leading-relaxed">
          {{ $t("content.aboutUsSecondDesc") }}
        </p>
      </div>
    </section>

    <!-- Why Partner With Us -->
    <section class="py-16 md:py-24 bg-gray-light">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <h2
          class="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          {{ $t("content.whyWithUs.title") }}
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div
            class="inline-block rounded-xl shadow-lg bg-gradient-to-br from-green-light to-green-dark p-[3px]"
          >
            <div class="h-full rounded-xl bg-white p-6 md:p-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ $t("content.whyWithUs.firstPoint") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("content.whyWithUs.firstPointDesc") }}
              </p>
            </div>
          </div>
          <div
            class="inline-block rounded-xl shadow-lg bg-gradient-to-br from-green-light to-green-dark p-[3px]"
          >
            <div class="h-full rounded-xl bg-white p-6 md:p-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ $t("content.whyWithUs.secondPoint") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("content.whyWithUs.secondPointDesc") }}
              </p>
            </div>
          </div>
          <div
            class="inline-block rounded-xl shadow-lg bg-gradient-to-br from-green-light to-green-dark p-[3px]"
          >
            <div class="h-full rounded-xl bg-white p-6 md:p-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ $t("content.whyWithUs.thirdPoint") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("content.whyWithUs.thirdPointDesc") }}
              </p>
            </div>
          </div>
          <div
            class="inline-block rounded-xl shadow-lg bg-gradient-to-br from-green-light to-green-dark p-[3px]"
          >
            <div class="h-full rounded-xl bg-white p-6 md:p-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ $t("content.whyWithUs.fourthPoint") }}
              </h3>
              <p class="text-gray-600">
                {{ $t("content.whyWithUs.fourthPointDesc") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust / Certifications -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          class="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3"
        >
          {{ $t("content.trust.title") }}
        </h2>
        <p class="text-gray-600 text-center text-lg max-w-2xl mx-auto mb-12">
          {{ $t("content.trust.desc") }}
        </p>

        <!-- Ministry Logos -->
        <div class="mb-14">
          <p
            class="text-sm font-semibold text-gray-500 uppercase tracking-wider text-center mb-6"
          >
            {{ $t("content.trust.regulatedBy") }}
          </p>
          <div
            class="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            <div class="flex flex-col items-center justify-center">
              <img :src="kemenluLogo" alt="Kemenlu Logo" class="h-24 mb-1" />
              <span
                class="text-gray-500 text-xs font-semibold text-center px-2"
              >
                {{ $t("content.trust.ministries.kemenlu") }}
              </span>
            </div>
            <div class="flex flex-col items-center justify-center">
              <img :src="kemendagLogo" alt="Kemendag Logo" class="h-24 mb-1" />
              <span
                class="text-gray-500 text-xs font-semibold text-center px-2"
              >
                {{ $t("content.trust.ministries.kemendag") }}
              </span>
            </div>
            <div class="flex flex-col items-center justify-center">
              <img :src="beacukaiLogo" alt="Beacukai Logo" class="h-24 mb-1" />
              <span
                class="text-gray-500 text-xs font-semibold text-center px-2"
              >
                {{ $t("content.trust.ministries.beacukai") }}
              </span>
            </div>
          </div>
        </div>

        <!-- Certifications Grid -->
        <div>
          <p
            class="text-sm font-semibold text-gray-500 uppercase tracking-wider text-center mb-6"
          >
            {{ $t("content.trust.certifications") }}
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div
              class="rounded-xl border border-green-dark/30 bg-gradient-to-br from-green-light/15 to-white p-5 text-center hover:shadow-md transition-shadow"
            >
              <LucideShieldCheck
                :size="36"
                class="mx-auto mb-3 text-green-dark"
              />
              <h4 class="font-semibold text-gray-900 text-sm mb-1.5">
                {{ $t("content.trust.certs.karantina.name") }}
              </h4>
              <p class="text-xs text-gray-600 leading-relaxed">
                {{ $t("content.trust.certs.karantina.desc") }}
              </p>
            </div>
            <div
              class="rounded-xl border border-green-dark/30 bg-gradient-to-br from-green-light/15 to-white p-5 text-center hover:shadow-md transition-shadow"
            >
              <LucideGlobe :size="36" class="mx-auto mb-3 text-green-dark" />
              <h4 class="font-semibold text-gray-900 text-sm mb-1.5">
                {{ $t("content.trust.certs.coo.name") }}
              </h4>
              <p class="text-xs text-gray-600 leading-relaxed">
                {{ $t("content.trust.certs.coo.desc") }}
              </p>
            </div>
            <div
              class="rounded-xl border border-green-dark/30 bg-gradient-to-br from-green-light/15 to-white p-5 text-center hover:shadow-md transition-shadow"
            >
              <LucideSprout :size="36" class="mx-auto mb-3 text-green-dark" />
              <h4 class="font-semibold text-gray-900 text-sm mb-1.5">
                {{ $t("content.trust.certs.phyto.name") }}
              </h4>
              <p class="text-xs text-gray-600 leading-relaxed">
                {{ $t("content.trust.certs.phyto.desc") }}
              </p>
            </div>
            <div
              class="rounded-xl border border-green-dark/30 bg-gradient-to-br from-green-light/15 to-white p-5 text-center hover:shadow-md transition-shadow"
            >
              <LucideFileCheck
                :size="36"
                class="mx-auto mb-3 text-green-dark"
              />
              <h4 class="font-semibold text-gray-900 text-sm mb-1.5">
                {{ $t("content.trust.certs.peb.name") }}
              </h4>
              <p class="text-xs text-gray-600 leading-relaxed">
                {{ $t("content.trust.certs.peb.desc") }}
              </p>
            </div>
            <div
              class="rounded-xl border border-green-dark/30 bg-gradient-to-br from-green-light/15 to-white p-5 text-center hover:shadow-md transition-shadow"
            >
              <LucideSprayCan :size="36" class="mx-auto mb-3 text-green-dark" />
              <h4 class="font-semibold text-gray-900 text-sm mb-1.5">
                {{ $t("content.trust.certs.fumigasi.name") }}
              </h4>
              <p class="text-xs text-gray-600 leading-relaxed">
                {{ $t("content.trust.certs.fumigasi.desc") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Export Markets -->
    <section class="py-16 md:py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          {{ $t("cta.ourMarkets") }}
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-10">
          {{ $t("cta.ourMarketsDesc") }}
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg transition-colors"
        >
          {{ $t("label.becomeOurPartner") }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
