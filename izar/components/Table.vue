<template>
  <table class="w-full">
    <thead class="text-secondary">
      <tr class="border-b border-secondary/30">
        <th class="pl-10 text-left">Product</th>
        <th class="pr-10 text-left">Quantity</th>
        <th class="text-left">Subtotal</th>

        <th class="text-left">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in productsInWCart"
        :key="item.id"
        class="border-b border-secondary/30"
      >
        <td class="flex items-center gap-4 py-4">
          <img
            @click="removeFromCart(item.id)"
            :src="deleteicon"
            alt=""
            class="h-6 cursor-pointer"
          />
          <NuxtImg :src="item.featuredAsset?.preview" class="h-16" alt="" />
          <h1
            class="text-primary text-[14px] sm:text-md font-semibold font-inter"
          >
            {{ item.name }}
          </h1>
        </td>
        <td
          class="text-primary font-semibold font-inter py-4 text-[14px] md:text-md pr-10"
        >
          <div
            class="flex border border-secondary rounded-lg py-1 mx-2 justify-between px-2"
          >
            <div
              @click="decreaseQuantity(item.id)"
              class="cursor-pointer text-secondary"
            >
              -
            </div>
            <div class="text-primary">{{ item.quantity }}</div>
            <div
              @click="increaseQuantity(item.id)"
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
            item.variants[0].priceWithTax.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}
        </td>
        <td
          class="text-primary font-semibold font-inter py-4 text-[14px] md:text-md"
        >
          {{ multiplyQuantities(item.quantity, item.variants[0].priceWithTax) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import deleteicon from "../assets/delete.svg";
import { type Product } from "../gql/graphql";
const { multiplyQuantities } = useCart();

type Props = {
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  productsInWCart: Product[];
  removeFromCart: (id: string) => void;
  quantity: number;
};

defineProps<Props>();
</script>
