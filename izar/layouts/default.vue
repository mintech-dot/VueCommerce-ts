<template>
  <div>
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>
