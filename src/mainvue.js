import Vue from 'vue';
import App from './App.vue';
import store from './store/index1.js';

//import { component } from 'vue/types/umd'

new Vue({
    el: 'main', // указываем какой элемент используем для синтаксисиса Vue
    template: '<App />',   // указываем, что имммено будет в Vue
    components: {
        App,

    },
    store,
})
