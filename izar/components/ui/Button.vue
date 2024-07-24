<template>
  <button
    :class="[
      'px-4 py-2 text-center font-poppins font-medium',
      variantClass,
      sizeClass,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Define the props with TypeScript types
interface Props {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
}

// Define props
const props = defineProps<Props>();

// Computed property for variantClass
const variantClass = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-primary text-white w-full  rounded-[8px] hover:bg-primary/80";
    case "secondary":
      return "bg-white text-black rounded-[80px] border-secondary border hover:bg-primary hover:text-white";
    default:
      return "bg-primary text-white w-full  rounded-[8px] hover:bg-primary/80";
  }
});

// Computed property for sizeClass
const sizeClass = computed(() => {
  switch (props.size) {
    case "sm":
      return "text-sm";
    case "md":
      return "text-base";
    case "lg":
      return "text-lg";
    default:
      return "";
  }
});
</script>
