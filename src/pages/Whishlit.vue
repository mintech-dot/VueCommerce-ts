<template>
  <div class="py-24 mx-4 md:mx-36 lg:mx-64">
    <div class="flex justify-between mt-8">
      <h1 class="text-3xl font-bold font-poppins pt-6">Wishlist</h1>
      <div>
        <h1 class="text-secondary">FILTER BY PRODUCT NAME</h1>
        <input
          v-model="searchText"
          class="border border-secondary/50 rounded-[8px] px-4 py-2 w-full"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="p-4 border border-secondary/20 rounded-xl mt-6 shadow-lg">
      <div v-if="!filteredProducts.length">
        <p class="text-primary text-center font-inter font-semibold">
          No products found.
        </p>
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
              v-for="item in filteredProducts"
              :key="item.id"
              class="border-b border-secondary/30"
            >
              <td class="flex items-center gap-4 py-4">
                <img
                  @click="removeFromWishlist(item.id)"
                  :src="deleteicon"
                  alt=""
                  class="h-6 cursor-pointer"
                />
                <img :src="item.featuredAsset?.preview" class="h-16" alt="" />
                <h1
                  class="text-primary text-[14px] sm:text-md font-semibold font-inter"
                >
                  {{ item.name }}
                </h1>
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
import { GetProductsDocument, GetProductsQuery } from "../gql/graphql";
import { computed, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { useWishlist } from "../hooks/useWishlist";

const productsQuery = useQuery<GetProductsQuery>(GetProductsDocument);

const { wishlist: whishlistProductsIds, removeProductfromWishlist } =
  useWishlist();

const searchText = ref("");

const productsInWishlist = computed(() => {
  const allProducts = productsQuery.result.value?.products.items || [];
  return allProducts.filter((product) =>
    whishlistProductsIds.value.includes(product.id)
  );
});

const filteredProducts = computed(() => {
  if(searchText.value === '') return productsInWishlist.value
  else{
  return productsInWishlist.value.filter((product) =>
    product.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
  }
})
const removeFromWishlist = (id: string) => {
  removeProductfromWishlist(id);
};
</script>
