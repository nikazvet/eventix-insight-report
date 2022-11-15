<template>
  <p>Graph can go below</p>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :width="400"
    :height="400"
  />
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
defineProps({
  chartData: Array,
})
var chartOptions = {responsive: true};
var chartId = "ageChart";
console.log("processed");
</script>