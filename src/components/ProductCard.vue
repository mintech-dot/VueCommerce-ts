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
      <p
        ref="description"
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
            <heart v-if="!isInWishlist"   color="stroke-black hover:fill-black" />
            <heart v-else color="fill-black hover:stroke-black" />
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
import { watchEffect, ref  } from "vue";
import { Product } from "../gql/graphql";

type ProductCardProps = {
  product: Product;
  isInWishlist: boolean;
};
const props = defineProps<ProductCardProps>();
const isInWishlist = ref(props.isInWishlist);

const addToWishlist = () => {
  isInWishlist.value = !isInWishlist.value;
};

watchEffect(() => {
  const existingItems = JSON.parse(localStorage.getItem("wishlist") || "[]");
  if (isInWishlist.value) {
    const newItem = {
      id: props.product.id,
      name: props.product.name,
      price: props.product.variants[0].priceWithTax,
      imageUrl: props.product.featuredAsset?.preview,
    };
    existingItems.push(newItem);
  } else {
    const updatedItems = existingItems.filter(
      (item: any) => item.id !== props.product.id
    );
    existingItems.length = 0;
    existingItems.push(...updatedItems);
  }
  localStorage.setItem("wishlist", JSON.stringify(existingItems));
});
</script>