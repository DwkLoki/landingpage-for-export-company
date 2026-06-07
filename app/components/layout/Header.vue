<script setup>
import mainLogo from "~/assets/images/main-logo.png";

const route = useRoute();
const { locale, locales, setLocale } = useI18n();
const logoError = ref(false);

const isHomePage = computed(() => {
  const p = route.path;
  return p === "/" || /^\/(en|id|zh)\/?$/.test(p);
});
const language = computed({
  get: () => locale.value,
  set: (val) => setLocale(val),
});
const isMobileMenuShow = ref(false);
const isProductMenuShow = ref(false);
const isScrolledPastHero = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuShow.value = !isMobileMenuShow.value;
};

const isProductActive = computed(() => route.path.includes("/product"));

const headerClass = computed(() => {
  if (isMobileMenuShow.value) {
    return "bg-white shadow text-gray-900";
  }

  if (isHomePage.value && !isScrolledPastHero.value) {
    return "bg-white/10 shadow-none backdrop-blur-md text-white";
  }

  return "bg-white shadow text-gray-900";
});

function handleClickOutside(e) {
  const dropdown = document.querySelector(".product-dropdown");

  if (!dropdown) return;

  if (!dropdown.contains(e.target)) {
    isProductMenuShow.value = false;
  }
}

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

onMounted(() => {
  document.addEventListener("click", handleClickOutside);

  const handleScroll = () => {
    const hero = document.querySelector("#hero-section");
    if (!hero) return;

    const heroHeight = hero.offsetHeight;
    isScrolledPastHero.value = window.scrollY > heroHeight - 64;
  };

  window.addEventListener("scroll", handleScroll);

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <header
    class="fixed top-0 w-full h-16 flex justify-center z-[999999] transition-all duration-300"
    :class="headerClass"
  >
    <!-- navigation on desktop view -->
    <nav class="xl:w-[70%] w-[90%] h-full flex justify-between items-center">
      <!-- header left section -->
      <div class="flex w-full md:w-fit justify-between items-center md:gap-4">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img
            v-if="!logoError"
            :src="mainLogo"
            alt="Logo"
            class="h-10"
            @error="logoError = true"
          />
          <span
            v-else
            class="text-lg font-bold"
            :class="isHomePage ? 'text-white' : 'text-gray-900'"
            >PT. NURHAYATI INDO CEMERLANG</span
          >
          <p class="font-bold text-sm md:text-base md:hidden lg:block">
            PT. NURHAYATI INDO CEMERLANG
          </p>
        </NuxtLink>
        <button
          @click="toggleMobileMenu"
          class="ml-4 md:hidden"
          :class="
            isHomePage && !isScrolledPastHero && !isMobileMenuShow
              ? 'text-white'
              : 'text-gray-900'
          "
        >
          <LucideX v-if="isMobileMenuShow" />
          <LucideMenu v-else />
        </button>
      </div>
      <div class="flex gap-8">
        <!-- header middle section -->
        <ul class="flex gap-10 items-center whitespace-nowrap">
          <li class="hidden md:block">
            <NuxtLink
              to="/"
              class="transition-colors"
              :class="
                isHomePage && !isScrolledPastHero
                  ? 'hover:text-amber-300'
                  : 'hover:text-amber-600'
              "
              >{{ $t("navigation.home") }}</NuxtLink
            >
          </li>
          <li class="hidden md:block relative product-dropdown">
            <button
              type="button"
              @click="isProductMenuShow = !isProductMenuShow"
              class="flex items-center gap-1 transition-colors"
              :class="[
                isHomePage && !isScrolledPastHero
                  ? 'hover:text-amber-300'
                  : 'hover:text-amber-600',
                isProductActive
                  ? isHomePage && !isScrolledPastHero
                    ? 'text-amber-300'
                    : 'text-amber-600'
                  : '',
              ]"
            >
              {{ $t("navigation.product") }}
              <LucideChevronDown
                :size="16"
                class="transition-transform"
                :class="isProductMenuShow ? 'rotate-180' : ''"
              />
            </button>
            <Transition name="slide-down">
              <div
                v-if="isProductMenuShow"
                class="absolute left-1/2 -translate-x-1/2 top-full mt-3 min-w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 py-2"
              >
                <NuxtLink
                  to="/product/finished"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-light hover:text-amber-600 transition-colors"
                  @click="isProductMenuShow = false"
                >
                  {{ $t("navigation.productFinished") }}
                </NuxtLink>
                <NuxtLink
                  to="/product/raw"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-light hover:text-amber-600 transition-colors"
                  @click="isProductMenuShow = false"
                >
                  {{ $t("navigation.productRaw") }}
                </NuxtLink>
              </div>
            </Transition>
          </li>
          <li class="hidden md:block">
            <NuxtLink
              to="/service"
              class="transition-colors"
              :class="
                isHomePage && !isScrolledPastHero
                  ? 'hover:text-amber-300'
                  : 'hover:text-amber-600'
              "
              >{{ $t("navigation.service") }}</NuxtLink
            >
          </li>
          <li class="hidden md:block">
            <NuxtLink
              to="/contact"
              class="transition-colors"
              :class="
                isHomePage && !isScrolledPastHero
                  ? 'hover:text-amber-300'
                  : 'hover:text-amber-600'
              "
              >{{ $t("navigation.contact") }}</NuxtLink
            >
          </li>
        </ul>

        <!-- header right section -->
        <div class="relative hidden md:block">
          <select
            class="pr-8 py-1 pl-2 appearance-none transition-colors"
            :class="
              isHomePage && !isScrolledPastHero
                ? 'bg-white/20 text-white border border-white/30 rounded-md'
                : 'bg-gray-light text-green-dark border border-green-dark rounded-md'
            "
            name="language"
            id="language"
            v-model="language"
          >
            <option v-for="item in locales" :key="item" :value="item.code">
              {{ item.name }}
            </option>
          </select>
          <LucideChevronDown
            :size="18"
            class="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none"
            :class="
              isHomePage && !isScrolledPastHero
                ? 'text-white'
                : 'text-green-dark'
            "
          />
        </div>
      </div>
    </nav>

    <!-- navigasi pada mobile menu -->
    <!-- <HeaderMobileMenu
            :is-open="isMobileMenuShow"
            @close="toggleMobileMenu"
        /> -->
    <teleport to="body">
      <HeaderMobileMenu :is-open="isMobileMenuShow" @close="toggleMobileMenu" />
    </teleport>
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
