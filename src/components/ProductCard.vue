<template>
  <div class="flex border-secondary/50 border rounded-xl">
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
      <h1 class="hidden">{{ product.id }}</h1>
      <h1 class="text-primary font-semibold font-inter pb-1">
        {{ product.name }}
      </h1>
      <h2 class="text-[#121212] text-[14px] font-inter font-semibold">
        $ {{ product.variants[0].priceWithTax }}
      </h2>
      <p ref="description"
        class="text-secondary text-base font-inter font-normal text-wrap pt-4 line-clamp-5"
      >
        {{ product.description }}
      </p>
      <div class="mt-6">
        <Button variant="primary" size="lg">Add to cart</Button>
      </div>
      <div class="flex gap-2 justify-center">
        <button @click="addToWishlist" class="flex gap-2">
          <div class="pt-[14px]">
          <heart />
        </div>
        <h2 class="py-4">wishlist</h2>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import rating from "../assets/rating.svg";
import Button from "../components/ui/Button.vue";
import heart from "../assets/heart.vue";
import { Product } from "../gql/graphql";

type ProductCardProps = {
  product: Product;
};
const props = defineProps<ProductCardProps>();

const addToWishlist = () => {
  // Add to localStorage
  const existingItems = JSON.parse(localStorage.getItem('wishlist') || '[]');
  
  // Flag to check if item already exists
  let itemExists = false;
  
  existingItems.forEach((item: any) => {
    if (item.id === props.product.id) {
      itemExists = true; // Set the flag to true if item is found
    }
  });

  if (itemExists) {
    alert("Product already in wishlist");
  } else {
    const newItem = {
      id: props.product.id,
      name: props.product.name,
      price: props.product.variants[0].priceWithTax,
      description: props.product.description,
      imageUrl: props.product.featuredAsset?.preview
    };
    existingItems.push(newItem);
    localStorage.setItem('wishlist', JSON.stringify(existingItems));
    alert("Product added to wishlist");
  }
}

</script>
