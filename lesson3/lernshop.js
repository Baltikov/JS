
// вывести список карточек с товаром
// 
class List {
    _items =[]

    constructor(cartget) {
        this.getitem() // получаем данные из бека (getitem) в виде массива
        .then(res => {
            return res.json()
            })
        .then(data => {
            console.log(data)
            const acceptitem = data.data.map(item => { // map , массивы который получила разбивает на элементы и передае по одному
                return new Item(item, cartget)
            })
           this._items = acceptitem
           this.render()
        })
        
        

        /*const acceptitem1 = acceptitem[0] // берем один элемент массима
        new item(acceptitem1) // проускает элемент массима через класс/констркутор Item*/

    }
// список должен уметь пополнятся товарами (брать откуда-то данные)
    getitem() {
      const url = './database/items.json' // путь откуда мы получаем объект с товарами
      return fetch(url) // fetсh возварщает промис
 }
 // отображение элемента на странице, должны определится  с место где будет отображаться карточки товаров
    render () {
        this._items.forEach(Good => { // forEach , массивы который получила разбивает на элементы и передает по одному
            Good.render()
        })
        
    }
}



class Item {
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

class Cart {                    // проверка если есть
    add(item) {                 // добавить в корзину объект, создание объекта
        new CartItem (item)
        }
    }


class CartItem {
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


const cartget = new Cart() // создать обьект,  методом, который будет принимать и обрабатывать данные 
new List(cartget)