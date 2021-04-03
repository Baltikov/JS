<template>
<div>
     {{getItemData}}
</div>
 

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
   props: {
       id: Number,
   },
   computed: {
       ...mapGetters([
           'getData'
           ]),
           getItemData () {
               return this.getData(this.id)
           }
   }

}
</script>

<style>

</style>