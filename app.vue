<script setup>
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);
</script>

<template>
  <main>
    <NuxtPage />
  </main>
</template>
