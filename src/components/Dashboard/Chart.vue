<template>
    <section class="chart">
        <div class="container chart__container">
            <div class="bg-white rounded-lg mt-7">
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-gray-400">Homiylar va talabalar soni</h3>
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <div class="w-5 h-5 bg-blue-200 rounded-full"></div>
                            <p class="text-gray-400 font-rubik ms-2">Homiylar</p>
                        </div>
                        <div class="flex items-center ms-5">
                            <div class="w-5 h-5 bg-pink-200 rounded-full"></div>         
                            <p class="text-gray-400 font-rubik">Talabalar</p>
                        </div>
                    </div>
                    <!-- <ApexCharts></ApexCharts> -->
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import ApexCharts from 'apexcharts';
</script>