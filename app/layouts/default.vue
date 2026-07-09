<template>
  <div class="flex min-h-screen flex-col font-roboto">
    <Header />
    <main class="w-full flex-1 bg-primary-green/30 pt-16">
      <slot />
    </main>
    <Footer />
    <WaButton />
  </div>
</template>
