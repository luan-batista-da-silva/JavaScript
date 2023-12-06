var agora = new Date()
var diaSem = agora.getDay()

/* Utilização do Switch Case
    switch (expressão){
        case 1:
            comandos...
            break -> É obrigatoório o uso do Break
        case 2:
            comandos...
            break
        default:
            comandos
            break
    }

    -> Ele so funciona com caracteres e números inteiros, não é possível usar para anilisar intervalos
*/

    /*
        Dias no JS
            0 = Domingo
            1 = Segunda
            2 = Terça
            3 = Quarta
            4 = Quinta
            5 = Sexta
            6 = Sábado
    */

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido')
        break
}