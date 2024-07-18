<template>
  <div
    v-if="product && product.items"
    class="px-4 md:px-8 lg:px-24 pt-12 gap-4 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
  >
    <div
      v-for="product in product.items"
      :key="product.id"
      class="flex border-secondary/50 border rounded-xl"
    >
      <div class="w-1/2">
        <img
          v-if="product.featuredAsset"
          :src="product.featuredAsset.preview"
          :alt="product.name"
          class="h-full rounded-l-xl"
        />
      </div>

      <div class="w-1/2 p-4">
        <img :src="rating" class="pb-4 pt-3" alt="" />

        <h1 class="text-primary font-semibold font-inter pb-1">{{ product.name }}</h1>
        <h2 class="text-[#121212] text-[14px] font-inter font-semibold">
          $ {{ product.variants[0].priceWithTax }}
        </h2>
        <p
          class="text-secondary text-base font-inter font-normal text-wrap pt-4 line-clamp-5 "
        >
          {{ product.description }}
        </p>
        <div class="mt-6">
          <Button variant="primary" size="lg">Add to cart</Button>
        </div>
        <div class="flex gap-2 justify-center">
          <img :src="heart" alt="" class="w-8" />
          <h2 class="py-4">wishlist</h2>
        </div>
      </div>
    </div>
  </div>
  <p v-else-if="loading">Loading...</p>
  <p v-else-if="error">No products found.</p>
  <p v-else class="text-center">No products found.</p>
</template>

<script setup lang="ts">
import rating from "../assets/rating.svg";
import Button from "../components/ui/Button.vue";
import heart from "../assets/heart.svg";

type ProductCardProps = {
  product: any;
  loading: boolean;
  error: any;
};
const props = defineProps<ProductCardProps>();
</script>
