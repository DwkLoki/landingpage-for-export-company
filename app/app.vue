<script setup lang="ts">
const { t } = useI18n();

useHead({
  titleTemplate: (title) =>
    title
      ? `${title} | PT. Nurhayati Indo Cemerlang`
      : "PT. Nurhayati Indo Cemerlang",

  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",

        name: "PT. Nurhayati Indo Cemerlang",

        url: "https://www.nurhayatiindocemerlang.com",

        logo: "https://www.nurhayatiindocemerlang.com/main-logo.png",

        description:
          "Indonesian exporter of natural food products, spices, and processed food products.",

        address: {
          "@type": "PostalAddress",
          addressLocality: "Makassar",
          addressRegion: "South Sulawesi",
          addressCountry: "ID",
        },

        areaServed: ["Southeast Asia", "Australia", "Europe"],
      }),
    },
  ],
});

useSeoMeta({
  description: () => t("meta.description"),
  ogSiteName: "PT. Nurhayati Indo Cemerlang",
  ogType: "website",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
