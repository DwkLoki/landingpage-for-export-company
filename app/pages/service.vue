<template>
    <div>
        <!-- Page Header -->
        <section
            class="bg-gradient-to-br from-green-light/30 via-white to-stone-50 py-16 md:py-20"
        >
            <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <h1 class="text-3xl md:text-4xl font-bold text-green-dark">
                    Export & Supply Services
                </h1>
                <p class="mt-4 text-lg text-gray-600">
                    Scalable. Reliable. Internationally Ready.
                </p>
            </div>
        </section>

        <!-- Services -->
        <section class="py-12 md:py-16 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6">
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-gray-light p-6 md:p-8 rounded-xl">
                        <h2 class="text-xl font-bold text-gray-900 mb-3">
                            Large-Scale Production & Supply
                        </h2>
                        <p class="text-gray-600 leading-relaxed">
                            We handle high-volume orders, from multi-ton
                            shipments to full truckload exports. Our production
                            network ensures consistent supply for long-term
                            contracts.
                        </p>
                    </div>
                    <div class="bg-gray-light p-6 md:p-8 rounded-xl">
                        <h2 class="text-xl font-bold text-gray-900 mb-3">
                            Complete Export Documentation
                        </h2>
                        <p class="text-gray-600 leading-relaxed">
                            We manage export documentation and ensure compliance
                            with international trade regulations for smooth and
                            secure shipping.
                        </p>
                    </div>
                    <div class="bg-gray-light p-6 md:p-8 rounded-xl">
                        <h2 class="text-xl font-bold text-gray-900 mb-3">
                            Private Label & Custom Packaging
                        </h2>
                        <p class="text-gray-600 leading-relaxed">
                            We offer customized packaging solutions tailored to
                            your brand and market requirements.
                        </p>
                    </div>
                    <div class="bg-gray-light p-6 md:p-8 rounded-xl">
                        <h2 class="text-xl font-bold text-gray-900 mb-3">
                            International Logistics Support
                        </h2>
                        <p class="text-gray-600 leading-relaxed">
                            Efficient shipping solutions via sea and land
                            freight, optimized for Southeast Asia and Australia
                            markets.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Closing CTA -->
        <section class="py-16 md:py-20 bg-gray-light">
            <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
                <p class="text-lg text-gray-700 mb-6">
                    Ready to scale your supply chain with a trusted Indonesian
                    exporter?
                </p>
                <NuxtLink
                    :to="localePath('/contact')"
                    class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg transition-colors"
                >
                    Request Export Details
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>
