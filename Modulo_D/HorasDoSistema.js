var agora = new Date()
var hora = agora.getHours()
    /*
        É dessa forma que conseguimos pegar a hora do sistema ao qual está rodando o programa
    */

console.log(`Agora são exatamente ${hora} horas`)

if (hora <= 12){
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}