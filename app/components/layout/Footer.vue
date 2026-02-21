<template>
    <footer class="bg-gray-900 text-gray-300 py-10">
        <div
            class="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
            <p>{{ $t("footer.copyright") }}</p>
            <p class="text-center md:text-left text-sm">
                {{ $t("footer.vision") }}
            </p>
        </div>
    </footer>
</template>

<script setup>
const localePath = useLocalePath();
</script>
