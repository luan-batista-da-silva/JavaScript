const pessoa = {
    nome: "Luan",
    curso: "CFB Cursos",
    aulas: {
        aula01: "Introdução",
        aula02: "Variáveis",
        aula03: "Condicional"
    }
}

const string_pessoa = '{"nome":"Luan","curso":"CFB Cursos","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

// Convertendo o Objeto Literal para JSON
const s_json_pessoa = JSON.stringify(pessoa);

// Convetendo JSON em Objeto
const o_json_pessoa = JSON.parse(string_pessoa);

console.log(pessoa);
console.log(s_json_pessoa);