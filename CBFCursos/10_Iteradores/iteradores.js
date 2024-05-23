/*
-> Coleções Iteraveis
    Arrays
    String
    Map
    Sets
*/

const valores = [10, 58, 17, 0]; // Array
const it_val = valores[Symbol.iterator]();

const txt = "YouTube";
const it_txt = txt[Symbol.iterator]();

console.log(valores);
console.log(it_val.next());
console.log(it_val.next());
console.log(it_val.next());
console.log(it_val.next());
console.log(it_val.next());
    // {value: X, done: false} -> O 'done' é a forma que as funções sabem se ja chegou ao final, se done for TRUE saberá que chegou ao final

console.log(txt);
console.log(it_txt.next());
console.log(it_txt.next());
console.log(it_txt.next());
console.log(it_txt.next());
console.log(it_txt.next());
console.log(it_txt.next());
console.log(it_txt.next());
console.log(it_txt.next());