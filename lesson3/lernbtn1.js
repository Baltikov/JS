


// если подлкючить на страницу будет рисовать на ней кнопку и принажатии на кнопку я могу произвести какое-то действие
class Button {
    // в кнопке должен быть текст
    _text=''
    _callback = null
    constructor (text, callback) { //  callback что будет запускатся по нажатию
        this._text = text;
        this._callback = callback
        

    }

    // кнопка должна уметь отобразится на странице
    // отображение элемента на странице, должны определится  с место где будет отображаться кнопка
    render (Placetorender) {
        
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
         const callback = this._callback
         if (typeof callback === 'function') {
            callback()
         }
     }
    
    }

 // Во второй версии мы добавляем новые события по клику не тольок alert. Placetorender будет принимать извне