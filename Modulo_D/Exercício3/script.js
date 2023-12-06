function verificar(){
    var fLocal = document.getElementsByName('radLocal')
        var local = ''
    var fTransp = document.getElementsByName('radtransp')
        var transp = ''
    var res = document.querySelector('div#res')

    var imgLocal = document.createElement('img')
    imgLocal.setAttribute('id', 'fotoLocal')

    var imgTransp = document.createElement('img')
    imgTransp.setAttribute('id', 'fotoTransp')
    
    if (fTransp[0].checked) {
        transp = 'Carro'
        imgTransp.setAttribute('src', 'foto-carro.png')
        
        if(fLocal[0].checked) {
            local = 'Praia'
            imgLocal.setAttribute('src', 'foto-praia.png')
        } else if (fLocal[1].checked) {
            local = 'Fora do País'
            imgLocal.setAttribute('src', 'foto-foraPais.png')
        } else if (fLocal[2].checked) {
            local = 'Ponto Turístico Brasileiro'
            imgLocal.setAttribute('src', 'foto-pontoTur.png')
        }
    } else if (fTransp[1].checked) {
        transp = 'Trem'
        imgTransp.setAttribute('src', 'foto-trem.png')
        
        if(fLocal[0].checked) {
            local = 'Praia'
            imgLocal.setAttribute('src', 'foto-praia.png')
        } else if (fLocal[1].checked) {
            local = 'Fora do País'
            imgLocal.setAttribute('src', 'foto-foraPais.png')
        } else if (fLocal[2].checked) {
            local = 'Ponto Turístico Brasileiro'
            imgLocal.setAttribute('src', 'foto-pontoTur.png')
        }
    } else if (fTransp[2].checked) {
        transp = 'Ônbus'
        imgTransp.setAttribute('src', 'foto-bus.png')
        
        if(fLocal[0].checked) {
            local = 'Praia'
            imgLocal.setAttribute('src', 'foto-praia.png')
        } else if (fLocal[1].checked) {
            local = 'Fora do País'
            imgLocal.setAttribute('src', 'foto-foraPais.png')
        } else if (fLocal[2].checked) {
            local = 'Ponto Turístico Brasileiro'
            imgLocal.setAttribute('src', 'foto-pontoTur.png')
        }
    } else if (fTransp[3].checked) {
        transp = 'Barco'
        imgTransp.setAttribute('src', 'foto-barco.png')
        
        if(fLocal[0].checked) {
            local = 'Praia'
            imgLocal.setAttribute('src', 'foto-praia.png')
        } else if (fLocal[1].checked) {
            local = 'Fora do País'
            imgLocal.setAttribute('src', 'foto-foraPais.png')
        } else if (fLocal[2].checked) {
            local = 'Ponto Turístico Brasileiro'
            imgLocal.setAttribute('src', 'foto-pontoTur.png')
        }
    } else if (fTransp[4].checked) {
        transp = 'Avião'
        imgTransp.setAttribute('src', 'foto-airplane.png')
        
        if(fLocal[0].checked) {
            local = 'Praia'
            imgLocal.setAttribute('src', 'foto-praia.png')
        } else if (fLocal[1].checked) {
            local = 'Fora do País'
            imgLocal.setAttribute('src', 'foto-foraPais.png')
        } else if (fLocal[2].checked) {
            local = 'Ponto Turístico Brasileiro'
            imgLocal.setAttribute('src', 'foto-pontoTur.png')
        }
    }

    res.innerHTML = `Detectamos que irá para ${local} de ${transp}<br/>`
    res.appendChild(imgLocal)
    res.appendChild(imgTransp)
    
}
    
