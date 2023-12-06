function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtAno')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e Tente Novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            /*
                Esses dois comandos são a criação de um elemento de imagem diretamente
                do Js, tem a mesma utilidade de quando seria criado diretamente no html
            */

        if (fSex[0].checked) {
            if (idade >= 0 && idade < 10) {
                genero = 'um menino'
                img.setAttribute('src', 'foto-criança-m.png')
            } else if (idade >= 10 && idade < 21) {
                genero = 'um jovem'
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade >= 21 && idade < 60) {
                genero = 'um homem'
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                genero = 'um idoso'
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fSex[1].checked) {
            if (idade >= 0 && idade < 10) {
                genero = 'uma menina'
                img.setAttribute('src', 'foto-criança-f.png')
            } else if (idade >= 10 && idade < 21) {
                genero = 'uma jovem'
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade >= 21 && idade < 60) {
                genero = 'uma mulher'
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                genero = 'uma idosa'
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos<br/>`
        res.appendChild(img)
    }
}