class List {
    _items = []

    constructor () {
        let goods = this.fetchGoods ()
        goods = goods.map(item => {
            return new GoodItem (item)
        })
        this._items = goods
        console.log(this._items)
        this.render()
    }


    fetchGoods () {
        return [
            {name: 'Shirt', price: 150.},
            {name: 'Socks', price: 150},
            {name: 'Jacket', price: 15},
        ]
    }

    render () {
        this._items.forEach(Good => {
            Good.render()
        })
    }
}

class GoodItem {
    _name =''
    _price = 0

    constructor ({name, price}) {
        this._name = name
        this._price = price
    }

    addtoCart () {
        console.log('Added')
    }

    render () {
        // находим место куда рендерить
        const placeToRender = document.querySelector('.goods-list')
        if (placeToRender) {
          // создаем блок, в который помещаем информацию о товаре
          const block = document.createElement('div')
          block.innerHTML = `
          Товар: ${this._name} = ${this._price}
          `
    
          const btn = new button ('Добавить в корзину', this.addtoCart)
          btn.render(block)
          // помещаем созданный блок на страницу
          placeToRender.appendChild(block)
        }
}}

new List()
