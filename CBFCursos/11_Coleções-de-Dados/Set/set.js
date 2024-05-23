const box = document.querySelector(".box");

let musicas = new Set(["musica1", "musica boa", "musica10"]);

musicas.add("musica perfeita");
musicas.add("musica1");
musicas.add("musica1");
musicas.add("musica1");
musicas.add("musica10");
    // Não é possível adicionar mais de uma vez o mesmo elemento

musicas.delete("musica1");

console.log(musicas);

musicas.forEach((elem) => { // Percorrendo todos os elementos da coleção
    box.innerHTML += `${elem}<br>`;
});

