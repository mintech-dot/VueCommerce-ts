<template>
  <tr
    class="border-b border-secondary/30"
  >
    <td class="flex items-center gap-4 py-4">
      <NuxtImg
        @click="removeFromWishlist(product.id)"
        src="/delete.svg"
        alt=""
        class="h-6 cursor-pointer"
      />
      <img :src="product.featuredAsset?.preview" class="h-16" alt="" />
      <h1 class="text-primary text-[14px] sm:text-md font-semibold font-inter">
        {{ product.name }}
      </h1>
    </td>
    <td
      class="text-primary font-semibold font-inter py-4 text-[14px] md:text-md"
    >
      {{
        product.variants[0].priceWithTax.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
      }}
    </td>
    <td class="md:pr-10 py-4 w-1/6">
      <Button variant="primary" size="lg">Add</Button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { Product } from "~~/gql/graphql";

type Props = {
    product: Product;
};


const props = defineProps<Props>();

const emit = defineEmits<{
    (e: "delete-wishlist", id: string): void;
}>();

function removeFromWishlist(id: string) {
  emit("delete-wishlist", id);
}

</script>
