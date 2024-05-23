const box = document.querySelector("#box");
let cores = ["Azul", "Verde", "Vermelho", ['claro', 'escuro', 'médio']];
let cursos = ["HTML", "CSS", "JavaScript", cores];

// cursos[0] = 2023;
/*
cursos.push("C++"); 
cursos.push("Phyton");
    // O push, adiciona elementos no final do array

cursos.unshift("C"); 
    // O unshifit, adiciona o elemento no início do array

cursos.shift();
    // O shift, remove o primeiro elemento do array

cursos.pop(); // O pop, remove o último elemento do array
*/

cursos.map((elem) => {
    let p = document.createElement('p');
    p.innerHTML = elem;
    box.appendChild(p);
})

console.log(cursos[3][3]);
    // Assim é possível acessar outros arrays dentro do array
console.log(cursos[3][3][1]);
