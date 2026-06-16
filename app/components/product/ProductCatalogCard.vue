<script setup lang="ts">
defineProps<{
  image: string;
  name: string;
  moq: string;
  packaging: string;
  paymentSystem: string;
  hsCode: string;
  detailPath: string;
}>();
</script>

<template>
  <article
    class="flex flex-col overflow-hidden rounded-2xl border-2 border-green-dark bg-white shadow-sm"
  >
    <div class="aspect-square overflow-hidden bg-gray-100">
      <img
        :src="image"
        :alt="name"
        class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>

    <div class="flex flex-1 flex-col p-5">
      <h2 class="mb-4 text-lg font-semibold text-gray-900">{{ name }}</h2>

      <dl class="flex-1 space-y-2.5 text-sm">
        <div class="flex justify-between gap-3">
          <dt class="text-gray-500">{{ $t("content.product.moq") }}</dt>
          <dd class="text-right font-medium text-gray-900">{{ moq }}</dd>
        </div>
        <div class="flex justify-between gap-3">
          <dt class="text-gray-500">{{ $t("content.product.packaging") }}</dt>
          <dd class="text-right font-medium text-gray-900">{{ packaging }}</dd>
        </div>
        <div class="flex justify-between gap-3">
          <dt class="text-gray-500">
            {{ $t("content.product.paymentSystem") }}
          </dt>
          <dd class="text-right font-medium text-gray-900">
            {{ paymentSystem }}
          </dd>
        </div>
        <div class="flex justify-between gap-3">
          <dt class="text-gray-500">{{ $t("content.product.hsCode") }}</dt>
          <dd class="text-right font-medium text-gray-900">{{ hsCode }}</dd>
        </div>
      </dl>

      <NuxtLink
        :to="detailPath"
        class="mt-5 inline-flex items-center justify-center rounded-lg border-2 border-green-dark px-4 py-2.5 text-sm font-semibold text-green-dark transition-colors hover:bg-green-dark hover:text-white"
      >
        {{ $t("content.product.viewDetails") }}
      </NuxtLink>
    </div>
  </article>
</template>
