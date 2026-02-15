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
            <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-20">
                <article
                    v-for="(product, index) in products"
                    :key="product.id"
                    class="scroll-mt-24"
                >
                    <div
                        class="md:flex md:gap-12 md:items-start"
                        :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
                    >
                        <!-- Gambar produk -->
                        <div class="md:w-2/5 flex-shrink-0 mb-6 md:mb-0">
                            <div class="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-md">
                                <img
                                    :src="product.image"
                                    :alt="product.name"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <!-- Spesifikasi -->
                        <div class="md:flex-1">
                            <h2 class="text-2xl font-bold text-gray-900 mb-3">{{ product.name }}</h2>
                            <p class="text-gray-600 leading-relaxed mb-6">{{ product.description }}</p>

                            <dl class="space-y-4 text-sm">
                                <div>
                                    <dt class="font-semibold text-gray-900 mb-1">Ingredients</dt>
                                    <dd class="text-gray-600">{{ product.ingredients }}</dd>
                                </div>
                                <div>
                                    <dt class="font-semibold text-gray-900 mb-1">Shelf Life (Masa Kadaluarsa)</dt>
                                    <dd class="text-gray-600">{{ product.shelfLife }}</dd>
                                </div>
                                <div>
                                    <dt class="font-semibold text-gray-900 mb-1">Benefits (Manfaat)</dt>
                                    <dd class="text-gray-600">{{ product.benefits }}</dd>
                                </div>
                                <div>
                                    <dt class="font-semibold text-gray-900 mb-1">Uses (Kegunaan)</dt>
                                    <dd class="text-gray-600">{{ product.uses }}</dd>
                                </div>
                                <div>
                                    <dt class="font-semibold text-gray-900 mb-1">Legality (Legalitas)</dt>
                                    <dd class="text-gray-600">{{ product.legality }}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
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
import product1 from "~/assets/images/product-1.jpg";
import product2 from "~/assets/images/product-2.jpg";
import product3 from "~/assets/images/product-3.jpg";
import product4 from "~/assets/images/product-4.jpg";

const localePath = useLocalePath();

const products = [
    {
        id: "palm-sugar",
        name: "Palm Sugar Powder (Gula Aren Semut)",
        image: product1,
        description:
            "Naturally derived from Indonesian palm sap, our palm sugar powder offers a rich caramel flavor and fine texture. Ideal for food manufacturers, beverage producers, and retail distribution.",
        ingredients:
            "100% natural palm sap (nira aren). No artificial additives, preservatives, or coloring.",
        shelfLife: "12–24 months from production date when stored in a cool, dry place in sealed packaging.",
        benefits:
            "Lower glycemic index than refined sugar; contains minerals and amino acids; natural caramel flavor; suitable for clean-label and health-conscious formulations.",
        uses:
            "Sweetener for beverages, bakery, confectionery; ingredient for sauces and dressings; retail packaging for end consumers; industrial food manufacturing.",
        legality:
            "Produced in facilities compliant with Indonesian food safety standards; export-ready with required documentation (health certificate, certificate of origin as applicable).",
    },
    {
        id: "shredded-tuna",
        name: "Premium Shredded Tuna (Abon Ikan Tuna)",
        image: product2,
        description:
            "Made from carefully selected tuna, processed hygienically to preserve freshness and flavor. A high-protein product suitable for retail and wholesale distribution.",
        ingredients:
            "Tuna meat, vegetable oil, seasonings (salt, sugar, spices), permitted flavor enhancers. No artificial preservatives.",
        shelfLife: "6–12 months in sealed packaging when stored in a cool, dry place. Refer to label for exact expiry.",
        benefits:
            "High protein content; source of omega-3; long shelf life; versatile for meals and snacks; suitable for retail and food service.",
        uses:
            "Topping for rice and porridge; filling for bread and pastries; ready-to-eat snack; ingredient for traditional and modern dishes; bulk supply for repackaging.",
        legality:
            "Processed in registered facilities; meets Indonesian food safety requirements; export documentation available (e.g. health certificate, halal if applicable).",
    },
    {
        id: "mackerel-crackers",
        name: "Mackerel Fish Crackers (Krupuk Amplang Ikan Tenggiri)",
        image: product3,
        description:
            "A traditional Indonesian snack made from premium mackerel fish, offering a crispy texture and savory taste loved across markets.",
        ingredients:
            "Mackerel fish (tenggiri), tapioca starch, salt, sugar, garlic, and other natural seasonings. No MSG or artificial flavors as per formulation.",
        shelfLife: "9–12 months in sealed packaging. Store in a cool, dry place. Best consumed within stated expiry date.",
        benefits:
            "Authentic Indonesian recipe; high protein from fish; crispy and savory; suitable for all ages; ideal for export as specialty snack.",
        uses:
            "Standalone snack; accompaniment to meals; retail and bulk export; custom packaging and private label; convenience and grocery distribution.",
        legality:
            "Produced under Indonesian food safety standards; export-ready with applicable certifications; halal certification available upon request.",
    },
    {
        id: "passion-fruit",
        name: "Passion Fruit Beverage (Minuman Sari Markisa)",
        image: product4,
        description:
            "Made from fresh Indonesian passion fruit, delivering a refreshing tropical taste. Available for bulk export and private labeling.",
        ingredients:
            "Passion fruit juice/concentrate, water, sugar, citric acid (as regulator), natural flavor. No artificial colors. Formulation can be adjusted for OEM.",
        shelfLife: "12–18 months unopened when stored in a cool, dry place. Refrigerate after opening and consume within the period stated on label.",
        benefits:
            "Natural tropical flavor; vitamin C and antioxidants from passion fruit; refreshing; suitable for private label and bulk shipment.",
        uses:
            "Ready-to-drink beverage; base for cocktails and mocktails; food service and hospitality; retail and e-commerce; bulk and container shipment for overseas bottling.",
        legality:
            "Manufactured in licensed facilities; compliant with Indonesian and international beverage standards; export documentation and private label options available.",
    },
];
</script>
