


function relogio() {
    let data = new Date()
    let divRelogio = document.querySelector('.divRelogio')
    let horas = data.getHours()
        horas = horas < 10 ? "0" + horas : horas
    let minutos = data.getMinutes()
        minutos = minutos < 10 ? "0" + minutos : minutos
    let segundos = data.getSeconds()
        segundos = segundos < 10 ? "0" + segundos : segundos
    
    let horasCompleta = horas + ":" + minutos + ":" + segundos

    divRelogio.innerHTML = horasCompleta
}

let intervalo = setInterval(relogio, 1000)
    /* 
    A função setInterval(*function*, *time*) - Ela chama uma função
    diversas vezes dentro do intervalo de tempo colocado como segundo 
    parametro (em milisegundos)
    */
/*
    gatDate() --> Dia do mês
    getDay() --> Dia da Semana (número)
    getFullYear() --> Ano com 4 dígitos
    getHours() --> Horas
    getMiliseconds() --> Milisegundos
    getMinutes() --> Minutos
    getMonth() --> Mês
    getSeconds() --> Segundos
    getTime() --> timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
    setDate() --> Define um dia do mês para a data
    setMonth() --> Define um mês para a data
    setFullYear() --> Define um ano para a data
    setHours() --> Define horas
    setMinutes() --> Define minutos
    setSeconds() --> Define segundos
    setMiliseconds() --> Define milisegundos
    toDateString() --> Retorna somente a data

*/