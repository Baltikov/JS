
export default class CartItem {
    _name =``
    _price = 0
    _img = 0
    _cartget = null

    constructor ({name, price, img})  {
    this._name = name
    this._price = price
    this._img = img
    this.render()
    }

    render() {
        const placerenderCart = document.querySelector('.Cart')
        if (placerenderCart) {
            const cartItemCart = document.createElement('div')
            cartItemCart.innerHTML= `Товар: ${this._name} = $ ${this._price}
            <img src = "${this._img}" />
           `
           placerenderCart.appendChild(cartItemCart) // добалвляем в блок готовую карточку со всеми товарами
        }

    }
}