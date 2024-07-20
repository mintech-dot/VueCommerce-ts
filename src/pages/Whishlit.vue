<template>
  <div class="py-24 mx-4 md:mx-36 lg:mx-64 ">
    <h1 class="text-3xl font-bold font-poppins pt-6">Wishlist</h1>

    <div class="p-4 border border-secondary/20 rounded-xl mt-6 shadow-lg">
        <div v-if="!products.length">
          <p class="text-primary text-center font-inter font-semibold">No products found.</p>
        </div>
        <div v-else>
      <table class="w-full">
        <thead class="text-secondary">
          <tr class="border-b border-secondary/30">
            <th class="pl-10 text-left">Product</th>
            <th class="text-left">Price ($)</th>
            <th class="text-center md:pr-14">Add to cart</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in products"
            :key="item.id"
            class="border-b border-secondary/30"
          >
            <td class="flex items-center gap-4 py-4 ">
              <img
                @click="removeFromWishlist(item.id)"
                :src="deleteicon"
                alt=""
                class="h-6 cursor-pointer"
              />
              <img :src="item.imageUrl" class="h-16" alt="" />
              <h1 class="text-primary text-[14px] sm:text-md font-semibold font-inter">
                {{ item.name }}
              </h1>
            </td>
            <td class="text-primary font-semibold font-inter py-4 text-[14px] md:text-md ">
              {{ item.price }}
            </td>
            <td class="md:pr-10 py-4 w-1/6">
              <Button variant="primary" size="lg">Add</Button>
            </td>
          </tr>
        </tbody>
      </table>
        </div>
    </div>
  </div>
  <Newsletter />
</template>

<script setup lang="ts">
import Newsletter from "../views/Newsletter.vue";
import Button from "../components/ui/Button.vue";
import deleteicon from "../assets/delete.svg";
import { ref } from "vue";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const products = ref<Product[]>([]);

const cartString = localStorage.getItem("wishlist");
products.value = cartString ? JSON.parse(cartString) : [];

const removeFromWishlist = (id: string) => {
  products.value = products.value.filter((item) => item.id !== id);
  localStorage.setItem("wishlist", JSON.stringify(products.value));
};
</script>
