const idades = [15, 25, 27, 17, 51, 48, 29, 14];

// const maior = ((valor)) => {
const maior = idades.filter((valor) => {
    if (valor >= 18) {
        return valor;
    }
});

const menor = idades.filter((valor) => {
    if (valor < 18) {
        return valor;
    }
})

console.log(idades);
console.log(maior);
console.log(menor);
