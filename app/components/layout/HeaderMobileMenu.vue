<template>
  <Transition name="slide-down">
    <div
      v-if="isOpen"
      class="fixed inset-0 top-16 z-[999999] bg-white border-t border-gray-200 md:hidden overflow-y-auto"
    >
      <nav class="p-6 flex flex-col gap-4">
        <NuxtLink
          to="/"
          class="py-2 text-gray-700 hover:text-amber-600 font-medium"
          @click="$emit('close')"
        >
          {{ $t("navigation.home") }}
        </NuxtLink>

        <div>
          <button
            type="button"
            class="w-full flex items-center justify-between py-2 text-gray-700 hover:text-amber-600 font-medium"
            @click="isProductExpanded = !isProductExpanded"
          >
            <span>{{ $t("navigation.product") }}</span>
            <LucideChevronDown
              :size="18"
              class="transition-transform"
              :class="isProductExpanded ? 'rotate-180' : ''"
            />
          </button>
          <div v-if="isProductExpanded" class="pl-4 flex flex-col">
            <NuxtLink
              to="/product/artisan-products"
              class="py-2 text-gray-600 hover:text-amber-600"
              @click="$emit('close')"
            >
              {{ $t("navigation.productFinished") }}
            </NuxtLink>
            <NuxtLink
              to="/product/spices-commodities"
              class="py-2 text-gray-600 hover:text-amber-600"
              @click="$emit('close')"
            >
              {{ $t("navigation.productRaw") }}
            </NuxtLink>
          </div>
        </div>

        <NuxtLink
          to="/service"
          class="py-2 text-gray-700 hover:text-amber-600 font-medium"
          @click="$emit('close')"
        >
          {{ $t("navigation.service") }}
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="py-2 text-gray-700 hover:text-amber-600 font-medium"
          @click="$emit('close')"
        >
          {{ $t("navigation.contact") }}
        </NuxtLink>

        <!-- Divider -->
        <div class="border-t border-gray-200 my-4"></div>

        <!-- Language Switcher -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Language
          </label>

          <div class="relative">
            <select
              v-model="language"
              class="w-full pr-8 py-2 pl-3 appearance-none bg-gray-light text-green-dark border border-green-dark rounded-md"
            >
              <option
                v-for="item in locales"
                :key="item.code"
                :value="item.code"
              >
                {{ item.name }}
              </option>
            </select>

            <LucideChevronDown
              :size="18"
              class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-green-dark"
            />
          </div>
        </div>
      </nav>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, default: false },
});
defineEmits(["close"]);

const { locale, locales, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (val) => setLocale(val),
});

const isProductExpanded = ref(false);
</script>
