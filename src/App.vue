<template>
    <div>
        <div :class="[$style.content]">
            <Header />
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
    data () {
        return {
            
        }
    },
    components: {
        Header,
        Footer
    },
    methods: {
        
    },
}
</script>

<style module>
    .content {
        min-height: calc(100vh - 80px);
    }
</style>