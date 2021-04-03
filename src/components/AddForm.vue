<template>
    <div>
        <Top :msg="'ДОБАВЛЕНИЕ ТОВАРА'" />
        <div class="registration center">
            <div class="registration__contact">
                <div class="registration__contact_block">
                    <input class="form__input" type="text" placeholder="Имя" v-model="name"><br>
                    <input class="form__input" type="text" placeholder="Цена" v-model="price"><br>
                    <input class="form__input" type="text" placeholder="Описание товара" v-model="text"><br>
                    <input class="form__input" type="text" placeholder="Изображение" v-model="img"><br>
                </div>
                <Button @clicked="click">Добавить товар</Button>
            </div>
        </div>
    </div>    
</template>

<script>
import { mapActions } from 'vuex'
import Button from './Button.vue'
import Top from './Top.vue'

export default {
    components: {
        Button,
        Top
    },
    data () {
        return {
            name: '',
            price: '',
            text: '',
            img: '',
        }
    },
    methods: {
        ...mapActions([
            'loadItem'
        ]),
        click () {
            const good = { name: this.name, price: this.price, text: this.text, img: this.img, cart: "./img/basket_cart.svg" }
            console.log(good)
            this.loadItem(good)
        }
    }
}
</script>

<style>

</style>