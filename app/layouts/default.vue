<template>
    <div class="min-h-screen flex flex-col font-roboto">
        <Header />
        <main class="flex-1 w-full pt-16 bg-primary-green/30">
            <slot />
        </main>
        <Footer />
    </div>
</template>
