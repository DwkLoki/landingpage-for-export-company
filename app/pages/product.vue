<template>
    <div>
        <!-- Page Header -->
        <section
            class="bg-gradient-to-br from-green-light/30 via-white to-stone-50 py-16 md:py-20"
        >
            <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <h1 class="text-3xl md:text-4xl font-bold text-green-dark">
                    {{ $t("content.product.title") }}
                </h1>
                <p class="mt-4 text-lg text-gray-600">
                    {{ $t("content.product.desc") }}
                </p>
            </div>
        </section>

        <!-- Products -->
        <section
            class="pt-12 pb-12 md:pt-44 md:pb-24 lg:py-24 bg-white lg:space-y-24 md:space-y-44 space-y-12"
        >
            <article
                v-for="(product, index) in products"
                :key="product.id"
                class="w-full"
            >
                <div
                    class="relative flex w-full max-w-screen-xl mx-auto xl:px-12 md:px-12 px-6"
                    :class="
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                    "
                >
                    <!-- IMAGE -->
                    <div
                        class="absolute top-4 left-1/2 -translate-x-1/2 md:-top-[35%] md:translate-y-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 w-72 h-72 md:w-80 md:h-80 z-10"
                        :class="
                            index % 2 === 0
                                ? 'lg:left-12'
                                : 'lg:right-12 lg:left-auto'
                        "
                    >
                        <div
                            class="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-gray-100"
                        >
                            <img
                                :src="product.image"
                                :alt="product.name"
                                class="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <!-- CARD -->
                    <div
                        class="relative lg:w-[90%] w-full rounded-2xl border-2 border-green-dark bg-white shadow-sm lg:py-12 md:py-8 py-4"
                        :class="
                            index % 2 === 0
                                ? 'lg:pl-72 lg:pr-12 md:px-8 md:pt-64 px-4 pt-80'
                                : 'lg:pr-72 lg:pl-12 md:px-8 md:pt-64 px-4 pt-80'
                        "
                    >
                        <!-- CONTENT -->
                        <div>
                            <h2
                                class="text-2xl md:text-3xl font-semibold text-gray-900 mb-4"
                            >
                                {{ $t(`content.product.${product.id}.name`) }}
                            </h2>

                            <p
                                class="text-gray-600 leading-relaxed text-lg mb-8 max-w-3xl"
                            >
                                {{
                                    $t(
                                        `content.product.${product.id}.description`,
                                    )
                                }}
                            </p>

                            <dl
                                class="grid md:grid-cols-2 gap-x-12 gap-y-6 text-sm"
                            >
                                <div>
                                    <dt
                                        class="font-semibold text-gray-900 mb-1"
                                    >
                                        {{ $t("content.product.ingredients") }}
                                    </dt>
                                    <dd class="text-gray-600">
                                        {{
                                            $t(
                                                `content.product.${product.id}.ingredients`,
                                            )
                                        }}
                                    </dd>
                                </div>

                                <div>
                                    <dt
                                        class="font-semibold text-gray-900 mb-1"
                                    >
                                        {{ $t("content.product.shelfLife") }}
                                    </dt>
                                    <dd class="text-gray-600">
                                        {{
                                            $t(
                                                `content.product.${product.id}.shelfLife`,
                                            )
                                        }}
                                    </dd>
                                </div>

                                <div>
                                    <dt
                                        class="font-semibold text-gray-900 mb-1"
                                    >
                                        {{ $t("content.product.benefits") }}
                                    </dt>
                                    <dd class="text-gray-600">
                                        {{
                                            $t(
                                                `content.product.${product.id}.benefits`,
                                            )
                                        }}
                                    </dd>
                                </div>

                                <div>
                                    <dt
                                        class="font-semibold text-gray-900 mb-1"
                                    >
                                        {{ $t("content.product.uses") }}
                                    </dt>
                                    <dd class="text-gray-600">
                                        {{
                                            $t(
                                                `content.product.${product.id}.uses`,
                                            )
                                        }}
                                    </dd>
                                </div>

                                <div class="md:col-span-2">
                                    <dt
                                        class="font-semibold text-gray-900 mb-1"
                                    >
                                        {{ $t("content.product.legality") }}
                                    </dt>
                                    <dd class="text-gray-600">
                                        {{
                                            $t(
                                                `content.product.${product.id}.legality`,
                                            )
                                        }}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <!-- Closing CTA -->
        <section class="py-16 md:py-20 bg-gray-light">
            <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center">
                <div class="text-lg text-gray-700 mb-6">
                    <p>{{ $t("cta.firstProductDesc") }}</p>
                    <p>
                        {{ $t("cta.secondProductDesc") }}
                    </p>
                </div>
                <NuxtLink
                    :to="localePath('/contact')"
                    class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg transition-colors"
                >
                    {{ $t("label.contactOurSales") }}
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
        id: "firstProduct",
        name: "Palm Sugar Powder",
        image: product1,
        description:
            "Naturally derived from Indonesian palm sap, our palm sugar powder offers a rich caramel flavor and fine texture. Ideal for food manufacturers, beverage producers, and retail distribution.",
        ingredients:
            "100% natural palm sap (nira aren). No artificial additives, preservatives, or coloring.",
        shelfLife:
            "12 months from production date when stored in a cool, dry place in sealed packaging.",
        benefits:
            "Supports immune system function; Helps maintain healthy blood sugar levels when consumed as part of a balanced diet; Promotes digestive health; Supports normal nervous system function; Naturally rich in antioxidants",
        uses: "Beverage manufacturing (coffee, tea, juice, and specialty drinks); Bakery and dessert production (ingredient and topping); Culinary applications, including sauces, marinades, and seasoning blends",
        legality:
            "Produced in accordance with Indonesian food safety regulations. Certified Halal and equipped with Indonesian Home Industry Food Production Permit (P-IRT) licensing, complete with Nutrition Facts labeling and retail barcode registration to support domestic and international distribution.",
    },
    {
        id: "secondProduct",
        name: "Premium Shredded Tuna",
        image: product2,
        description:
            "Made from carefully selected tuna, processed hygienically to preserve freshness and flavor. A high-protein product suitable for retail and wholesale distribution.",
        ingredients:
            "Fresh Tuna, Vegetable Oil, Garlic, Shallots, Galangal, Ginger, Turmeric, Coriander, Pepper, Flavor Enhancer, Salt.",
        shelfLife:
            "12 months in sealed packaging when stored in a cool, dry place. Refer to label for exact expiry.",
        benefits:
            "High protein content; source of omega-3; long shelf life; versatile for meals and snacks; suitable for retail and food service.",
        uses: "Topping for rice and porridge; filling for bread and pastries; ready-to-eat snack; ingredient for traditional and modern dishes; bulk supply for repackaging.",
        legality:
            "Produced in accordance with Indonesian food safety regulations. Certified Halal and compliant with national quality standards (SNI), equipped with Indonesian Home Industry Food Production Permit (P-IRT) licensing and retail barcode registration to support domestic and international distribution.",
    },
    {
        id: "thirdProduct",
        name: "Mackerel Fish Crackers",
        image: product3,
        description:
            "A traditional Indonesian snack made from premium mackerel fish, offering a crispy texture and savory taste loved across markets.",
        ingredients:
            "Fresh Mackerel fish (tenggiri), Wheat Flour, Eggs, Pepper, Salt, Sugar, Leavening Agent.",
        shelfLife:
            "3 months in sealed packaging. Store in a cool, dry place. Best consumed within stated expiry date.",
        benefits:
            "Everyday snack favorite; Authentic regional specialty; Versatile meal companion; Suitable for events and hospitality; Long-lasting and travel-friendly",
        uses: "Standalone snack; accompaniment to meals; retail and bulk export; custom packaging and private label; convenience and grocery distribution.",
        legality:
            "Produced in accordance with Indonesian food safety regulations. Certified Halal and compliant with national quality standards (SNI), equipped with Indonesian Home Industry Food Production Permit (P-IRT) licensing and retail barcode registration to support domestic and international distribution.",
    },
    {
        id: "fourthProduct",
        name: "Passion Fruit Beverage",
        image: product4,
        description:
            "Made from fresh Indonesian passion fruit, delivering a refreshing tropical taste. Available for bulk export and private labeling.",
        ingredients:
            "Passion Fruit Juice, Sugar and Sodium Benzoate (as permitted preservative)",
        shelfLife:
            "6 months unopened when stored in a cool, dry place. Refrigerate after opening and consume within the period stated on label.",
        benefits:
            "Rich in vitamin C to support normal immune function; Contains antioxidants that help protect cells from oxidative stress; A source of dietary fiber that supports healthy digestion; Contains potassium, which contributes to the maintenance of normal blood pressure; Naturally contains alkaloid compounds associated with mild calming properties",
        uses: "Ready-to-drink beverage; base for cocktails and mocktails; food service and hospitality; retail and e-commerce; bulk and container shipment for overseas bottling.",
        legality:
            "Halal-certified and officially registered with BPOM (Indonesia’s National Agency of Drug and Food Control), ensuring compliance with national food safety regulations.",
    },
];
</script>
