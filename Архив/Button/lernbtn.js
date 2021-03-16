
// наследование

/*class User {
    _name1 =''
    _age = null
    _heing = null

    constructor (name1,age, heing) {
        this._name1 = name1
        this._age = age
        this._heing = heing
        alert(`hello ${this._name1} `)
    }
  
        
}

class NewUser extends User {
    _weight = null

    constructor(name1,age,heing, weight) {
        super(name1,age,heing)
        this._weight = weight

    }
}

let infoUser = new User ('Alex', 31, 179 )
console.log(infoUser)

let NewUs = new NewUser ('bobon', 30, 188, 86)

console.log(NewUs)*/


// демонтрация работы querySelector
//const search = document.querySelector(`.item`)
//console.log(search)



// если подлкючить на страницу будет рисовать на ней кнопку и принажатии на кнопку я могу произвести какое-то действие
class Button {
    // в кнопке должен быть текст
    _text=''
    constructor (text) {
        this._text = text;
        this.render()

    }

    // кнопка должна уметь отобразится на странице
    // отображение элемента на странице, должны определится  с место где будет отображаться кнопка
    render () {
        const Placetorender = document.querySelector (`.Cart__placeBtn`) // получает достук к элементу где есть класс/(header)
            if (Placetorender) {
                const btn = this.createBtn()
                btn.innerHTML = this._text
                Placetorender.appendChild(btn)
                btn.addEventListener ('click', ()=> {
                    this.oneBtnClick()
                })
            }
            
        }

    //создание элемента кнопки с классом btn
     createBtn () {
         const btn = document.createElement('button')
         btn.classList.add('btn')

        return btn //возращаем созданный элемент туда, в тот объект, который вызвл функцию
     }

     // Логика работы кнопки, что будет ей на нее нажать
     oneBtnClick () {
         alert('Хороший выбор')
     }
    
    }

 const CreateBTN = new Button("Добавить товар")
 const CreateBTN1 = new Button("Добавить радость")
 const CreateBTN2 = new Button("Добавить позитива близким людям")


