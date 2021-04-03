<template>
    <div :class="[$style.info]">
        <div :class="[$style.info-info]">
            <CatalogItem
                v-for="item in items"
                :key="item.atr"
                :item_data="item"
                @clicked="showAtrInCinsile"
            />
        </div>
    </div>
</template>

<script>
import CatalogItem from "./CatalogItem.vue"

export default {
    data () {
        return {
            items: [
                { atr: 11, name: "Рубашка", price: 350, img: "./img/items_1.jpg"},
                { atr: 22, name: "Носки", price: 150, img: "./img/items_2.jpg"},
                { atr: 33, name: "Пиджак", price: 550, img: "./img/items_3.jpg"}
            ]
        }
    },
    components: {
        CatalogItem,
    },
    methods: {
        showAtrInCinsile(data) {
            console.log(data)
        }
    },
}
</script>

<style module>
    .center {
        padding-left: calc(50% - 570px);
        padding-right: calc(50% - 570px);
    }
    .goodsList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }
</style>