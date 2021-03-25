<template>
  <div :class="[$style.item]">
  <img :src=" './img/' + product_data.image " alt="image">
  
      <h2 class="CtalogItem__name">{{product_data.name}}</h2>
      <h3 class="CtalogItem__price">{{product_data.price}}</h3>
      <button class="CtalogItem__add" @click="GetToparent">Add to Cart </button>
  </div>
</template>

<script>
export default {
   props: {
       product_data: {
           type: Object,
           default() {
               return{}
           }
       }
   },
   data () {
       return {}
   },
   methods: {
       GetToparent() {
           this.$emit( 'GetToparent', this.product_data.article)
       }
   }
}
</script>

<style module>
.item {
    width: 400px;
    height: 270px;
    display: flex;
    box-shadow: 0 0 8px 0;
    border: solid 2px blue;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 15px;
}
</style>

