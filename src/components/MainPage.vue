<script setup>
import Papa from 'papaparse'
import LoadingAnimation from './LoadingAnimation.vue'
import AgeHistogram from './AgeHistogram.vue';
import GenderPieChart from './GenderPieChart.vue';
import TopTicketsBar from './TopTicketsBar.vue';
import SalesOverTimeLine from './SalesOverTimeLine.vue';
    var bigFile = $ref(null);
    const data = $ref([]);
    var dataLoading = $ref(false);
    var dataLoaded = $ref(false);

    function previewFiles(e) 
    {
        bigFile = e.target.files[0];
        if(bigFile != null){
            parse();
        }
    }

    function parse(){
        dataLoading = true;
        // Stream big file in worker thread
        Papa.parse(bigFile, {
        worker: true,
        dynamicTyping: true,
        header: true,

        step: function(results) {
            data.push(results.data);
	    },
        complete: function() {
        console.log("Data parsed. Total results: ", data.length);
        dataLoading = false;
        dataLoaded = true;
	    }
    })
        
    }
</script>

<template>
    <div v-show="!dataLoaded">
        <h1 class="text-blue-700">Eventix report to graph converter</h1>
        <input type="file" @change="event => previewFiles(event)"/>
    </div>
<div>
    <AgeHistogram v-if="dataLoaded" :chart-data="data"></AgeHistogram>
    <GenderPieChart v-if="dataLoaded" :chart-data="data"></GenderPieChart>
    <TopTicketsBar v-if="dataLoaded" :chart-data="data"></TopTicketsBar>
    <LoadingAnimation v-if="dataLoading"></LoadingAnimation>
    <SalesOverTimeLine v-if="dataLoaded" :chart-data="data"></SalesOverTimeLine>
</div>
    

</template>
