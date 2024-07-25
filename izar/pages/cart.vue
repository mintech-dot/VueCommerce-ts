<template>
  <div class="py-24 mx-4 md:mx-36 lg:mx-56">
    <h1 class="py-6 text-4xl font-bold font-poppins text-center">Cart</h1>
    <CheckoutSteps />
    <div class="flex gap-4 pt-6">
      <div
        class="p-4 mt-6 border border-secondary/80 rounded-xl shadow-lg w-2/3"
      >
        <div
          v-if="!productsInWCart.length"
          class="flex justify-center items-center min-h-[300px]"
        >
          <p class="text-primary text-center font-inter font-semibold">
            No products found.
          </p>
        </div>
        <div v-else>
          <Table
            :productsInWCart="productsInWCart"
            :removeFromCart="removeFromCart"
            :decreaseQuantity="decreaseQuantity"
            :increaseQuantity="increaseQuantity"
          />
        </div>
      </div>
      <SummaryCard />
    </div>
  </div>
  <Newsletter />
</template>

<script setup lang="ts">
const {
  getProductsInCart,
  removeProductfromCart,
  incrementQuantity,
  decrementQuantity,
} = useCart();

const increaseQuantity = (id: string) => {
  incrementQuantity(id);
};

const decreaseQuantity = (id: string) => {
  decrementQuantity(id);
};

const productsInWCart = computed(() => {
  return getProductsInCart();
});

const removeFromCart = (id: string) => {
  removeProductfromCart(id);
};
</script>
