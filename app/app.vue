<script setup lang="ts">
useHead({
  titleTemplate: (title) => (title ? `${title} | PT. NIC` : "PT. NIC"),
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
