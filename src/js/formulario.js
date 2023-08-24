const inputText = document.querySelectorAll('.input')
const campoObrigatorio = document.querySelectorAll('.obrigatorio')
const submit = document.getElementById('enviar')

inputText.forEach(item => {
    item.addEventListener('change', () => {
        if (item.value !== "") {
            item.classList.add('preenchido')
        } else {
            item.classList.remove('preenchido')
        }
    })
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    inputText.forEach((item, indice) => {
        if (item.value == "") {
            item.classList.add('vazio');
            campoObrigatorio[indice].classList.add('ativo')
        } else if (item.value !== "") {
            item.classList.remove('vazio')
            item.classList.add('preenchido');
            campoObrigatorio[indice].classList.remove('ativo')
        }
    })
})