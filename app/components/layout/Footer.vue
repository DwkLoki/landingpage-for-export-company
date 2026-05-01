<template>
    <footer class="bg-gray-900 text-gray-300">
        <!-- Trust Logo Band -->
        <div class="border-b border-white/10 py-6">
            <div class="max-w-5xl mx-auto px-4 sm:px-6">
                <p
                    class="text-xs uppercase tracking-wider text-gray-500 text-center mb-3"
                >
                    {{ $t("footer.regulatedBy") }}
                </p>

                <div
                    class="flex flex-wrap items-center justify-center gap-2 md:gap-3"
                >
                    <div class="flex items-center justify-center">
                        <img
                            :src="kemenluLogo"
                            alt="Kemenlu Logo"
                            class="h-12 mb-1 bg-white p-2 rounded-lg"
                        />
                        <!-- <span
                            class="text-gray-500 text-xs font-semibold text-center px-2"
                        >
                            {{ $t("content.trust.ministries.kemenlu") }}
                        </span> -->
                    </div>
                    <div class="flex items-center justify-center">
                        <img
                            :src="kemendagLogo"
                            alt="Kemendag Logo"
                            class="h-12 mb-1 bg-white p-2 rounded-lg"
                        />
                        <!-- <span
                            class="text-gray-500 text-xs font-semibold text-center px-2"
                        >
                            {{ $t("content.trust.ministries.kemendag") }}
                        </span> -->
                    </div>
                    <div class="flex items-center justify-center">
                        <img
                            :src="beacukaiLogo"
                            alt="Beacukai Logo"
                            class="h-12 mb-1 bg-white p-2 rounded-lg"
                        />
                        <!-- <span
                            class="text-gray-500 text-xs font-semibold text-center px-2"
                        >
                            {{ $t("content.trust.ministries.beacukai") }}
                        </span> -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Copyright Row -->
        <div class="py-10">
            <div
                class="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4"
            >
                <p>{{ $t("footer.copyright") }}</p>
                <p class="text-center md:text-left text-sm">
                    {{ $t("footer.vision") }}
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import kemenluLogo from "~/assets/images/kemenlu.png";
import kemendagLogo from "~/assets/images/kemendag.svg";
import beacukaiLogo from "~/assets/images/beacukai.svg";
</script>
