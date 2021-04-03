import Vue from 'vue'
import Router from 'vue-router'

import List from "./components/List.vue"
import Cart from "./components/Cart.vue"
import AddForm from './components/AddForm.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: List,
            props: true
        },
        {
            path: '/Cart',
            name: 'cart',
            component: Cart,
            props: true
        },
        {
            path: '/AddForm',
            name: 'form',
            component: AddForm,
            props: true
        },
    ]
})

export default router;