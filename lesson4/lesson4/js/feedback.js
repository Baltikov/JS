class feedback {
    _user = {}

    constructor() {
        this.render()
    }

    sendData() {
        const form = document.querySelector('.user_heading')
        const inputName = document.querySelector('#name')
        const inputNumber = document.querySelector('#number')
        const inputEmail = document.querySelector('#email')

        let errors = form.querySelectorAll('.error');
        for (let i = 0; i < errors.length; i++) {
            errors[i].remove()
        };

        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
            });
        }

        const reName = /^[A-Za-zА-Яа-яЁё\s]{2,}$/
        if (reName.test(inputName.value) == false) {
            inputName.insertAdjacentHTML("beforebegin", "<span class='error'>Неверный ввод!</span>")
        } else {
            this._user.name = inputName.value;
        }
        const reNumber = /^[+]7[\(]\d{3}[\)]\d{3}[\-]\d{4}$/
        if (reNumber.test(inputNumber.value) == false) {
            inputNumber.insertAdjacentHTML("beforebegin", "<span class='error'>Неверный ввод!</span>")
        } else {
            this._user.phone = inputNumber.value;
        }
        const reEmail = /^([A-Za-z0-9_\.\-]+)@([A-Za-z0-9_\.\-]+)\.([A-Za-z]{2,6})$/
        if (reEmail.test(inputEmail.value) == false) {
            inputEmail.insertAdjacentHTML("beforebegin", "<span class='error'>Неверный ввод!</span>")
        } else {
            this._user.email = inputEmail.value;
        }
        
        console.log('Данные введены верно:', this._user)
    }
    
    render () {
        const placeToRender = document.querySelector('.info')
        if (placeToRender) {
            const block = document.createElement('div')
            block.classList.add('user_form')

            block.innerHTML = `
            <h4 class="info_heading">ФОРМА ОБРАТНОЙ СВЯЗИ</h4>
            <form class="user_heading">
                Имя <br>
                <input placeholder="Имя" class="user_text" id="name" required><br><br>
                Телефон <br>
                <input placeholder="+7(000)000-0000" class="user_text" id="number" required><br><br>
                Email <br>
                <input placeholder="mymail@mail.ru" class="user_text" id="email" required><br><br>
            </form>
            `

            placeToRender.appendChild(block)
        }
        const placeToForm = document.querySelector('.user_heading')
        if (placeToForm) {
            const btn = new Button ('ОТПРАВИТЬ', this.sendData.bind(this))
            btn.render(placeToForm, 'submit', 'submit')
        }
    }
}

new feedback()