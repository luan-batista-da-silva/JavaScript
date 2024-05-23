const p_array = document.querySelector('#array');
const btn_verify = document.querySelector('#btn_verify');
const result = document.querySelector('#result');
    
const elem_array = [19, 25, 17, 27, 61, 77];

p_array.innerHTML = `[${elem_array}]`;

/*
-> Some
    Ele vai retornar TRUE quando pelo menos UM dos elementos do ARRAY for igual ao comparado. E retorna FALSE, quando nehum tiver no array 
*/

btn_verify.addEventListener("click", (event) => {
    const res = elem_array.some((elem, index) => {
        if (elem < 18) {
            result.innerHTML = `Array não conforme na posição ${index}`
        }

        return elem >= 18;
    })
    if (res) {
        result.innerHTML = 'OK';
    }
})