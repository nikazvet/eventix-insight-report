<template>
        <Pie
        v-if="showGraph"
    :height="80"
    :chart-options="chartOptions"
    :chart-data="{
        labels: gender.map(row => row.Gender),
        datasets: [
          {
            label: 'Gender',
            data: gender.map(row => row.GenderCount)
          }
        ]}"
        ></Pie>
  </template>
  
<script setup>
  import Stats from './stats'
  import Pie from './pieChart.js'

  const props = defineProps({
    chartData: Array,
  })
  
  
  const showGraph = $ref(false);

  const gender = $ref()

  function RenderGraph(){
    gender = Stats.gender(props.chartData)
    showGraph = true;
  }
  RenderGraph()
  </script>