<template>
  <div class="flex border-secondary/50 border rounded-xl">
    <div class="w-1/2">
      <NuxtImg
        v-if="product.featuredAsset"
        :src="product.featuredAsset.preview"
        :alt="product.name"
        class="h-full rounded-l-xl"
      />
    </div>

    <div class="w-1/2 p-4">
      <NuxtImg src="/rating.svg" class="pb-4 pt-3" alt="" />
      <h1 class="text-primary font-semibold font-inter pb-1">
        {{ product.name }}
      </h1>
      <h2 class="text-[#121212] text-sm font-inter font-semibold">
        {{
          product.variants[0].priceWithTax.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        }}
      </h2>
      <p
        class="text-secondary text-base font-inter font-normal text-wrap pt-4 line-clamp-5"
      >
        {{ product.description }}
      </p>
      <div class="mt-6">
        <Button @click="addToCart" variant="primary" size="lg"
          >Add to cart</Button
        >
      </div>
      <div class="flex gap-2 justify-center">
        <button @click="toggleWishlist" class="flex gap-2">
          <div class="pt-4">
            <heart :fill="isInWishlist ? 'black' : 'white'" />
          </div>
          <h2 class="py-4">wishlist</h2>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Heart } from "lucide-vue-next";
import { type Product } from "../gql/graphql";

type ProductCardProps = {
  product: Product;
  isInWishlist: boolean;
};

type WishlistUpdateEvent = {
  productId: string;
  isInWishlist: boolean;
};

type ProductCard = {
  productId: string;
};

const props = defineProps<ProductCardProps>();
const isInWishlist = ref(props.isInWishlist);

const emit = defineEmits<{
  (event: "update-wishlist", payload: WishlistUpdateEvent): Product;
  (event: "add-to-cart", payload: ProductCard): Product;
}>();

function addToCart() {
  emit("add-to-cart", {
    productId: props.product.id,
  });
}

function toggleWishlist() {
  isInWishlist.value = !isInWishlist.value;
  emit("update-wishlist", {
    productId: props.product.id,
    isInWishlist: isInWishlist.value,
  });
}
</script>