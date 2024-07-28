<template>
  <div class="py-24 mx-4 lg:mx-28">
    <h1 class="py-6 text-4xl font-bold font-poppins text-center">Cart</h1>
    <div class="hidden md:block">
      <CheckoutStpes />
    </div>
    <div class="md:flex gap-4 pt-6">
      <div
        class="p-2 md:p-4 mt-6 border border-secondary/80 rounded-xl shadow-lg md:w-2/3"
      >
        <ClientOnly>
          <div
            v-if="!productsInWCart.length"
            class="flex justify-center items-center min-h-[300px]"
          >
            <p class="text-primary text-center font-inter font-semibold">
              No products found.
            </p>
          </div>

          <div v-else>
            <div class="overflow-x-auto">
              <table class="min-w-[800px] w-full">
                <thead class="text-secondary">
                  <tr class="border-b border-secondary/30">
                    <th class="pl-2 md:pl-10 text-left">Product</th>
                    <th class="md:pr-10 text-left">Quantity</th>
                    <th class="text-left">Subtotal</th>
                    <th class="text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <CartTable
                    v-for="items in productsInWCart"
                    :productsInWCart="items"
                    @remove-from-cart="removeFromCart"
                    @decrease-quantity="decreaseQuantity"
                    @increase-quantity="increaseQuantity"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </ClientOnly>
      </div>

      <ClientOnly>
        <SummaryCard :totalPrice="totalPrice" />
      </ClientOnly>
    </div>
  </div>
  <Newsletter />
</template>

<script setup lang="ts">
const {
  totalPrice,
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
