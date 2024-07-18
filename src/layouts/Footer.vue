<template>
  <footer class="bg-primary">
    <div class="sm:flex sm:justify-between py-10 p-4 md:px-8 lg:px-24">
      <div class="sm:flex text-center sm:pt-3">
        <h1
          class="text-3xl font-bold font-poppins cursor-pointer text-tertiary"
        >
          Izar
        </h1>
        <div class="bg-[#6C7275] h-[1px] mx-48 my-2 sm:hidden"></div>
        <div class="bg-[#6C7275] w-[1px] my-[0.8rem] mx-4"></div>
        <h2 class="text-lg pt-1 font-poppins text-[#E8ECEF] cursor-pointer">
          Gift & Fshion Store
        </h2>
      </div>
      <div
        class="sm:flex text-center gap-14 pt-3 text-tertiary font-inter font-medium cursor-pointer"
      >
        <ul class="py-2 sm:block hover:text-secondary">
          Home
        </ul>
        <ul class="py-2 sm:block hover:text-secondary">
          Shop
        </ul>
        <ul class="py-2 sm:block hover:text-secondary">
          Product
        </ul>
        <ul class="py-2 sm:block hover:text-secondary">
          Contact Us
        </ul>
      </div>
    </div>
    <div class="bg-[#6C7275] h-[1px] mx-4 md:mx-8 lg:mx-24"></div>

    <div class="flex gap-4 justify-center py-8 sm:hidden cursor-pointer">
      <img :src="fb" class="w-8" alt="" />
      <img :src="insta" class="w-8" alt="" />
      <img :src="ytb" class="w-8" alt="" />
    </div>

    <div class="px-4 md:px-8 lg:px-24 pb-10 text-center">
      <div class="gap-4 sm:hidden">
        <div class="flex items-center justify-center gap-4 cursor-pointer">
          <h3 class="text-tertiary cursor-pointer font-semibold text-[14px]">
            Privacy Policy
          </h3>
          <h3 class="text-tertiary cursor-pointer font-semibold text-[14px]">
            Terms & use
          </h3>
        </div>
        <h3 class="text-tertiary pt-4 text-[14px]">
          Copyright © 2024 Izar. All Rights Reserved.
        </h3>
      </div>

      <div class="hidden sm:block">
        <div class="flex justify-between">
          <div class="flex gap-4 pt-8">
            <h3 class="text-tertiary text-[14px]">
              Copyright ©2024 Izar. All Rights Reserved.
            </h3>
            <h3 class="text-tertiary cursor-pointer font-semibold text-[14px]">
              Privacy Policy
            </h3>
            <h3 class="text-tertiary cursor-pointer font-semibold text-[14px]">
              Terms & use
            </h3>
          </div>

          <div class="flex gap-4 pt-6 cursor-pointer">
            <img :src="fb" class="w-8" alt="" />
            <img :src="insta" class="w-8" alt="" />
            <img :src="ytb" class="w-8" alt="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import ytb from "../assets/ytb.svg";
</script>
