import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);  //получаем доступ к хранилищу, чтобы мы могли обращаться к нему

export default new Vuex.Store({
    state: {
        data: {},
        itemsOnPage: [],
        itemsInCart: [],
        cart: {},
        img: {},
    },
    mutations: {
        setData (state, payload) {
            state.data = { ...state.data, ...payload.newData };
            state.itemsOnPage.push(...Object.keys(payload.newData))
        },  
        addItems (state, payload) {
            state.itemsInCart.push(payload)
        },    
        addCart (state, payload) {
            state.cart = { ...state.cart, ...payload.newData };
            /*if (state.itemsInCart.length) {
                let isProductExists = false;
                state.itemsInCart.map(function (item) {
                    if (item.article === product.article) {
                        isProductExists = true;
                        item.quantity++
                    }
                });
                if (!isProductExists) {
                    state.itemsInCart.push(product);
                }
            } else {
                state.itemsInCart.push(product);
            }*/
        },
        setImg (state, payload) {
            state.img = payload.newData;
        },
        removeFromCart (state, index) {
            state.itemsInCart.splice(index, 1)
        }

    },
    getters: {
        getData: state => state.data,
        getItemsOnPage: state => state.itemsOnPage,
        getFullPrice: state => {
            const keys = state.itemsOnPage
            return keys.reduce((res, cur) => res + state.data[cur].price, 0)
        },
        getCart: state => state.cart,
        getItemsInCart: state => state.itemsInCart,
        getImg: state => state.img,
    },
    actions: {
        requestData ({ commit }, page) {
            fetch(`/itemslist/${page}`, {
                method: 'GET',
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                commit('setData', { newData: res });
            })
            .catch((err) => {
                alert('No more pages!')
            });
        },
        addItem ({commit}, data) {
            commit('addItems', data);
        },
        addToCart ({commit}, data) {
            fetch ('/cartlist', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                commit('addCart', { newData: res });
            });
        },
        loadItem ({commit}, data) {
            fetch ('/itemslist', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                commit('setData', { newData: res });
            });
        },
        addImg ({commit}, page) {
            fetch(`/itemslist/${page}`, {
                method: 'GET',
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                commit('setImg', { newData: res });
            })
        },
        deleteFromCart ({commit}, index) {
            commit('removeFromCart', index)
        }
    },
});
