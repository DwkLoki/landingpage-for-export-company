<template>
    <div>
        <!-- Hero Section -->
        <section class="relative bg-gradient-to-br from-amber-50 via-white to-stone-50 py-20 md:py-28">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                    Bringing Indonesia's Finest Natural Products to the Global Market
                </h1>
                <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    A trusted export partner based in Makassar & Maros, delivering premium Indonesian food products in large-scale shipments across Southeast Asia, Australia, and beyond.
                </p>
                <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink
                        :to="localePath('/contact')"
                        class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg transition-colors"
                    >
                        Request a Quotation
                    </NuxtLink>
                    <NuxtLink
                        :to="localePath('/product')"
                        class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-amber-700 bg-white border-2 border-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                    >
                        Explore Our Products
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="py-16 md:py-24 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About Us</h2>
                <p class="text-gray-600 text-lg leading-relaxed mb-4">
                    We are an Indonesia-based export company specializing in high-quality natural and processed food products. Operating from Makassar City and Maros Regency, we connect Indonesia's rich natural resources with international markets.
                </p>
                <p class="text-gray-600 text-lg leading-relaxed">
                    With strong local sourcing networks and scalable production capabilities, we are ready to fulfill bulk orders ranging from multi-ton shipments to full truckload exports.
                </p>
            </div>
        </section>

        <!-- Why Partner With Us -->
        <section class="py-16 md:py-24 bg-gray-light">
            <div class="max-w-5xl mx-auto px-4 sm:px-6">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">Why Partner With Us?</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Reliable Supply Capacity</h3>
                        <p class="text-gray-600">Capable of fulfilling bulk orders, including multi-ton and full truckload shipments.</p>
                    </div>
                    <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Strategic Location</h3>
                        <p class="text-gray-600">Based in Eastern Indonesia, giving efficient access to domestic sourcing and international ports.</p>
                    </div>
                    <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                        <p class="text-gray-600">Carefully selected raw materials and consistent quality control standards.</p>
                    </div>
                    <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Export-Oriented Operations</h3>
                        <p class="text-gray-600">Experienced in serving Southeast Asian and Australian markets, with expansion plans to Europe.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Export Markets -->
        <section class="py-16 md:py-24 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Export Markets</h2>
                <p class="text-gray-600 text-lg leading-relaxed mb-10">
                    We currently serve clients across Southeast Asia and Australia, with plans to expand into the European market in the near future.
                </p>
                <NuxtLink
                    :to="localePath('/contact')"
                    class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg transition-colors"
                >
                    Become Our Global Partner
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>
