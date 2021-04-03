<template>
    <div class="items items_mb">
        <a href="./product.html">
            <img class="items_img" :src=" getItemData.img " alt="img">
        </a>
        <button class="basket_cart" @click="addItemToCart">
            <img :src=" getItemData.cart " alt="cart">
            Добавить в корзину
        </button>
        <div class="items_content">
            <a href="./product.html" class="items_heading">
                <h3> {{ getItemData.name }} </h3>
            </a>
            <p class="items_text"> {{ getItemData.text }} </p>
            <p class="items_price"> ₽ {{ getItemData.price }} </p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    props: {
        id: String
    },
    computed: {
        ...mapGetters([
            'getData'
        ]),
        getItemData () {
            return this.getData[this.id]
        }
    },
    methods: {
        ...mapActions([
            'addToCart',
            'addItem'
        ]),
        addItemToCart () {
            this.addItem(this.id)
            this.addToCart(this.getItemData)
        }
    }
}
</script>

<style module>
    
</style>