
import Button from './lernbtn1'

export default class Item {
    // информация о товаре(свойства)
    _name =``
    _price = 0
    _img = 0
    _cartget = null

    constructor ({name, price, img}, cartget)  { // в конструктор прилеате объект и происходжит декомпозия на отдельные переменные
    this._name = name
    this._price = price
    this._img = img
    this._cartget =cartget
    }

    addToCart () {
        this._cartget.add({name: this._name, price: this._price, img: this._img })
        
    }
    

    // уметь отображать карточку товара
    render() {
        const placerenderItem = document.querySelector('.item')
        if (placerenderItem) {
            const cartItem = document.createElement('div')
            cartItem.innerHTML= `Товар: ${this._name} = $ ${this._price}
            <img src = "${this._img}" />
           `
           const btn = new Button ('Добавить в корзину', this.addToCart.bind(this)) // создаем кнопку используя коснтурктор у нее свое название и действия
           btn.render(cartItem) // добавляет кнопку в блок с товаром

           placerenderItem.appendChild(cartItem) // добалвляем в блок готовую карточку со всеми товарами
        }

    }

    // кнопка добавления товара для переноса в корзину
}