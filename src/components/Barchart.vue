<template>
  <br/>
  <h1>Set settings for graph</h1>
  From
  <input type="number" v-model="minAge"/>
  To
  <input type="number" v-model="maxAge"/>
  <button @click="RenderGraph">Go!</button>
  <p>Graph can go below</p>
  <div class="h-12 w-12">
  <Bar 
    v-if="showGraph"
    :height="60"
    :width="100"
    :chart-options="chartOptions"
    :chart-data="{
        labels: binnedChartData.map(row => row.age),
        datasets: [
          {
            label: 'Ages',
            data: binnedChartData.map(row => row.count)
          }
        ]}"
  />
  </div>
  
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

function Colorize(opaque) 
    {
  return (ctx) => {
    const v = ctx.parsed.y;
    const c = v < -50 ? '#D60000'
      : v < 20 ? '#F46300'
      : v < 276 ? '#0358B6'
      : '#44DE28';

    return opaque ? c : c /*Utils.transparentize(c, 1 - Math.abs(v / 150))*/;
  };
}
var binnedChartData = $ref(new Array());
const minAge = $ref(6);
const maxAge = $ref(100);
var showGraph = $ref(false);
var chartOptions = {
  responsive: true, 
  elements: {
      bar: {
        backgroundColor: Colorize(false),
        borderWidth: 2
      }
    }};
console.log("processed");
const props = defineProps({
  chartData: Array,
})
function RenderGraph(){
  CreateBins();
  showGraph = true;
}

function CreateBins(){
  binnedChartData = new Array((maxAge - minAge) + 1);
  for (let index = 0; index < ((maxAge - minAge) + 1); index++) {
    binnedChartData[(index - minAge) + 1] = ({age: index + minAge, count: 0});
  }
  props.chartData.forEach(element => {
    if(element != null){
      if(element >= minAge && element < maxAge){
        //console.log(element);
        binnedChartData[(element - minAge)].count++;
      }
    }
    
  });
  console.log("Data binned");
}
</script>