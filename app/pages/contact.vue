<template>
    <div>
        <!-- Page Header -->
        <section
            class="bg-gradient-to-br from-green-light/30 via-white to-stone-50 py-16 md:py-20"
        >
            <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <h1 class="text-3xl md:text-4xl font-bold text-green-dark">
                    {{ $t("content.contact.title") }}
                </h1>
                <p class="mt-4 text-lg text-gray-600">
                    {{ $t("content.contact.desc") }}
                </p>
            </div>
        </section>

        <section class="py-12 md:py-16 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 md:flex md:gap-16">
                <!-- Contact Form -->
                <!-- <div class="md:flex-1">
                    <h2 class="text-xl font-bold text-gray-900 mb-6">
                        Send Us Your Inquiry
                    </h2>
                    <form class="space-y-4" @submit.prevent="onSubmit">
                        <div>
                            <label
                                for="fullName"
                                class="block text-sm font-medium text-gray-700 mb-1"
                                >Full Name</label
                            >
                            <input
                                id="fullName"
                                v-model="form.fullName"
                                type="text"
                                required
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            />
                        </div>
                        <div>
                            <label
                                for="companyName"
                                class="block text-sm font-medium text-gray-700 mb-1"
                                >Company Name</label
                            >
                            <input
                                id="companyName"
                                v-model="form.companyName"
                                type="text"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            />
                        </div>
                        <div>
                            <label
                                for="country"
                                class="block text-sm font-medium text-gray-700 mb-1"
                                >Country</label
                            >
                            <input
                                id="country"
                                v-model="form.country"
                                type="text"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            />
                        </div>
                        <div>
                            <label
                                for="email"
                                class="block text-sm font-medium text-gray-700 mb-1"
                                >Email Address</label
                            >
                            <input
                                id="email"
                                v-model="form.email"
                                type="email"
                                required
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            />
                        </div>
                        <div>
                            <label
                                for="phone"
                                class="block text-sm font-medium text-gray-700 mb-1"
                                >Phone / WhatsApp</label
                            >
                            <input
                                id="phone"
                                v-model="form.phone"
                                type="tel"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            />
                        </div>
                        <div>
                            <label
                                for="productInterest"
                                class="block text-sm font-medium text-gray-700 mb-1"
                                >Product of Interest</label
                            >
                            <input
                                id="productInterest"
                                v-model="form.productInterest"
                                type="text"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            />
                        </div>
                        <div>
                            <label
                                for="orderVolume"
                                class="block text-sm font-medium text-gray-700 mb-1"
                                >Estimated Order Volume</label
                            >
                            <input
                                id="orderVolume"
                                v-model="form.orderVolume"
                                type="text"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            />
                        </div>
                        <div>
                            <label
                                for="message"
                                class="block text-sm font-medium text-gray-700 mb-1"
                                >Message</label
                            >
                            <textarea
                                id="message"
                                v-model="form.message"
                                rows="4"
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            />
                        </div>
                        <button
                            type="submit"
                            class="w-full md:w-auto px-8 py-4 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-lg transition-colors"
                        >
                            Submit Inquiry
                        </button>
                    </form>
                </div> -->

                <!-- Direct Contact -->
                <div class="md:mt-0 md:w-80 flex-shrink-0">
                    <h2 class="text-xl font-bold text-gray-900 mb-4">
                        {{ $t("content.contact.directContact") }}
                    </h2>
                    <div class="space-y-3 text-gray-600">
                        <p class="flex items-start gap-2">
                            <span>📍</span>
                            <span
                                >Makassar City & Maros Regency, Indonesia</span
                            >
                        </p>
                        <p class="flex items-start gap-2">
                            <span>📧</span>
                            <a
                                href="mailto:export@companyname.com"
                                class="text-amber-600 hover:underline"
                                >eksporcelebes89@gmail.com</a
                            >
                        </p>
                        <p class="flex items-start gap-2">
                            <span>📞</span>
                            <span>+62822-8993-0399</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const localePath = useLocalePath();

const form = reactive({
    fullName: "",
    companyName: "",
    country: "",
    email: "",
    phone: "",
    productInterest: "",
    orderVolume: "",
    message: "",
});

function onSubmit() {
    // TODO: integrate with backend or email service
    console.log("Inquiry submitted:", form);
    alert("Thank you for your inquiry. We will get back to you soon.");
}
</script>
