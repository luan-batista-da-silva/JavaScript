const p_array = document.querySelector('#array');
const txt_search = document.querySelector('#txt_search');
const btn_search = document.querySelector('#btn_search');
const result = document.querySelector('#result');
    
const elem_array = ["html", "css", "javascript"];

p_array.innerHTML = `[${elem_array}]`;


btn_search.addEventListener('click', (event) => {
    const res = elem_array.find((elem) => {// find((elem, index, array) => )
        if (elem.toUpperCase() == txt_search.value.toUpperCase()) {
            return elem;
        }
    });

    if (res != undefined) {
        result.innerHTML = `Elemento ${res} encontrado!`
    }
    else {
        result.innerHTML = `Elemento não encontrado!`
    }
});
    
