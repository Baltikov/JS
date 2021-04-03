class Button {
    _text = ''
    _callback = null

    constructor (text, callback) {
        this._text = text
        this._callback = callback
    }

    onBtnClick () {
        const callback = this._callback
        if (typeof callback === 'function') {
            callback()
        }
    }

    getTemplate (numAtr, btnAll) {
        const btn = document.createElement('button')
        if (numAtr) {
            btn.classList.add(`btn${numAtr}`)
            btn.classList.add(btnAll)
        } else {
            btn.classList.add('btn')
        }
        return btn
    }

    render (placeToRender, numAtr, btnAll) {
        if (placeToRender) {
            const btn = this.getTemplate(numAtr, btnAll)
            btn.innerHTML = this._text
            placeToRender.appendChild(btn)

            btn.addEventListener('click', () => {
                this.onBtnClick()
            })
        }
    }
}