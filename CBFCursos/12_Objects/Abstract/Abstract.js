class CarroPadrao {
    constructor() {
        if (this.constructor === CarroPadrao) {
            throw new TypeError("Esta classe não pode ser Instanciada.");
        }
        if (this.ligar === undefined) {
            throw new TypeError("É obrigatório implementar o método ligar.");
        }
        if (this.desligar === undefined) {
            throw new TypeError("É obrigatório implementar o método desligar.");
        }
        this.rodas = 4;
        this.portas = 4;
        this.ligado = false;
    }
}


class Carro extends CarroPadrao{
    constructor(tipo, estagioTurbo) {
        super();
        this.turbo = new Turbo(estagioTurbo);
        if (tipo == 1) {
            this.nome = "Passeio"
            this.velMax = 120;
        } else if (tipo == 2) {
            this.nome = "Esportivo"
            this.velMax = 160;
        } else if (tipo == 3) {
            this.nome = "Adaptado para Corridas"
            this.velMax = 200;
        }
        this.velMax += this.turbo.potencia;
    }
    info() {
        console.log(this.nome);
        console.log(this.velMax);
        console.log(this.turbo);
        console.log(this.rodas);
        console.log(this.portas);
        console.log(this.ligado);
        console.log("---------------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTurbo) {
        super(4, estagioTurbo)
        this.tipoInfo = 0;
        this.velMax = 300 + this.turbo.potencia;
        this.nome = "Carro Especial"
    }
    info() { // O info do CarroEspecial sobreescreveu o info do Carro
        if (this.tipoInfo == 1) {
            super.info(); // Dessa forma é possível chamar o info da classe PAI
        }
        else {
            console.log(`Nome.: ${this.nome}`);
            console.log(`Vel.Max.: ${this.velMax}`);
            console.log(`Turbo.: ${this.turbo.potencia}`);
            console.log("---------------------------------");
        }
    }
}

class Turbo {
    constructor(estagio) {
        if (estagio == 0) {
            this.potencia = 0;
        } else if (estagio == 1) {
            this.potencia = 50;
        } else if (estagio == 2) {
            this.potencia = 75;
        } else if (estagio == 3) {
            this.potencia = 100;
        }
    }
}

const c1 = new Carro(1, 0);
const c2 = new Carro(2, 1);
const c3 = new Carro(2, 2);
const c4 = new CarroEspecial(3);
// const c5 = new CarroPadrao();

c1.info();
c2.info();
c3.info();
c4.info();

