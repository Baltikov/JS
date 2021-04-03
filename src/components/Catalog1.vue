<template>
    <div :class="[$style.Catalog1]">
        <CatalogItem
            v-for="product in products"
            :key="product.article"
            v-bind:product_data="product"
            @article1="ShowArticle"
        />
    </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'

export default {
    components: {
        CatalogItem,
    },
    props: {},// то что прилетает в комнент из родителя -Неперсональные данные компонента-
    data() {
        return { // -Персональные данные компонента-
            products: [
                {
                "name": "shirt",
                "price": 200,
                "article": 11,
                "image": "po.jpg",
                },
                {
                "name": "sgo",
                "price": 300,
                "article": 12,
                "image": "2.jpg",
                },
                {
                "name": "hat",
                "price": 500,
                "article": 13,
                "image": "3.jpg",
                },
            ]
        } 
    },
    computed:{},
    methods: {//скрытия показа элементов, клики - дейтсвия пользователей
        ShowArticle(data){
            alert(data)
        }
    }, 
    watch: {},
}


</script>

<style module>
.Catalog1{
    display: flex;
    justify-content: space-between;

}
</style>