<template>
  <br/>
  <h1>Set settings for graph</h1>
  <input type="number" v-model="minAge"/>
  <input type="number" v-model="maxAge"/>
  <input type="number" v-model="binWidth"/>
  <button @click="RenderGraph">Go!</button>
  <p>Graph can go below</p>
  <Bar v-if="showGraph"
    :chart-options="chartOptions"
    :chart-data="binnedChartData"
    :chart-id="chartId"
    :width="400"
    :height="400"
  />
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
defineProps({
  chartData: Array,
})
var binnableData = ref(chartData);
var minAge = $ref(6);
var maxAge = $ref(100);
var binWidth = $ref(1);
var showGraph = $ref(false);
var binnedChartData = $ref(binnableData);
var chartOptions = {responsive: true};
var chartId = "ageChart";
console.log("processed");

function RenderGraph(){
  CreateBins(binnableData);
  showGraph = true;
}

function CreateBins(chartData){
  binnedChartData = [];
  for (let index = 0; index < ((maxAge - minAge)/binWidth + 1); index++) {
    binnedChartData.push({age: index + minAge, count: 0});
  }
  chartData.forEach(element => {
    if(element != null){
      if(element >= minAge || element < maxAge){
        binnedChartData[element - minAge].count++;
      }
    }
  });
}
</script>