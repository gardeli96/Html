
let email = document.querySelector('#email')
let nome = window.document.getElementById ('nome')
let tempo = document.getElementById('tempo')
let espaco = document.querySelector('#espaco')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}

// Manipulando o Tempo
function insereHTML(){
    tempo.innerHTML = "Conteúdo Inserido"
}

function tempoMsg(){
    setTimeout("insereHTML()", 3000)    // 1000 milissegundos = 1s
}

// Pegando a URL
function espacoMsg(){
    let location = window.location.href
    espaco.innerHTML = location
}

// Dark Theme
function darkTheme(){
    document.body.classList.toggle('dark-theme')
}