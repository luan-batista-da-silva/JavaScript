const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');

const cursos = [...document.querySelectorAll(".curso")];

const msg = () => {
    alert('Clicou!');
}

c1.addEventListener("click", msg);
    // Aqui ele adiciona uma EventListener que tem a função de verificar qual evento será adicionado e a função que será executada ao realizá-lo

cursos.map((elem) => {
    elem.addEventListener("click", (evt) => {
        const el = evt.target;
        el.classList.add("destaque");
    })
})