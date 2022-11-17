<script setup>
import { ref } from 'vue'
import Papa from 'papaparse'
import Barchart from './Barchart.vue'
    var bigFile = $ref(null);
    const ages = $ref([]);
    var dataLoaded = $ref(false);

    function previewFiles(e) 
    {
        bigFile = e.target.files[0];
    }

    function parse(){
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
            if(results.data.order_metadata_age != null){
                ages.push(results.data.order_metadata_age);
            }
            //console.log(results.data.order_metadata_age);
            //console.log("Row:", results.data);
	    },
        complete: function() {
            console.log(ages.length);
		console.log("All done!");
        dataLoaded = true;
	    }
    })
        
    }
</script>

<template>
    <h1 class="text-yellow-700">Eventix report to graph converter</h1>
    <input type="file" @change="event => previewFiles(event)"/>
    <button @click="parse">Parse</button>
<div>
    <Barchart v-if="dataLoaded" :chart-data="ages"></Barchart>
</div>
    

</template>
