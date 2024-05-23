const p_array = document.querySelector('#array');
const btn_verify = document.querySelector('#btn_verify');
const result = document.querySelector('#result');
    
const elem_array = [19, 25, 18, 27, 61, 77];

p_array.innerHTML = `[${elem_array}]`;

/*
-> Every
Ele vai pesquisar elemento por elemento do array determinado e vai verificar se todos os elementos equivalerem a regra que foi passada ele retornará TRUE
Porém, se nem todos os elementos estiverem dentro da regra ele resultará FALSE
*/

btn_verify.addEventListener("click", (event) => {
    const res = elem_array.every((elem, index) => {
        if (elem < 18) {
            result.innerHTML = `Array não conforme na posição ${index}`
        }

        return elem >= 18;
    })
    if (res) {
        result.innerHTML = 'OK';
    }
})