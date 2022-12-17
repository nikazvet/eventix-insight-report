<template>
        <Pie
        v-if="showGraph"
    :chart-data="{
        labels: devices.map(row => row.Device),
        datasets: [
          {
            label: 'Devices',
            data: devices.map(row => row.DeviceCount),
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

  const devices = $ref()

  function RenderGraph(){
    devices = Stats.devices(props.chartData)
    showGraph = true;
  }
  RenderGraph()
  </script>