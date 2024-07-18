<template>
  <div class="px-4 md:px-8 lg:px-24 pt-12 flex justify-between gap-8">
    <div class="sm:flex md:justify-between gap-8 w-screen">
      <div class="sm:flex gap-8">
        <div>
          <h1 class="text-secondary mt-4">CATEGORIES</h1>
          <Dropdown :options="productOptions" />
        </div>
        <div>
          <h1 class="text-secondary mt-4">FILTER BY</h1>
          <Dropdown :options="FilterOptions" />
        </div>
      </div>
      <div>
        <h1 class="text-secondary mt-4">FILTER BY</h1>
        <input
          class="border border-secondary/50 rounded-[8px] px-4 py-2 w-full"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  </div>
  <div>
    <div
    v-if="products && products.items"
    class="px-4 md:px-8 lg:px-24 pt-12 gap-4 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
  >
    <div
      v-for="product in products.items"
      :key="product.id"
      class="flex border-secondary/50 border rounded-xl"
    >
    <ProductCard :product="product"/>
    </div>
    </div>

  <p v-else-if="loading">Loading...</p>
  <p v-else-if="error">No products found.</p>
  <p v-else class="text-center">No products found.</p>
  </div>
  <div div class="flex justify-center py-8">
    <Button variant="secondary" size="lg">Show More</Button>
  </div>
</template>

<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";
import { ref } from "vue";
import Dropdown from "../components/ui/Dropdown.vue";
import Button from "../components/ui/Button.vue";
interface Option {
  value: string;
  text: string;
}

const productOptions = ref<Option[]>([
  { value: "laptop", text: "laptop" },
  { value: "product2", text: "Product 2" },
  { value: "product3", text: "Product 3" },
]);

const FilterOptions = ref<Option[]>([
  { value: "A-z", text: "A-z" },
  { value: "product2", text: "Product 2" },
  { value: "product3", text: "Product 3" },
]);

import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GetProductsDocument, GetProductsQuery } from "../gql/graphql"; 

const { result, loading, error } =
  useQuery<GetProductsQuery>(GetProductsDocument);

const products = computed(() => result.value?.products) || [];
</script>
