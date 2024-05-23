function aluno(nome, nota) {
    this.nome = nome;
        // O operador this aqui diferencia a variável, mostrando que a variável nome que e de dentro dessa (this) função que está recebendo nome
    
    this.nota = nota;
        // Faz referência sempre ao que está aqui dentro dessa função
    
    this.dados_anonimo = function() {
        setTimeout(function() {
            console.log(this.nome);
            console.log(this.nota);
                // Aqui a função setTimeout coloca um novo escopo do this, perdendo assim a referência do this do escopo anterior
        }, 2000)
    }
    
    this.dados_arrow = function() {
        setTimeout(() => {
            console.log(this.nome);
            console.log(this.nota);
        }, 2000)
            // Aqui a arrow funtion consegue contornar esse problema, de modo que puxe a referência do this anterior
    }
}

const al1 = new aluno("Luan", 100);

al1.dados_anonimo();
al1.dados_arrow();