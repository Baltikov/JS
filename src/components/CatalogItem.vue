<template>
    <div :class="[$style.goodItem]">
        <img :src=" item_data.img " alt="img">
        <p>Товар: {{ item_data.name }}</p>
        <p>Цена: {{ item_data.price }} Р</p>
        <button @click="addToCart">Добавить в корзину</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props: {
        item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        
    },
    methods: {
        addToCart() {
            this.$emit('clicked', this.item_data.atr)
        }
    }
}
</script>

<style module>
    .goodItem {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        margin-bottom: 20px;
        text-align: center;
        padding-bottom: 15px;
    }
</style>