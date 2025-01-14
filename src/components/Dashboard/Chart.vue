<template>
    <section class="chart">
        <div class="container chart__container">
            <div class="bg-white rounded-lg mt-7">
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-gray-200">Homiylar va talabalar soni</h3>
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <img src="" alt="ellipse-blue">
                            <p class="font-rubik text-gra-300 ms-2">Homiylar</p>
                        </div>
                        <div class="flex items-center ms-5">
                            <img src="" alt="ellipse-pink">
                            <p class="text-gray-200 font-rubik">Talabalar</p>
                        </div>
                    </div>
                    <ApexCharts></ApexCharts>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import ApexCharts from 'apexcharts';
</script>