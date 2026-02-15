<template>
    <div>
        <!-- Page Header -->
        <section class="bg-gradient-to-br from-amber-50 via-white to-stone-50 py-16 md:py-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Our Premium Products</h1>
                <p class="mt-4 text-lg text-gray-600">
                    Sourced from Indonesia's rich natural resources and processed to meet international standards.
                </p>
            </div>
        </section>

        <!-- Products -->
        <section class="py-12 md:py-16 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
                <!-- 1. Palm Sugar Powder -->
                <article class="border-b border-gray-200 pb-16 last:border-0 last:pb-0">
                    <h2 class="text-2xl font-bold text-gray-900 mb-3">Palm Sugar Powder</h2>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Naturally derived from Indonesian palm sap, our palm sugar powder offers a rich caramel flavor and fine texture. Ideal for food manufacturers, beverage producers, and retail distribution.
                    </p>
                    <ul class="flex flex-wrap gap-3">
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">100% Natural</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">No Artificial Additives</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Bulk Packaging Available</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Export-Ready</li>
                    </ul>
                </article>

                <!-- 2. Shredded Tuna -->
                <article class="border-b border-gray-200 pb-16 last:border-0 last:pb-0">
                    <h2 class="text-2xl font-bold text-gray-900 mb-3">Premium Shredded Tuna</h2>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Made from carefully selected tuna, processed hygienically to preserve freshness and flavor. A high-protein product suitable for retail and wholesale distribution.
                    </p>
                    <ul class="flex flex-wrap gap-3">
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">High-Protein Content</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Hygienically Processed</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Long Shelf Life</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Available in Bulk Orders</li>
                    </ul>
                </article>

                <!-- 3. Mackerel Fish Crackers -->
                <article class="border-b border-gray-200 pb-16 last:border-0 last:pb-0">
                    <h2 class="text-2xl font-bold text-gray-900 mb-3">Mackerel Fish Crackers</h2>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        A traditional Indonesian snack made from premium mackerel fish, offering a crispy texture and savory taste loved across markets.
                    </p>
                    <ul class="flex flex-wrap gap-3">
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Authentic Indonesian Recipe</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Crispy & Savory</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Suitable for Retail Export</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Custom Packaging Options</li>
                    </ul>
                </article>

                <!-- 4. Passion Fruit Beverage -->
                <article>
                    <h2 class="text-2xl font-bold text-gray-900 mb-3">Passion Fruit Beverage</h2>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Made from fresh Indonesian passion fruit, delivering a refreshing tropical taste. Available for bulk export and private labeling.
                    </p>
                    <ul class="flex flex-wrap gap-3">
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Tropical Flavor</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Natural Ingredients</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Private Label Available</li>
                        <li class="px-4 py-2 bg-amber-50 text-amber-800 rounded-full text-sm font-medium">Bulk & Container Shipment Ready</li>
                    </ul>
                </article>
            </div>
        </section>

        <!-- Closing CTA -->
        <section class="py-16 md:py-20 bg-gray-light">
            <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
                <p class="text-lg text-gray-700 mb-6">
                    Looking for a reliable long-term supplier?<br />
                    Let's discuss your volume requirements and export needs.
                </p>
                <NuxtLink
                    :to="localePath('/contact')"
                    class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg transition-colors"
                >
                    Contact Our Sales Team
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup>
const localePath = useLocalePath();
</script>
