<script setup>
  import { onMounted } from "vue";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  onMounted(() => {
    gsap.to(".box", {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: ".gradient-blue",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
        markers: true,
      }
    })
  });
</script>

<template>
  <section class="panel center gradient-green"></section>
  <section class="panel center gradient-blue">
    <div class="box">Box</div>
  </section>
  <section class="panel center gradient-orange"></section>
</template>

<style scoped>

</style>