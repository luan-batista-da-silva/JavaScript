const box = document.querySelector('.box');

/* 
-> Coleção Map
    - É uma coleção Chave valor, sempre que for adicionado um elemento deve se adicionar uma chave para ele
*/

let mapa = new Map();

// Propriedades e Métodos
mapa.set("curso", "JavaScript");
mapa.set(10, 'Luan');
mapa.set(1, 100);
mapa.set("Canal", 100);

if (mapa.has("Canal")) {
    box.innerHTML = `A chave existe na Coleção com o Valor: ${mapa.get("Canal")}`;
} else {
    box.innerHTML = `A chave não existe na Coleção`;
}
box.innerHTML += `<br> O tamanho da coleção é ${mapa.size}`;

// box.innerHTML = mapa.get(10);