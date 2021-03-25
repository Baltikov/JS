import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex) // сообщаем, что будем использовать в проекте библиотеку Vuex ([хранилище])
export default new Vuex.Store( //Отправляем данные внутрь констркутора
    {
        state: {
            data: {},
            itemsOnPage: [], //Id товаров хранить
        },
        mutations: {
            SetData (state,payload) {
                state.data = payload.newData;
                state.itemsOnPage = Object.keys(payload.newData)
        },
        getters: {                                                          // состояние вывод в консоль данных ,всегда должны что-то возвращать
            getData: state => state.data,
            getitemsOnPage: state => state.itemsOnPage,
            getFullPrice: state => {
                const keys = state.itemsOnPage;
                return keys.reduce((res,cur) => res + state.data[cur].price, 0);
            }
        },
        actions: { //Получение данных с backend
            requestData({ commit }, page) {
                fetch(`./items${page}.json`)
                    .then (res => {
                        return res.json();
                    })
                    .then(res => {
                        commit('SetData',{newData: res});
                    });
            }
        }, 
    }
})