<template>
    <Navbar />
    <Hero />
    <ProductList />
    <Newsletter />
    <Footer />
  </template>
  
  <script setup lang="ts">
  import Navbar from "../layouts/Navbar.vue";
  import Hero from "../views/Hero.vue";
  import ProductList from "../views/ProductsList.vue";
  import Newsletter from "../views/Newsletter.vue";
  import Footer from "../layouts/Footer.vue";
  </script>
  