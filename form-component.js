class CustomForm extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: 'open'})

        const form = document.createElement('form')

        const nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.placeholder = 'Имя'

        const emailInput = document.createElement('input')
        emailInput.type = 'email'
        emailInput.placeholder = 'Email'

        const ageInput = document.createElement('input')
        ageInput.type = 'age'
        ageInput.placeholder = 'Возраст'

        const telInput = document.createElement('input')
        telInput.type = 'tel'
        telInput.placeholder = 'Номер телефона'

        const sumbitButton = document.createElement('button')
        sumbitButton.textContent = 'Отправить'
        
        const sumbitButton1 = document.createElement('button')
        sumbitButton1.textContent = 'Войти'


        form.style.width = '500px'
        form.style.padding = '20px'
        form.style.border = '1px solid #ccc'
        form.style.borderRadius = '5px'
        form.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'

        nameInput.style.display = 'block'
        nameInput.style.width = '90%'
        nameInput.style.margin = '0 10px 10px 10px'
        nameInput.style.padding = '10px'

        emailInput.style.display = 'block'
        emailInput.style.width = '90%'
        emailInput.style.margin = '0 10px 10px 10px'
        emailInput.style.padding = '10px'

        ageInput.style.display = 'block'
        ageInput.style.width = '90%'
        ageInput.style.margin = '0 10px 10px 10px'
        ageInput.style.padding = '10px'

        telInput.style.display = 'block'
        telInput.style.width = '90%'
        telInput.style.margin = '0 10px 10px 10px'
        telInput.style.padding = '10px'

        sumbitButton.style.backgroundColor = '#007bff'
        sumbitButton.style.color = '#fff'
        sumbitButton.style.border = 'none'
        sumbitButton.style.padding = '10px 20px'
        sumbitButton.style.margin = '5px 10px 10px 0'
        sumbitButton.style.cursor = 'pointer'

        sumbitButton1.style.backgroundColor = '#007bff'
        sumbitButton1.style.color = '#fff'
        sumbitButton1.style.border = 'none'
        sumbitButton1.style.padding = '10px 20px'
        sumbitButton1.style.margin = '5px 0 0 10px'
        sumbitButton1.style.cursor = 'pointer'

        form.appendChild(nameInput)
        form.appendChild(emailInput)
        form.appendChild(ageInput)
        form.appendChild(telInput)
        form.appendChild(sumbitButton)
        form.appendChild(sumbitButton1)

        shadow.appendChild(form)

    
    }
}

customElements.define('custom-form',CustomForm)