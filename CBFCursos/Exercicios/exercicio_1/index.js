const caixa1 = document.querySelector('#caixa1');
const caixa2 = document.querySelector('#caixa2');
const button = document.querySelector('#but-cpy');
const allCurses = [...document.querySelectorAll('.curso')];

allCurses.map((el) => {
    el.addEventListener("click", (event) => {
        const curso = event.target;
        curso.classList.toggle("selecionado");
            /*
                -> Toggle
                    Essa função passa por todas as classes do elemento, e verifica se há esse class
                    Se houver ele remove, se não houver ele adiciona
            */
    })
});

button.addEventListener("click", () => {
    const selected = [...document.querySelectorAll('.selecionado')];
    selected.map((elem) => {
        caixa2.appendChild(elem);
    });

    const notSelected = [...document.querySelectorAll('.curso:not(.selecionado')];
        // Esse :not(class), limita a seleção para todas as tags que possuam a class curso, mas que não possuam a class selecionado

    notSelected.map((elem) => {
        caixa1.appendChild(elem);
    })

    // allCurses.map((elem) => {
    //     if (!elem.classList.contains('selecionado')) {
    //         caixa1.appendChild(elem);
    //     }
    // })
});




