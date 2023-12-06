function calcularTabuada() {
    let numTab = document.getElementById('numTab')
    let tab = document.getElementById('cellTab')

    if (numTab.value.length == 0) {
        window.alert('[ERRO] Por favor insira um número!')
    } else {
        let num = Number(numTab.value)
        tab.innerHTML = ''
        for (var mult = 0; mult <= 10; mult++) {
            let item = document.createElement('option')
            item.text = `${num} x ${mult} = ${num * mult}`
            tab.appendChild(item)
            item.value = `tab${mult}`
        }
    }
}