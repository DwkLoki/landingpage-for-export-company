<template>
    <div class="min-h-screen flex flex-col font-roboto">
        <Header />
        <main class="flex-1 w-full pt-14 bg-gray-light">
            <slot />
        </main>
        <!-- <Footer /> -->
    </div>
</template>
