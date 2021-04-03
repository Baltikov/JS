<template>
    <div>
        <div class="header center">
            <router-link :to="{ name: 'catalog' }">
                <img
                    class="header__left header__account"
                    :src=" getImg.logo "
                    alt="logo">
            </router-link>
            <div class="header__right">
                <router-link :to="{ name: 'form' }">
                    <img
                        class="header__account"
                        :src=" getImg.account "
                        alt="img">
                </router-link>
                <div class="catalog_text">
                    <router-link :to="{ name: 'cart' }">
                    <img
                        :src=" getImg.cart "
                        alt="img">
                    </router-link>
                    {{ getItemsInCart.length }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions} from 'vuex'

export default {
    data () {
        return {
            
        }
    },
    methods: {
        ...mapActions([
            'addImg'
        ])
    },
    computed: {
        ...mapGetters([
            'getImg',
            'getItemsInCart'
        ])
    },
    created () {
        this.addImg(0)
    },
}
</script>

<style module>
    
</style>