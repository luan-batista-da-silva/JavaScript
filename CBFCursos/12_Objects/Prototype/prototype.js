/*
    O Prototype vai servir quando for necessário para adicionar alguma propriedade ou método a um objeto será necessário usar o Prototype
*/

const Nave = function(energia) {
    this.energia = energia;
    this.disparos = 100;
}

const n1 = new Nave(100);


Nave.prototype.vidas = 5;
Nave.prototype.disparar = function() {
    if (this.disparos > 0) {
        this.disparos--;
    }
}


console.log(Nave);
console.log(n1);
console.log(n1.energia);
console.log(n1.disparos);
console.log("---------------------------------");


n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();

console.log('DISPARANDOOOO');

console.log(Nave);
console.log(n1);
console.log(n1.energia);
console.log(n1.disparos);
console.log("---------------------------------");
