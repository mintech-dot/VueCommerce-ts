<template>
  <div class="flex border-secondary/50 border rounded-xl">
    <div class="w-1/2">
      <img :src="Card" class="h-full rounded-xl" alt="" />
    </div>

    <div class="w-1/2 px-4 pt-4">
      <h1 class="text-secondary">Product Title</h1>
      <img :src="rating" alt="" />
      <h2 class="text-[#121212] text-medium font-inter font-medium">$89.99</h2>
      <p class="text-[#121212] text-base font-inter font-normal text-wrap py-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non erat
      </p>
      <div>
        <Button variant="primary" size="lg">Add to cart</Button>
      </div>
      <div class="flex gap-2 justify-center">
        <img :src="heart" alt="" class="w-8" />
        <h2 class="py-4">wishlist</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "../assets/Card.png";
import rating from "../assets/rating.svg";
import Button from "../components/ui/Button.vue";
import heart from "../assets/heart.svg";
</script>