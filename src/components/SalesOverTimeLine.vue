<template>
    <Line
    v-if="showGraph"
:height="100"
:chart-options="chartOptions"
:chart-data="{
    labels: tickets.map(row => row.Ticket),
    datasets: [
      {
        label: 'Sales over time',
        backgroundColor: '#006aff4d',
        data: tickets.map(row => row.TicketCount)
      }
    ]}"
    ></Line>
</template>

<script setup>
import Stats from './stats'
import Line from './lineChart.js'

const props = defineProps({
chartData: Array,
})


const showGraph = $ref(false);

const tickets = $ref()

function RenderGraph(){
//tickets = Stats.salesovertime(props.chartData);
tickets = [
    {Ticket: "January", TicketCount: 299},
    {Ticket: "February", TicketCount: 1785},
    {Ticket: "March", TicketCount: 2672},
    {Ticket: "April", TicketCount: 3740},
    {Ticket: "May", TicketCount: 4962},
    {Ticket: "June", TicketCount: 8148},
]
showGraph = true;
}
RenderGraph()
</script>