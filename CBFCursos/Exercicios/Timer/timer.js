// Tratando a Data

const date_box = document.querySelector('#date_box');
const relogio_box = document.querySelector("#clock_box");
const btn_active = document.querySelector("#btn_active");
const btn_stop = document.querySelector("#btn_stop");
const temp_alarme = document.querySelector("#temp_alarme");
const hour_alarme = document.querySelector("#hour_alarme");
const timer = document.querySelector("#timer");

const audio_alarme = new Audio("alarme.mp3");
audio_alarme.loop = -1;
    // Se quiser colocar uma quantidade específica é so adicionar, se decidir que seja infinito é so colocar um número negativo

let ts_atual = null;
let ts_alarme = null;
let alarme_active = false;
let alarme_playing = false;

const data = new Date();

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

    if (alarme_active && !alarme_playing) {
        if (date.getTime() >= ts_alarme) {
            alarme_playing = true;
            audio_alarme.play();
            timer.classList.add("alarme");
        }
    }
}

setInterval(relogio, 1000);

btn_active.addEventListener("click", (event) => {
    ts_atual = Date.now();
    ts_alarme = ts_atual + (temp_alarme.value * 1000);
    alarme_active = true;

    const data_alarme = new Date(ts_alarme);

    let hrs_alarme = data_alarme.getHours();
        hrs_alarme = hrs_alarme < 10 ? `0${data_alarme.getHours()}`: `${data_alarme.getHours()}`;
    let min_alarme = data_alarme.getMinutes();
        min_alarme = min_alarme < 10 ? `0${data_alarme.getMinutes()}`: `${data_alarme.getMinutes()}`;
    let sec_alarme = data_alarme.getSeconds();
        sec_alarme = sec_alarme < 10 ? `0${data_alarme.getSeconds()}`: `${data_alarme.getSeconds()}`;

    hour_alarme.innerHTML = `Hora do Alarme: ${hrs_alarme}:${min_alarme}:${sec_alarme}`;
});

btn_stop.addEventListener("click", (event) => {
    alarme_active = false;
    alarme_playing = false;

    hour_alarme.innerHTML = `Hora do Alarme: `;
    temp_alarme.value = 0;

    timer.classList.remove("alarme");
    audio_alarme.pause();
    audio_alarme.currentTime = 0;

})