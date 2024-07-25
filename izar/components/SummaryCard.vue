<template>
  <div
    class="p-4 border border-secondary/80 rounded-xl mt-6 shadow-lg w-1/3 h-[380px]"
  >
    <h2>Cart Summary</h2>
    <div
      class="flex justify-between border p-2 rounded-md mt-4 hover:bg-secondary/10"
    >
      <div>
        <input
          type="radio"
          class="h-4 w-4 border-2 border-secondary text-primary checked:bg-primary rounded-full mr-2 cursor-pointer"
          name="shipping"
          id="free-shipping"
        />
        <label for="free-shipping" class="text-secondary cursor-pointer"
          >Free shipping
        </label>
      </div>
      <span>+$0.00</span>
    </div>

    <div
      class="flex justify-between border p-2 rounded-md mt-4 hover:bg-secondary/10"
    >
      <div>
        <input
          type="radio"
          class="h-4 w-4 border-2 border-secondary text-primary checked:bg-primary rounded-full mr-2 cursor-pointer"
          name="shipping"
          id="express-shipping"
        />
        <label for="express-shipping" class="text-secondary cursor-pointer"
          >Express shipping</label
        >
      </div>
      <span>+$0.00</span>
    </div>

    <div
      class="flex justify-between border p-2 rounded-md mt-4 hover:bg-secondary/10"
    >
      <div>
        <input
          type="radio"
          class="h-4 w-4 border-2 border-secondary text-primary checked:bg-primary rounded-full mr-2 cursor-pointer"
          name="shipping"
          id="pickup"
        />
        <label for="pickup" class="text-secondary cursor-pointer">
          Pick up</label
        >
      </div>
      <span>+$0.00</span>
    </div>

    <div class="flex justify-between mt-4">
      <h3>Subtotal</h3>
      <h3>$1235,00</h3>
    </div>

    <div class="flex justify-between mt-4">
      <h3 class="text-primary font-semibold">Total</h3>
      <h3 class="text-primary font-semibold">{{ TotalPrice() }}</h3>
    </div>
    <td class="py-4 w-1/6">
      <Button variant="primary" size="lg">Checkout</Button>
    </td>
  </div>
</template>

<script setup lang="ts">
function TotalPrice() {
  return useCart().totalPrice;
}
</script>
