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
            data: gender.map(row => row.GenderCount),
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
            ],
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