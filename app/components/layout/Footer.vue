<template>
    <footer class="bg-gray-900 text-gray-300 py-10">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-center md:text-left text-sm">
                Delivering Indonesia's Natural Excellence to the World.
            </p>
            <nav class="flex gap-6">
                <NuxtLink :to="localePath('/')" class="hover:text-white transition-colors">Home</NuxtLink>
                <NuxtLink :to="localePath('/product')" class="hover:text-white transition-colors">Product</NuxtLink>
                <NuxtLink :to="localePath('/service')" class="hover:text-white transition-colors">Service</NuxtLink>
                <NuxtLink :to="localePath('/contact')" class="hover:text-white transition-colors">Contact</NuxtLink>
            </nav>
        </div>
    </footer>
</template>

<script setup>
const localePath = useLocalePath();
</script>
