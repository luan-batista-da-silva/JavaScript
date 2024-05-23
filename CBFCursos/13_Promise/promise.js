const numero = document.querySelector("#numero");
const btn_promessa = document.querySelector("#btn_promessa");

function promessa() { // Função que retorna a Promise
    let promise = new Promise((resolve, rejected) => { // A promisse retorna o resolve e o rejected
        let result = false;
        let tempo = 3000;
    
        setTimeout(() => {
            if (result) {
                resolve("Deu tudo Certo!");
            } else {
                rejected("Deu tudo Errado!");
            }
        }, tempo);
        
    })

    return promise;
}

btn_promessa.addEventListener("click", () => {
    numero.innerHTML = "Processando..."
    promessa()
        .then((retorno) => {
            numero.innerHTML = retorno;
            numero.classList.remove("erro");
            numero.classList.add('ok');
        })
        .catch((retorno) => {
            numero.innerHTML = retorno;
            numero.classList.remove("ok");
            numero.classList.add('erro');
        });
})



numero.innerHTML = "Esperando..."