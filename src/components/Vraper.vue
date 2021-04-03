<template>
    <div :class="[$style.vraper]">
        <Catalog1 />


    </div>
</template>

<script>
import Catalog1 from './Catalog1.vue'
import CatalogItem from './CatalogItem.vue'
import Cart from './Cart.vue'

export default {
    components: {
        Catalog1,
        CatalogItem,
        Cart,
    },
    props: {},// то что прилетает в комнент из родителя -Неперсональные данные компонента-
    data() {
        return { // -Персональные данные компонента-

        } 
    },
    computed:{},
    methods: {}, //скрытия показа элементов, клики - дейтсвия пользователей
    watch: {},
    mounted () {
        console.log('hhelo')
    }
}
</script>

<style  module>
.vraper {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
}

</style>