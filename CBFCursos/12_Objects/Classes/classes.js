// Tipos de Carros
const inp_militaryType = document.querySelector("#military_type");
const inp_normalType = document.querySelector("#normal_type");

// Dados do Carro
const inp_shield = document.querySelector("#shield");
const inp_armor = document.querySelector("#armor");
const inp_name = document.querySelector("#name");
const inp_doors = document.querySelector("#doors");

// Divs e Botões
const cars = document.querySelector('#cars');
const btn_add = document.querySelector("#btn_add");

// Array de Carros
let arr_cars = [];

// Função para remover
function removeCar(car) {
    arr_cars = arr_cars.filter((elem) => {
        console.log(elem.nome);
        return elem.nome != car;
    })
}

// Classes
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

// Eventos
inp_militaryType.addEventListener("click", (event) => {
    inp_armor.removeAttribute('disabled');
    inp_shield.removeAttribute('disabled');
});

inp_normalType.addEventListener("click", (event) => {
    inp_armor.value = 0;
    inp_shield.value = 0;
    inp_armor.setAttribute("disabled", "disabled");
    inp_shield.setAttribute('disabled', "disabled");
});

// Função de Organização
const manageCars = () => {
    cars.innerHTML = '';

    arr_cars.forEach((car, index) => {
        const div = document.createElement("div");
        const lixeira = document.createElement("img");
        
        lixeira.setAttribute('id', `${index}`);
        lixeira.setAttribute("class", 'lixeira');
        lixeira.setAttribute('src', './imagens/lixeira.png');
        lixeira.addEventListener('click', (event) => {
            const whoRemove = event.target.parentNode.dataset.portas;
            removeCar(whoRemove);
            manageCars();
        })
        
        div.setAttribute("class", "car");
        div.setAttribute("data-nome", `${car.nome}`);
            // Dessa forma é possível criar um 'dataset' para que seja possível obter uma propriedade da sua classe, utilizando o seguinte formato: 
        div.innerHTML += `Nome.: ${car.nome}<br>`;
        div.innerHTML += `Portas.: ${car.portas}<br>`;
        div.innerHTML += `Blindagem.: ${car.blindagem}<br>`;
        div.innerHTML += `Munição.: ${car.armor}<br>`;
        
        div.appendChild(lixeira);
        cars.appendChild(div);
    })
}

// Evento de Adição de um novo Carro
btn_add.addEventListener('click', (event) => {
    if (inp_name.value == '') {
        alert("[ERROR] Insira um Nome!");
    } 
    else if (Number(inp_doors.value) == 0) {
        alert('[ERROR] Insita o número de Portas!');
    } 
    else if (inp_normalType.checked) {
        const normalCar = new Carro(inp_name.value, Number(inp_doors.value));
        arr_cars.push(normalCar);
    } 
    else {
        const militaryCar = new Militar(inp_name.value, Number(inp_doors.value), Number(inp_shield.value), Number(inp_armor.value));
        arr_cars.push(militaryCar);
    }

    inp_name.value ='';
    inp_doors.value = 0;
    inp_name.focus();
    manageCars();
})