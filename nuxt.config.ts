// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/tailwind.css"],
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-lucide-icons",
        "@nuxtjs/google-fonts",
        "@nuxtjs/i18n",
    ],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    googleFonts: {
        families: {
            Roboto: "100..900",
        },
        display: "swap",
        preconnect: true,
        preload: true,
    },
    i18n: {
        strategy: "prefix",
        defaultLocale: "en",
        locales: [
            { code: "en", name: "EN", file: "en.json" },
            { code: "id", name: "ID", file: "id.json" },
            { code: "zh", name: "中文", file: "zh.json" },
        ],
        vueI18n: "./i18n/i18n.config.ts",
        // detectBrowserLanguage: {
        //     useCookie: true,
        //     cookieKey: 'i18n_redirected'
        // }
    },
});
