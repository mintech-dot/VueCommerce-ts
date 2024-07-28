<template>
  <tr class="border-b border-secondary/30">
    <td class="flex productsInWCarts-center gap-4 py-4">
      <NuxtImg
        @click="removeFromCart(productsInWCart.id)"
        src="/delete.svg"
        alt=""
        class="cursor-pointer"
      />
      <NuxtImg
        :src="productsInWCart.featuredAsset?.preview"
        class="h-16"
        alt=""
      />
      <h1
        class="text-primary text-[14px] sm:text-md font-semibold font-inter py-5"
      >
        {{ productsInWCart.name }}
      </h1>
    </td>
    <td
      class="text-primary font-semibold font-inter py-4 text-[14px] md:text-md pr-10"
    >
      <div
        class="flex border border-secondary rounded-lg py-1 mx-2 justify-between px-2"
      >
        <div
          @click="decreaseQuantity(productsInWCart.id)"
          class="cursor-pointer text-secondary"
        >
          -
        </div>
        <div class="text-primary">{{ productsInWCart.quantity }}</div>
        <div
          @click="increaseQuantity(productsInWCart.id)"
          class="cursor-pointer text-secondary"
        >
          +
        </div>
      </div>
    </td>
    <td
      class="text-primary font-semibold font-inter py-4 text-[14px] md:text-md"
    >
      {{
        productsInWCart.variants[0].priceWithTax.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
      }}
    </td>
    <td
      class="text-primary font-semibold font-inter py-4 text-[14px] md:text-md"
    >
      {{
        multiplyQuantities(
          productsInWCart.quantity,
          productsInWCart.variants[0].priceWithTax
        )
      }}
    </td>
  </tr>
</template>

<script setup lang="ts">
import { type Product } from "../gql/graphql";
const { multiplyQuantities } = useCart();

interface Props {
  productsInWCart: Product & {
    quantity: number;
  };
}

defineProps<Props>();

const emit = defineEmits<{
  (e: "increase-quantity", id: string): void;
  (e: "decrease-quantity", id: string): void;
  (e: "remove-from-cart", id: string): void;
}>();

function increaseQuantity(id: string) {
  emit("increase-quantity", id);
}

function decreaseQuantity(id: string) {
  emit("decrease-quantity", id);
}

function removeFromCart(id: string) {
  emit("remove-from-cart", id);
}
</script>
