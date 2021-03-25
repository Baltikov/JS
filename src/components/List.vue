<template>
  <div>
      {{ getData }}
      {{ getFullPrice}}
      {{ getitemsOnPage }}
      lol
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    methods: {
       // ...mapMutations([
        //    'SetData'])  
        ...mapActions ([
            'requestData'
        ])

          
    },
    computed: {
        ...mapGetters([
            'getData',
            'getFullPrice',
            'getitemsOnPage',
        ])
    },

    created () {
        this.requestData(1)
    }
    
}
</script>

<style>

</style>