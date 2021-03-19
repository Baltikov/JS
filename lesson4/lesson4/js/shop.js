class List {
    _items = []
    _CartInstance = null
    _page = 1

    constructor (CartInstance) {
        this._CartInstance = CartInstance
        this.fetchGoods()
    }

    fetchGoods () {
        const url = `./database/items${this._page}.json`;
        return fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                const goods = data.data.map(item => {
                    return new GoodItem (item, this._CartInstance);
                })
                this._items = [...this._items, ...goods];
                this.render();
            })
            .catch((err) => {
                alert('No more pages!')
            });
    }

    getMoreGoods () {
        this._page++
        this.fetchGoods()
    }

    render () {
        const placeToRender = document.querySelector('.goods-list')
        if (placeToRender) {
            placeToRender.innerHTML = ''
            this._items.forEach(Good => {
                Good.render(placeToRender)
            });
        };

        const placeToRenderBtn = document.querySelector('.goods-more')
        const blockBtn = document.querySelector('.goodMoreBtn')
        if (placeToRenderBtn) {
            if (!blockBtn) {
                const block = document.createElement('div')
                block.classList.add('goodMoreBtn')
                let btnGoodsMore = new Button ('Показать еще', this.getMoreGoods.bind(this))
                btnGoodsMore.render(block)
            
                placeToRenderBtn.appendChild(block)
            }
        }
    }
}

class GoodItem {
    _atr = 0
    _name = ''
    _price = 0
    _img = 0
    _CartInstance = null

    constructor ({ atr, name, price, img }, CartInstance) {
        this._atr = atr
        this._name = name
        this._price = price
        this._img = img
        this._CartInstance = CartInstance
    }
    
    addToCart () {
        this._CartInstance.add({ atr: this._atr, name: this._name, price: this._price, img: this._img, num: 1 })
    }

    render (placeToRender) {
        const block = document.createElement('div')
        block.classList.add('goodItem')
        block.innerHTML = `
        <img src="${this._img}"></img>
        <p>Товар: ${this._name} </br>
        Цена: ${this._price}</p>
        `
        const btn = new Button ('Добавить в корзину', this.addToCart.bind(this))
        btn.render(block)
        placeToRender.appendChild(block)
    }
}

class Cart {
    _sum = 0

    add (item) {
        try {
            let itemsClass = document.querySelector(`.goodCart${item.atr}`)
            if (itemsClass) {
                let form = +(document.getElementById(`id${item.atr}`).value)
                item = { atr: item.atr, name: item.name, price: item.price, img: item.img, num: (item.num + form) }
                new CartItem(item)
                itemsClass.remove()
                this.getTotalSum(item)
            } else {
                new CartItem(item)
                this.getTotalSum(item)
            }
        } catch {
            new CartItem(item)
            this.getTotalSum(item)
        }
    }

    getTotalSum (item) {
        const totalSum = document.getElementById('num')
        this._sum = +(totalSum.value) + item.price
        totalSum.value = this._sum
    }
}

class CartItem {
    _atr = 0
    _name = ''
    _price = 0
    _img = 0
    _num = 0

    constructor ({ atr, name, price, img, num }) {
        this._atr = atr
        this._name = name
        this._price = price
        this._img = img
        this._num = num
        this.render()
    }

    sendForm () {
        const form = document.querySelector('.form-cart')
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
            });
        }
    }

    addToItem () {
        let itemValue = document.getElementById(`id${this._atr}`)
        let itemSum = document.getElementById(`num${this._atr}`)
        itemValue.value = +(itemValue.value) + 1
        itemSum.value = this._price * +(itemValue.value)

        let totalSum = document.getElementById('num')
        totalSum.value = +(totalSum.value) + this._price

        this.sendForm()
    }

    delToItem () {
        const itemValue = document.getElementById(`id${this._atr}`)
        const itemSum = document.getElementById(`num${this._atr}`)
        const totalSum = document.getElementById('num')
        if (+(itemValue.value) > 1) {
            itemValue.value = +(itemValue.value) - 1
            itemSum.value = this._price * +(itemValue.value)

            let totalSum = document.getElementById('num')
            totalSum.value = +(totalSum.value) - this._price
        }

        this.sendForm()
    }

    deleteAll () {
        const block = document.querySelector(`.goodCart${this._atr}`)
        const itemSum = document.getElementById(`num${this._atr}`)
        let totalSum = document.getElementById('num')
        totalSum.value = +(totalSum.value) - +(itemSum.value)

        block.remove()

        this.sendForm()
    }

    render () {
        const placeToRender = document.querySelector('.goods-cart')
        if (placeToRender) {
            const block = document.createElement('div')
            block.classList.add('good')
            block.classList.add(`goodCart${this._atr}`)
            block.innerHTML = `
            <img src="${this._img}"></img>
            <form class="form-cart"> Товар: ${this._name} </br>
            Цена: ${this._price} </br>
            Количество: <input type="number" id="id${this._atr}" min="0" max="99" value="${this._num}" readonly></input> </br>
            Сумма: <input class="numAtr" type="number" id="num${this._atr}" min="0" value="${this._price * this._num}" readonly></input>
            </form>
            `

            let btnAdd = new Button ('+', this.addToItem.bind(this))
            btnAdd.render(block, `Add${this._atr}`, 'btnItem')
        
            let btnDel = new Button ('-', this.delToItem.bind(this))
            btnDel.render(block, `Del${this._atr}`, 'btnItem')
        
            let btnDelAll = new Button ('Удалить', this.deleteAll.bind(this))
            btnDelAll.render(block, `DelAll${this._atr}`, 'btnDel')

            placeToRender.appendChild(block)
        }
    }
}

const CartInstance = new Cart()
new List(CartInstance)