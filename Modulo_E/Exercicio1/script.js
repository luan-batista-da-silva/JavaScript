function calcular() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')

    // res.innerHTML = `Inicio: ${inicio.value.length}`

    if (fim.value.length == 0 || passo.value.length < 0 || passo.value == 0) {
        res.innerHTML = `Impossível contar!`
        window.alert('[ERRO] Não é possível realizar a operação com valores nulos\nPor favor revise os valores indicados!')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = `Contando... <br/>`
        if (i < f){
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (var c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
         res.innerHTML += `\u{1F3C1}`
    }
}