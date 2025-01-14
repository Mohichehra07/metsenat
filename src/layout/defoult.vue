<script setup>
import { RouterView } from "vue-router";
import Navbar from '../components/Navbar/navbar.vue';
import Header from "../components/Header/header.vue";

</script>
<template>
  <div class="wrapper">
    <Navbar />
    <Header/> 
    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
  </main>
  </div>
</template>

<style scoped>

</style>