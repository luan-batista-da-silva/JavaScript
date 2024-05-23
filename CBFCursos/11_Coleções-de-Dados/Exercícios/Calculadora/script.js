const num1 = document.querySelector('#n1');
const num2 = document.querySelector('#n2');
const btn_add = document.querySelector('#add');
const btn_sub = document.querySelector('#subtract');
const btn_mult = document.querySelector('#multiply');
const btn_div = document.querySelector('#divide');
const result = document.querySelector("#p_result");

const operacoes = [
    (n1, n2) => {
        if (num1.value == '' || num2.value == '') {
            alert('[ERROR] Insira um número');
            return "ERROR"
        }
        return n1 + n2;
    },
    (n1, n2) => {
        if (num1.value == '' || num2.value == '') {
            alert('[ERROR] Insira um número');
            return "ERROR"
        }
        return n1 - n2;
    },
    (n1, n2) => {
        if (num1.value == '' || num2.value == '') {
            alert('[ERROR] Insira um número');
            return "ERROR"
        }
        return n1 * n2;
    },
    (n1, n2) => {
        if (num1.value == '' || num2.value == '') {
            alert('[ERROR] Insira um número');
            return "ERROR"
        }
        if (n2 == 0) {
            return "ERROR";
        }
        return n1 / n2;
    }
];

btn_add.addEventListener('click', (event) => {
    let res = operacoes[0](Number(num1.value), Number(num2.value));

    result.innerHTML = `Resultado: ${res}`;
});

btn_sub.addEventListener('click', (event) => {
    let res = operacoes[1](Number(num1.value), Number(num2.value));

    result.innerHTML = `Resultado: ${res}`;
});

btn_mult.addEventListener('click', (event) => {
    let res = operacoes[2](Number(num1.value), Number(num2.value));

    result.innerHTML = `Resultado: ${res}`;
});

btn_div.addEventListener('click', (event) => {
    let res = operacoes[3](Number(num1.value), Number(num2.value));

    result.innerHTML = `Resultado: ${res}`;
});
