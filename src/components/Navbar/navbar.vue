<script setup>
  import Cbutton from '../Button/Cbutton.vue';
</script>

<template>
  <div class=" bg-white shadow-blurs">
      <div class="containerMain h-[64px] flex justify-between items-center ">
        <RouterLink to="/">
          <img src="../../../public/navbar/Logo.svg" alt="">
        </RouterLink>
     
          <div class="flex gap-11">
            <Cbutton  variant="user" title="Shoxrux">
              <template #suffix>
                  <span class="icon-user text-[24px] text-white bg-[#00AE69] px-1 pt-2 rounded"></span>
              </template>
            </Cbutton>
            <button>
                <span class="icon-log-out text-[32px] text-[#B1B1B8]"></span>
            </button>
          </div>
      </div>
  </div>
</template>

<style scoped></style>