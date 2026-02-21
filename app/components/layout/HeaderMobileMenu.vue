<template>
    <Transition name="slide-down">
        <div
            v-if="isOpen"
            class="fixed inset-0 top-16 z-[999999] bg-white border-t border-gray-200 md:hidden overflow-y-auto"
        >
            <nav class="p-6 flex flex-col gap-4">
                <NuxtLink
                    :to="localePath('/')"
                    class="py-2 text-gray-700 hover:text-amber-600 font-medium"
                    @click="$emit('close')"
                >
                    {{ $t("navigation.home") }}
                </NuxtLink>
                <NuxtLink
                    :to="localePath('/product')"
                    class="py-2 text-gray-700 hover:text-amber-600 font-medium"
                    @click="$emit('close')"
                >
                    {{ $t("navigation.product") }}
                </NuxtLink>
                <NuxtLink
                    :to="localePath('/service')"
                    class="py-2 text-gray-700 hover:text-amber-600 font-medium"
                    @click="$emit('close')"
                >
                    {{ $t("navigation.service") }}
                </NuxtLink>
                <NuxtLink
                    :to="localePath('/contact')"
                    class="py-2 text-gray-700 hover:text-amber-600 font-medium"
                    @click="$emit('close')"
                >
                    {{ $t("navigation.contact") }}
                </NuxtLink>
            </nav>
        </div>
    </Transition>
</template>

<script setup>
defineProps({
    isOpen: { type: Boolean, default: false },
});
defineEmits(["close"]);
const localePath = useLocalePath();
</script>
