<template>
  <br/>
  <h2>Set settings for graph</h2>
  From
  <input type="number" v-model="minAge" @change="RenderGraph"/>
  To
  <input type="number" v-model="maxAge" @change="RenderGraph"/>
  <p>Age graph</p>
  <div>
  <Bar 
    v-if="showGraph"
    :height="80"
    :chart-options="chartOptions"
    :chart-data="{
        labels: ages.map(row => row.Age),
        datasets: [
          {
            label: 'Ages',
            data: ages.map(row => row.AgeCount)
          }
        ]}"
  />
  </div>
  <p v-if="showGraph">Your target demographic is {{audience.min}} - {{audience.max}} years old</p>
  
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { ref } from 'vue'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import Stats from './stats'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

function Colorize(opaque) 
    {
  return (ctx) => {
    const v = ctx.parsed.y;
    const c = v < -50 ? '#D60000'
      : v < 92 ? '#FDD900'
      : v < 276 ? '#44DE28'
      : '#006AFF';

    return opaque ? c : c /*Utils.transparentize(c, 1 - Math.abs(v / 150))*/;
  };
}
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
const props = defineProps({
  chartData: Array,
})
const ages = $ref();
const audience = $ref({});
function RenderGraph(){
  showGraph = false;
  ages = Stats.histogram(props.chartData, minAge, maxAge)
  var Audience = Stats.coredemograhic(props.chartData, 6, 100);
  audience = Audience
  showGraph = true;
}
RenderGraph()
</script>