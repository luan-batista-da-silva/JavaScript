const p_array = document.querySelector('#array');
const btn_reduce = document.querySelector('#btn_reduce');
const result = document.querySelector('#result');
    
const elem_array = [1, 2, 3, 4, 5];
let prev = [];
let current = [];
let dobro = [];

p_array.innerHTML = `[${elem_array}]`;

/*
-> Reduce
    Ele permite fazer uma redução do ARRAY. Tem parâmetro a mais, sendo o primeiro parâmetro do valor anterior
    É uma forma de ir pegando o valor da operação com o vetor ANTERIOR, o retorno da sua operação no caso, podendo fazer operações com esse retorno do anterior.
*/

btn_reduce.addEventListener("click", (event) => [
    result.innerHTML = elem_array.reduce((previous, atual, pos) => {
        prev.push(previous);
        current.push(atual);
        dobro.push(atual*2);
        return atual + previous;
    }),
    result.innerHTML += `<br> Valor Anterior: ${prev}`,
    result.innerHTML += `<br>Valor Atual: ${current}`,
    result.innerHTML += `<br>Valor Dobro: ${dobro}`
])

