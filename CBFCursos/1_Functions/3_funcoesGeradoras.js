// ======================= FUNÇÕES GERADORAS ===================

function* cores() { // Para função ser geradora basta colocar o *
    yield 'Vermelho';
    yield 'Verde ';
    yield 'Azul';
}

const itc = cores(); // Primeira chamada da função (Retorna somente a função)

console.log(itc.next().value); // Executa até o primeiro Yield, e para

console.log(itc.next().value); // Continua exatamente de onde parou e para até achar o próximo Yield

console.log(itc.next().value);

console.log(itc.next().value); // Retorna undefined, pois não tem mais oq executar

function* perguntas() {
    const nome = yield 'Qual seu nome?';
        // Aqui ele permite que armazene algo
    const esport = yield 'Qual seu esporte favorito?';

    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esport;
}

const itp = perguntas();

console.log(itp.next().value);
console.log(itp.next('Luan').value);
console.log(itp.next('Handebol').value);


function* contador() {
    let i = 0;

    while (true) {
        yield i++; // Loop infinito
    }
}

const itCount = contador();

for (let i = 0; i < 10; i++) {
    console.log(itCount.next().value);
}


