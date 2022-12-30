<script setup>
import { ArrowDownCircleIcon } from "@heroicons/vue/24/solid";
import { UserIcon } from "@heroicons/vue/24/solid";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbar flex w-full h-[60px] items-center px-6 fixed">
    <a href="/" class="flex justify-start w-[20%]">
      <img
        src="https://global-uploads.webflow.com/5de7dc9925af690aa56c0736/5e002ff58d0e1e24353aad96_logo-white-c.png"
        alt=""
        class="h-6"
      />
    </a>
    <div class="links hidden lg:flex gap-7 flex-1 justify-center">
      <router-link to="/why-play" active-class="active">Why Play?</router-link>
      <router-link to="/get-started">Get Started</router-link>
      <router-link to="/features">Features</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/careers">Careers</router-link>
    </div>
    <div class="download-section lg:flex hidden justify-end w-[20%]">
      <a
        href="https://apps.apple.com/us/app/id1479709805"
        target="_blank"
        class="download-nav text-[color:var(--accent-color)]"
      >
        <span class="flex font-bold mr-4">
          <ArrowDownCircleIcon class="h-5 w-5 mr-1" />
          Download
        </span></a
      >
      <a
        href="https://app.createwithplay.com"
        target="_blank"
        class="text-white"
      >
        <span class="flex font-bold">
          <UserIcon class="h-5 w-5 mr-1" />Play&nbsp;Web
        </span>
      </a>
    </div>

    <nav role="navigation" class="flex lg:hidden">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu" class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          <router-link to="/why-play">Why Play?</router-link>
          <router-link to="/get-started">Get Started</router-link>
          <router-link to="/features">Features</router-link>
          <router-link to="/news">News</router-link>
          <router-link to="/careers">Careers</router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  color: hsla(0, 0%, 100%, 0.8);
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
}

a {
  -webkit-transition: color 300ms ease;
  transition: color 300ms ease;
}

a:hover {
  color: var(--accent-color);
}
a.active {
  color: var(--accent-color);
}

/* hamburger menu */

nav {
  height: 60px;
  justify-content: flex-end;
  flex: 1;
}

#menuToggle {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 25px;
  right: 0px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input {
  display: flex;
  width: 29px;
  height: 25px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

#menuToggle span {
  display: flex;
  width: 29px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: #ffffff;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 5px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-3px, -1px);
  background: #36383f;
}
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: black;
  gap: 2rem;
  width: 100vw;
  height: calc(100vh - 60px);
  /* box-shadow: 0 0 10px #85888c; */
  margin: 20px 0 50px 50px;
  padding-left: 50px;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  transition-delay: 2s;
}

#menuToggle input:checked ~ ul {
  transform: translate(-100%, 0);
}
input {
  -webkit-tap-highlight-color: transparent;
}
</style>
