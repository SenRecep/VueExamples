<template>
 <div v-if='progress>0' class="progress">
      <div
        class="progress-bar bg-info"
        role="progressbar"
        :style='proggressStyle'
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{progress}}/{{limit}}
      </div>
    </div>
</template>

<script>
import {eventBus} from '../main.js'
export default {
    data() {
        return {
            progress:0,
            limit:5
        }
    },
    created() {
         this.limit=eventBus.PRODUCT_LIMIT;
         eventBus.$on('updateProgress',(data)=>{
             this.progress=data;
         });
    },
    computed: {
        proggressStyle(){
            const width=this.progress/this.limit*100;
            return{
               width:width+'%'
            };
        }
    },
}
</script>