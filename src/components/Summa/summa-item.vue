<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  img: {
    type: String,
  },
  totalAmount: {
    type: Number,

  },
  currency: {
    type: String,
  }
  ,
  total: {
    type: String
  }
});



</script>

<template>
  <div>
    <div class="containerMain mt-5">
      <div class="bg-white w-[460px] h-[96px] rounded-lg pl-6 flex gap-4 items-center">
        <div class="w-12 h-12 rounded-xl bg-[#4C6FFF1A] flex items-center justify-center">
          <img :src="img" alt="" width="28">
        </div>
        <span>
          <p class="text-[12px] font-normal text-[#7A7A9D]">{{total}}</p>
          <p class="text-[20px] font-bold text-[#2E384D]">
            {{ totalAmount.toLocaleString() }} <span class="text-[#B2B7C1]">{{ currency }}</span>
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>  