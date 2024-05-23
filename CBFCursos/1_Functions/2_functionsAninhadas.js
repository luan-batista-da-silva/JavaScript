const soma = (...valores) => {
    const somar = val => {
        let res = 0;
        for (v of val) {
            res += v;
        }
        return res;
    } // Essa função pode ser declarada fora desse escopo, podendo assim ser usada por fora

    return somar(valores);
}

console.log(soma(10, 5, 15));