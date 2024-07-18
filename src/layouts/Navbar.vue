<template>
  <nav
    class="fixed w-full bg-white shadow-xl flex justify-between p-4 md:px-8 lg:px-24 cursor-pointer"
  >
    <div class="text-3xl font-bold font-poppins">Izar</div>
    <div class="flex gap-2 md:gap-4 text-secondary lg:pl-56 pt-2 font-inter">
      <ul class="text-primary hidden sm:block">
        Home
      </ul>
      <ul class="hover:text-primary hidden sm:block">
        Shop
      </ul>
      <ul class="hover:text-primary hidden sm:block">
        Product
      </ul>
      <ul class="hover:text-primary hidden sm:block">
        Contact Us
      </ul>
    </div>

    <div class="flex lg:gap-4 gap-1">
      <div class="flex gap-1">
        <img :src="shop" class="w-8" alt="" />
        <h2 class="text-white text-xl bg-black rounded-full my-2 px-2">0</h2>
      </div>

      <div class="flex gap-1">
        <img :src="heart" class="w-8" alt="" />
        <h2 class="text-white text-xl bg-black rounded-full my-2 px-2">0</h2>
      </div>
      <div class="hidden sm:block">
        <Button variant="primary" size="lg">Sign In</Button>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import shop from "../assets/shop.svg";
import heart from "../assets/heart.svg";
import Button from "../components/ui/Button.vue";
</script>
