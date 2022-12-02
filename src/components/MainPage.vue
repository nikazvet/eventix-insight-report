<script setup>
import { ref } from 'vue'
import Papa from 'papaparse'
import LoadingAnimation from './LoadingAnimation.vue'
import AgeHistogram from './AgeHistogram.vue';
    var bigFile = $ref(null);
    const ages = $ref([]);
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
        /*transformHeader: function(header, index){
            header = header.replaceAll(".", "-");
            return header;
        },*/

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
    <h1 class="text-blue-700">Eventix report to graph converter</h1>
    <input type="file" @change="event => previewFiles(event)"/>
<div>
    <AgeHistogram v-if="dataLoaded" :chart-data="data"></AgeHistogram>
    <LoadingAnimation v-if="dataLoading"></LoadingAnimation>
</div>
    

</template>
