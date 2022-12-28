<script setup>
import { ArrowDownCircleIcon } from "@heroicons/vue/24/solid";
import { UserIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <div class="navbar flex w-full h-[60px] items-center px-6 fixed">
        <a href="/" class="flex justify-start w-[20%]">
            <img src="https://global-uploads.webflow.com/5de7dc9925af690aa56c0736/5e002ff58d0e1e24353aad96_logo-white-c.png"
                alt="" class="h-6" />
        </a>
        <div class="links flex gap-7 flex-1 justify-center">
            <a href="/why-play">Why Play?</a>
            <a href="/get-started">Get Started</a>
            <a href="/features">Features</a>
            <a href="/news">News</a>
            <a href="/careers">Careers</a>
        </div>
        <div class="download-section flex justify-end w-[20%]">
            <a href="https://apps.apple.com/us/app/id1479709805" target="_blank"
                class="download-nav text-[color:var(--accent-color)]">
                <span class="flex font-bold mr-4">
                    <ArrowDownCircleIcon class="h-5 w-5 mr-1" />
                    Download
                </span></a>
            <a href="https://app.createwithplay.com" target="_blank" class="text-white">
                <span class="flex font-bold">
                    <UserIcon class="h-5 w-5 mr-1" />Play&nbsp;Web
                </span>
            </a>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    color: hsla(0, 0%, 100%, 0.8);
    -webkit-backdrop-filter: blur(60px);
    backdrop-filter: blur(60px);
}

.links a {
    -webkit-transition: color 300ms ease;
    transition: color 300ms ease;
}

.links a:hover {
    color: var(--accent-color);
}
</style>
