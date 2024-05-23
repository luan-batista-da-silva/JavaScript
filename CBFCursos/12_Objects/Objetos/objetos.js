function Pessoa(pName, pAge) { // Utilizando o 'function' não se tem o construtor
    this.name = pName,
    this.age = pAge,
/*
-> Quando utilizado o 'class' 
    constructor() { 
        // Método automaticamente chamado ao se instanciar um novo objeto dessa classe - Se o construtor não reveber nenhum parâmetro, não será passado nenhum parâmetro ao instanciar a classe
        this.name = pName;
        this.age = pAge;
    }
*/    
    this.getName = function() {
        return this.name;
    },
    this.getAge = function() {
        return this.age;
    },
    this.setName = function(nome) {
        this.name = nome;
    },
    this.setAge = function(idade) {
        this.age = idade;
    },
    this.info = function() {
        console.log(`Nome.: ${this.name}`);
        console.log(`Idade.: ${this.age}`);
        console.log(`----------------------------------`)
    }
}

class Carro {
    constructor (pNome, pTipo) {
        this.name = pNome;
        if (pTipo == 1) {
            this.type = "Esportivo";
            this.maxSpeed = 300;
        } else if (pTipo == 2) {
            this.type = "Utilitário"
            this.maxSpeed = 100;
        } else if (pTipo == 3) {
            this.type = "Passeio";
            this.maxSpeed = 160;
        } else {
            this.type = "Adaptado para Corridas";
            this.maxSpeed = 400;
        }
    }
// Obter o Nome
    getName() {
        return this.name;
    }
// Obter o Tipo
    getType() {
        return this.type;
    }
// Obter a Velocidade Máxima
    getMaxSpeed() {
        return this.maxSpeed;
    }
// Obter as Infos
    getInfo() {
        return [this.name, this.type, this.maxSpeed];
    }
// Mudar o Nome
    setName(pName) {
        this.name = pName;
    }
// Mudar o Tipo
    setType(pType) {
        this.name = pType;
    }
// Mudar a Velocidade Máxima
    setMaxSpeed(pMaxSpeed) {
        this.maxSpeed = pMaxSpeed;
    }
// Mostrar as Informações
    info() {
        console.log(`Nome.: ${this.name}`);
        console.log(`Tipo.: ${this.type}`);
        console.log(`Velocidade Máxima.: ${this.maxSpeed}`);
        console.log(`-----------------------------------------`);
    }
}

let c1 = new Carro("Daora", 1);
let c2 = new Carro("Luxuoso", 2);
let c3 = new Carro("Normalzão ", 3);

/*
    let p1 = new Pessoa("Luan", 19);
        // O new, instancia a nova classe e executa o construtor
*/

const btn_add = document.querySelector('#btn_add');
const res = document.querySelector('.res');

let pessoas = [];

const addPessoas = () => {
    res.innerHTML ='';
    pessoas.map((elem) => {
        const div = document.createElement('div');
        div.setAttribute("class", 'pessoa');

        div.innerHTML = `Nome.: ${elem.getName()} <br>Idade.: ${elem.getAge()}`;

        res.appendChild(div);
    })
}

btn_add.addEventListener("click", (event) => {
    const name = document.querySelector("#firstName");
    const age = document.querySelector("#age");
    const p = new Pessoa(name.value, Number(age.value));
    pessoas.push(p);

    name.value = '';
    age.value = '';
    name.focus();
    
    console.log(pessoas);
    addPessoas();
});


