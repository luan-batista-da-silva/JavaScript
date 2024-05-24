const btn_alert = document.querySelector("#btn_alert");
const btn_confirm = document.querySelector("#btn_confirm");
const btn_prompt = document.querySelector("#btn_prompt");

btn_alert.addEventListener("click", (event) => {
    alert("OLÁ! TUDO BEM?");
});

btn_confirm.addEventListener("click", (event) => {
    if (confirm("Você está Aprendendo muito?")) {
        alert("Sim estou aprendendo muito!");
    }
    else {
        alert("Não estou aprendendo muito!");
    }

});

btn_prompt.addEventListener("click", (event) => {
    const nome = prompt("Digite seu nome:", "Digite Seu nome aqui");
        // O segundo parâmetro é o conteúdo padrão que sempre aparecerá no prompt

    console.log(nome);
});