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
            <Table
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
              @delete-wishlist="removeFromWishlist"
              @add-to-cart="handleAddToCart(product.id)"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Newsletter />
</template>

<script setup lang="ts">
const {
  getProductsInWishlist,
  removeProductfromWishlist,
  searchProductsInWishlist,
} = useWishlist();

const { addToCart } = useCart();
const handleAddToCart = (id: string) => {
  addToCart(id);
};
const searchText = ref("");

const productsInWishlist = computed(() => {
  return getProductsInWishlist();
});

const filteredProducts = computed(() => {
  if (searchText.value === "") return productsInWishlist.value;
  else {
    return searchProductsInWishlist(searchText.value);
  }
});
const removeFromWishlist = (id: string) => {
  removeProductfromWishlist(id);
};
</script>
