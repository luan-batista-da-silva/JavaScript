const caixa1 = document.querySelector('#caixa1');
const btn_c1 = document.querySelector('#c1');
const cursos = [...document.querySelectorAll('.curso')];

caixa1.addEventListener("click", (event) => {
    console.log('Clicou!');
    console.log(event);
});

cursos.map((elem) => {
    elem.addEventListener("click", (event) => {
        event.stopPropagation();
    })
})

