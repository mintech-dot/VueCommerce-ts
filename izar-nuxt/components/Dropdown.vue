<template>
  <select
    id="id"
    class="bg-white border text-gray-900 text-lg border-secondary/50 w-full sm:w-[250px] rounded-lg p-2.5"
  >
    <option value="none">Please select an option</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface Option {
  value: string;
  text: string;
}

const props = defineProps<{
  options: Option[];
}>();
</script>
