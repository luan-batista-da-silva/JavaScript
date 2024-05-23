const caixa1 = document.querySelector('#caixa1');
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "ReactNative"];

cursos.map((elem, id) => {
    const newElement = document.createElement('div');

    newElement.setAttribute('id', `c${id}`);
    newElement.setAttribute('class', 'curso');
    newElement.innerHTML = elem;

    const lixeira = document.createElement("img");
    lixeira.setAttribute('src', "./imagens/lixeira.png")
    lixeira.setAttribute('class', 'icon-trash');
    lixeira.addEventListener("click", (event) => {
        caixa1.removeChild(event.target.parentNode);
    });

    newElement.appendChild(lixeira);
    caixa1.appendChild(newElement);
    
})


