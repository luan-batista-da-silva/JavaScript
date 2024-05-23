// Tratando a Data

const date_box = document.querySelector('#date_box');
const data = new Date();
const relogio_box = document.querySelector("#relogio");

let dia = data.getDate();
dia = dia < 10 ? `0${dia}`:`${dia}`
let mes = data.getMonth();
mes = mes < 10 ? `0${mes}` : `${mes}`;

const data_str = `${dia}/${mes}/${data.getFullYear()}`;

date_box.innerHTML = data_str;

function relogio() {
    const date = new Date();
    let horas = date.getHours();
        horas = horas < 10 ? `0${horas}` : `${horas}`; 
    let minuto = date.getMinutes();
        minuto = minuto < 10 ? `0${minuto}` : `${minuto}`;
    let segundos = date.getSeconds();
        segundos = segundos < 10 ? `0${segundos}` : `${segundos}`;

    const hora_completa = `${horas}:${minuto}:${segundos}`;

    relogio_box.innerHTML = hora_completa;
}

setInterval(relogio, 1000);



/*
    -> new Date()
        Assim é possível instanciar uma nova data

    -> Date.now() // timestamp
        Ele retorno em milissegundos do tempo (Timestamp) que passou desde janeiro de 1970, tendo assim um resumo de data e hora

    -> getDate() = Dia do Mês
    -> getDay() = Dia da Semana (número)
    -> getFullYear() = Ano com 4 dígitos
    -> getHours() = Horas
    -> getMiliseconds() = Milisegundos
    -> getMinutes() = Minutos
    -> getMonth() = Mês
    -> getSeconds() = Segundos
    -> getTime() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
    -> Date.now() = Timestamp (Milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
    -> getTimezoneOffset() = Timezone da Localidade
    -> setDate() = Deine um dia do mês para a data
    -> setMonth() = Define um mês para a data
    -> setFullYear() = Define um ano para a data
    -> setHours() = Define horas
    -> setMinutes() = Define Minutos
    -> setSeconds() = Define Segundos
    -> setMiliseconds() = Define Milisegundos
*/

console.log(data.getDay());