class Carro { // Class PAI
    constructor (nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    setCor(cor) {
        this.cor = cor;
    }
}

class Militar extends Carro { // Significa que a Classe militar vai Herdar a classe carro
    constructor(nome, portas, blindagem, munição) {
        super(nome, portas) // Serve para quando quiser invocar algo bem específico da classe pai.
        this.blindagem = blindagem;
        this.armor = munição;
        this.setCor("Verde");
    }
    atirar() {
        if (this.armor > 0) {
            this.armor--;
        }
    }
}

class Utilitário extends Carro {
    constructor(nome, portas, lugares) {
        super(nome, portas)
        this.lugares = lugares;
    }
}


const c1 = new Carro("Normal", 4);
c1.setCor("Preto");
c1.ligar();

const c2 = new Militar("Caveirão", 4, 100, 50);
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();

console.log(`Nome.: ${c2.nome}`);
console.log(`Portas.: ${c2.portas}`);
console.log(`Ligado.: ${(c2.ligado ? "Sim" : "Não")}`);
console.log(`Velocidade.: ${c2.vel}`);
console.log(`Cor.: ${c2.cor}`);
console.log(`Munição.: ${c2.armor}`);
console.log(`--------------------------------------------------`);