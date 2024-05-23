// const soma = function(v1, v2){return v1 + v2}


const soma = (v1, v2)=>{return v1 + v2};
    /* 
        É a mesma função escrita anteriormente, porém indica que os parâmetros dentro dos () serão enviadas para a função.
    */

const nome = n => {return n};
    // Quando se tem so um parâmetro não é necessário colocar os ()

const soma2 = n => n + 10;
    // Assim não é necessário colocar o return, pois é uma operação simples

const soma3 = (v1, v2) => {
    let res = v1 + v2;
    return res;
}
    // Quando a função for mais complexa é necessário colocar return, especificando oq deve ser retornado 

console.log(soma2(10));

console.log(soma(10, 5));

console.log(nome('Luan'));

console.log(soma3(10, 15));