<script setup>
  import summaItem from './summa-item.vue';
  import client from '../../api/api'
  import { onMounted,ref } from 'vue'
  import Chart from '../Dashboard/Chart.vue';

  let dashboardResult = ref({})
  const GetPay = async () => {
    try {
      const response = await client.get('dashboard/')
      dashboardResult.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  onMounted(() => {
    GetPay()
  })
</script>

<template>
  <div class="flex justify-center gap-7">
    <summaItem :totalAmount="`${dashboardResult.total_paid}`" currency="UZS" 
      total="Jami to‘langan summa" />


    <summaItem :totalAmount="`${dashboardResult.total_paid}`" currency="UZS" 
      total="Jami to‘langan summa" />


    <summaItem :totalAmount="`${dashboardResult.total_paid}`" currency="UZS" 
      total="Jami to‘langan summa" />

  </div>
  <div>
    <Chart  />
  </div>
  
</template>

<style scoped></style>