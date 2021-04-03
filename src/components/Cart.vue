<template>
    <div>
        <Top :msg="'КОРЗИНА ТОВАРОВ'" />
        <p v-if="!getItemsInCart.length" class="footer_text center">Товары не добавлены</p>
        <div class="cart center">
            <div class="cart__product">
                <CartItem
                    v-for="(item, index) in getItemsInCart"
                    :item="item"
                    :key="item"
                    @deleteItem="deleteItem(index)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import CartItem from './CartItem.vue'
import Top from './Top.vue'

export default {
    components: {
        CartItem,
        Top
    },
    computed: {
        ...mapGetters([
            'getItemsInCart',
        ])
    },
    methods: {
        ...mapActions([
            'deleteFromCart'
        ]),
        deleteItem (index) {
            this.deleteFromCart(index)
        }
    },
}
</script>

<style module>
    
</style>