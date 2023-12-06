let valores = []
let num = document.querySelector('input#nums')
let res = document.querySelector('div#res')
let lista = document.querySelector('select#flista')

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    res.innerHTML = ''

    if (isNumber(num.value) && inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        lista.appendChild(item)
        item.text += `Valor ${num.value} adicionado!`

    } else {
        window.alert('[ERRO] Valor inválido ou encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function soma(l) {
    let soma = 0

    for (let c = 0; c < l.length; c++) {
        soma += l[c]
    }

    return soma
}

function biggest(l) {
    let maior = l[0]

    for (let c = 1; c < l.length; c++) {
        if(l[c] > maior) {
            maior = l[c]
        }
    }

    return maior
}

function smallest(l) {
    let menor = l[0]

    for (let c = 1; c < l.length; c++) {
        if(l[c] < menor) {
            menor = l[c]
        }
    }

    return menor
}

function media(l, s) {
    let media = s / (l.length)

    return media
}

function calcularRes(){
    
    if (valores.length == 0) {
        window.alert('[ERRO] Por favor, insira valores antes de finalizar!')
    } else {
        res.innerHTML = `Foram adicionados ${valores.length} números!<br>`
        res.innerHTML += `O maior valor é ${biggest(valores)}!<br>`
        res.innerHTML += `O menor valor é ${smallest(valores)}!<br>`
        res.innerHTML += `A soma dos valores é ${soma(valores)}!<br>`
        res.innerHTML += `A média dos valores é ${media(valores, soma(valores))}!`
    }
}