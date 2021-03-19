
import Item from './item.js'


export default class List {
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