const caixa1 = document.querySelector('#caixa1');
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "ReactNative"];

cursos.map((elem, id) => {
    const newElement = document.createElement('div');

    console.log(id);
    newElement.setAttribute('id', `c${id}`);
    newElement.setAttribute('class', 'curso');
    newElement.innerHTML = elem;

    caixa1.appendChild(newElement);
})


