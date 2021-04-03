import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router.js'

new Vue({
    el: 'main',
    template: '<App />',
    components: {
        App,
    },
    store,
    router
}).$mount()