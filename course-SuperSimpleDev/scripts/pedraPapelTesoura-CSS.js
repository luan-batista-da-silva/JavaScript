/*
    Steps
        When we click a button:
            1. COmputer randomly seletcs a move
            2. Compare the moves to get the result
            3. Display the result in an alert 
*/

let score = JSON.parse(localStorage.getItem('score')) || {
    vitorias: 0,
    derrotas: 0,
    empates: 0
}

let moves = {
    compMov: '',
    playerMov: ''
}

let resul = {
    resultado: ''
}
/*
    Aqui estão duas formas de usar os valores booleans simplificados para simplificar o uso
    e correção de bugs, de modo que se o valore se score === null, será executado o código
    abaixo, o qual tem a msm funcionalidade do acima, que utiliza o operador ||
    
        if (!score) {
            score = {
                vitorias: 0,
                derrotas: 0,
                empates: 0
            }
        }
*/
            
let scoreElem = document.querySelector('#score')
let resultElem = document.querySelector('#res')
let movesElem = document.querySelector('#moves')

updateScore()

function computerMove(playerMove) {

    let randNum = Math.random()
    let compMov = ''
    let yourMov = ''

    if (randNum >= 0 && randNum < 1/3) {
        compMov = 'Pedra'
        moves.compMov = 'imagens/rock-emoji.png'
    } else if (randNum >= 1/3 && randNum < 2/3) {
        compMov = 'Papel'
        moves.compMov = 'imagens/paper-emoji.png'
    } else {
        compMov = 'Tesoura'
        moves.compMov = 'imagens/scissors-emoji.png'
    }

    let res = ''
    
    switch (playerMove) {
        case 1: 
            yourMov = 'Pedra'
            moves.playerMov = 'imagens/rock-emoji.png'
            if (compMov === 'Pedra') {
                resul.resultado = 'Empate!'
                score.empates++

            } else if (compMov === 'Papel') {
                resul.resultado = 'Você Perdeu!'
                score.derrotas++
            } else {
                resul.resultado = 'Você Venceu!'
                score.vitorias++
            }
            break
        case 2: 
            yourMov = 'Papel'
            moves.playerMov = 'imagens/paper-emoji.png'
            if (compMov === 'Pedra') {
                resul.resultado = 'Você Venceu!'
                score.vitorias++
            } else if (compMov === 'Papel') {
                resul.resultado = 'Empate!'
                score.empates++
            } else {
                resul.resultado = 'Você Perdeu!'
                score.derrotas++
            }
            break
        case 3:
            yourMov = 'Tesoura'
            moves.playerMov = 'imagens/scissors-emoji.png'
            if (compMov === 'Pedra') {
                resul.resultado = 'Você Perdeu!'
                score.derrotas++
            } else if (compMov === 'Papel') {
                resul.resultado = 'Você Venceu!'
                score.vitorias++
            } else {
                resul.resultado = 'Empate!'
                score.empates++
            }
            break
    }

    localStorage.setItem('score', JSON.stringify(score))
}

function result() {
    resultElem.innerHTML = `<h2>${resul.resultado}</h2>`
}

function movesOfGame() {
    movesElem.innerHTML = `Você <img src="${moves.playerMov}" class="imgMove">  <img src="${moves.compMov}" class="imgMove"> Computador`
}

function updateScore() {
    scoreElem.innerHTML = `<p>Vitorias: ${score.vitorias}. Derrotas: ${score.derrotas}. Empates: ${score.empates}</p>`
}