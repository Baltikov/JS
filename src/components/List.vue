<template>
    <div>
        <Top :msg="'КАТАЛОГ ТОВАРОВ'" />
        <div class="products center">
            <div class="feature_items">
                <Item
                    v-for="id in getItemsOnPage"
                    :id="id"
                    :key="id"
                />
            </div>
            <Button @clicked="click" :class="[$style.mb]">
                Показать еще
            </Button>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions} from 'vuex'
import Item from './Item.vue'
import Button from './Button.vue'
import Top from './Top.vue'

export default {
    data () {
        return {
            page: 1,
        }
    },
    components: {
        Item,
        Button,
        Top
    },
    methods: {
        ...mapActions([
            'requestData'
        ]),
        click () {
            this.page++
            this.requestData(this.page)
        }
    },
    computed: {
        ...mapGetters([
            'getItemsOnPage',
            'getFullPrice',
            'getData'
        ])
    },
    created () {
        this.requestData(this.page)
    },
}
</script>

<style module>
    .mb {
        margin-bottom: 50px;
    }
</style>