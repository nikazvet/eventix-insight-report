<template>
    <Bar
    v-if="showGraph"
:height="80"
:chart-options="chartOptions"
:chart-data="{
    labels: tickets.map(row => row.Ticket),
    datasets: [
      {
        label: 'Top ten tickets',
        data: tickets.map(row => row.TicketCount)
      }
    ]}"
    ></Bar>
</template>

<script setup>
import Stats from './stats'
import Bar from './barChart.js'

const props = defineProps({
chartData: Array,
})


const showGraph = $ref(false);

const tickets = $ref()

function RenderGraph(){
tickets = Stats.toptickects(props.chartData)
showGraph = true;
}
RenderGraph()
</script>