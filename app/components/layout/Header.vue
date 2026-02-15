<script setup>
import mainLogo from "~/assets/images/main-logo.png";

const { locale, locales, setLocale } = useI18n();
const logoError = ref(false);
const language = computed({
    get: () => locale.value,
    set: (val) => setLocale(val),
});
const isMobileMenuShow = ref(false);
const isWatchMenuShow = ref(false);
const localePath = useLocalePath();

const toggleMobileMenu = () => {
    isMobileMenuShow.value = !isMobileMenuShow.value;
};

function handleClickOutside(e) {
    const dropdown = document.querySelector(".dropdown-menu");

    if (!dropdown) return;

    // Jika klik bukan di tombol watch dan bukan di dropdown → tutup
    if (!dropdown.contains(e.target)) {
        isWatchMenuShow.value = false;
    }
}

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
});

// Watcher untuk lock / unlock scroll pada body
watch(isMobileMenuShow, (val) => {
    if (val) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }
});
</script>

<template>
    <header
        class="fixed top-0 w-full h-14 bg-white shadow flex justify-center z-[999999]"
    >
        <!-- navigation on desktop view -->
        <nav
            class="xl:w-[70%] w-[90%] h-full flex justify-between items-center"
        >
            <!-- header left section -->
            <div class="flex items-center md:gap-4">
                <NuxtLink :to="localePath('/')" class="flex items-center gap-2">
                    <img
                        v-if="!logoError"
                        :src="mainLogo"
                        alt="Logo"
                        class="h-7"
                        @error="logoError = true"
                    />
                    <span v-else class="font-bold text-gray-900 text-lg">Ekspor Gula Aren</span>
                </NuxtLink>
                <button @click="toggleMobileMenu" class="ml-4 md:hidden">
                    <LucideX v-if="isMobileMenuShow" />
                    <LucideMenu v-else />
                </button>
            </div>

            <!-- header middle section -->
            <ul class="flex gap-10 items-center whitespace-nowrap">
                <li class="hidden lg:block">
                    <NuxtLink :to="localePath('/')" class="hover:text-amber-600 transition-colors">Home</NuxtLink>
                </li>
                <li class="hidden md:block">
                    <NuxtLink :to="localePath('/product')" class="hover:text-amber-600 transition-colors">Product</NuxtLink>
                </li>
                <li class="hidden md:block">
                    <NuxtLink :to="localePath('/service')" class="hover:text-amber-600 transition-colors">Service</NuxtLink>
                </li>
                <li class="hidden lg:block">
                    <NuxtLink :to="localePath('/contact')" class="hover:text-amber-600 transition-colors">Contact</NuxtLink>
                </li>
            </ul>

            <!-- header right section -->
            <div class="relative hidden md:block">
                <select
                    class="bg-gray-light pr-8 py-1 pl-2 appearance-none"
                    name="language"
                    id="language"
                    v-model="language"
                >
                    <option
                        v-for="item in locales"
                        :key="item"
                        :value="item.code"
                    >
                        {{ item.name }}
                    </option>
                </select>
                <LucideChevronDown
                    :size="18"
                    class="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none"
                />
            </div>
        </nav>

        <!-- navigasi pada mobile menu -->
        <HeaderMobileMenu
            :is-open="isMobileMenuShow"
            @close="toggleMobileMenu"
        />
    </header>
</template>

<style>
.slide-down-enter-active {
    transition: all 0.3s ease-out;
}
.slide-down-leave-active {
    transition: all 0.2s ease-in;
}
.slide-down-enter-from {
    transform: translateY(-20px);
    opacity: 0;
}
.slide-down-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
