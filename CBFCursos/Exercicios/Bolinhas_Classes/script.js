const field = document.querySelector(".field");
const num_objetos = document.querySelector("#num_objetos");
const qtd_objetos = document.querySelector("#qtd_objetos");
const btn_add = document.querySelector("#btn_add");
const btn_remove = document.querySelector("#btn_remove");

let heightField = field.offsetHeight;
let widthField = field.offsetWidth;
let balls = [];
let countBalls = 0;

class Ball {
    constructor(arr_balls, field, id) {
        this.length = Math.round(Math.random()*15 + 10);

        this.red_color = Math.round(Math.random()*255);
        this.green_color = Math.round(Math.random()*255);
        this.blue_color = Math.round(Math.random()*255);
        
        this.pos_x = Math.floor(Math.random()*(widthField - this.length));
        this.pos_y = Math.floor(Math.random()*(heightField - this.length));
        this.speed_x = Math.floor(Math.random()*2) + 0.5;
        this.speed_y = Math.floor(Math.random()*2) + 0.5;
        this.dir_x = (Math.random()*10) > 5 ? 1 : -1;
        this.dir_y = (Math.random()*10) > 5 ? 1 : -1;
        
        this.field = field;
        this.arr_balls = arr_balls;
        this.id = id; 
        
        this.draw();
        this.control = setInterval(this.controlMove.bind(this), 10);
        this.me = document.getElementById(this.id);
    }
    positionBall() {
        return this.arr_balls.indexOf(this);
    }
    delete() {
        clearInterval(this.control);
        balls = balls.filter((elem) => {
            if(elem.id != this.id) {
                return elem;
            }
        });
        this.me.remove(); // Remove os nodes
        countBalls--;
        num_objetos.innerHTML = countBalls;
    }
    draw() {
        const div = document.createElement("div");
        div.setAttribute("id", this.id);
        div.setAttribute("class", 'ball');
        div.setAttribute("style", `left: ${this.pos_x}px; top: ${this.pos_y}px; width: ${this.length}px; height: ${this.length}px; background-color: rgb(${this.red_color}, ${this.green_color}, ${this.blue_color})`);
        this.field.appendChild(div);
    }
    controlEdges() {
        if (this.pos_x + this.length >= widthField) {
            this.dir_x = -1;
        } else if (this.pos_x <= 0) {
            this.dir_x = 1;
        }

        if (this.pos_y + this.length >= heightField) {
            this.dir_y = -1
        } else if (this.pos_y <= 0) {
            this.dir_y = 1;
        }
    }
    controlMove() {
        this.controlEdges();
        this.pos_x += this.dir_x * this.speed_x;
        this.pos_y += this.dir_y * this.speed_y;
        this.me.style.left = `${this.pos_x}px`;
        this.me.style.top = `${this.pos_y}px`;

        // this.me.setAttribute("style", `left: ${this.pos_x}px; top: ${this.pos_y}px; width: ${this.length}px; height: ${this.length}px; background-color: rgb(${this.red_color}, ${this.green_color}, ${this.blue_color})`);

        if ((this.pos_x > widthField) || (this.pos_y > heightField)) {
            this.me.delete(); 
        }
    }
}

window.addEventListener("resize", (event) => {
    heightField = field.offsetHeight
    widthField = field.offsetWidth;
});

btn_add.addEventListener("click", (event) => {
    const qtd = qtd_objetos.value;

    for (let i = 0; i < qtd; i++) {
        const new_ball = new Ball(balls, field, countBalls);
        countBalls++;
        num_objetos.innerHTML = countBalls;

        balls.push(new_ball);
    }
    
    qtd_objetos.focus();
    qtd_objetos.value = 0;
});

btn_remove.addEventListener("click", (event) => {
    if (countBalls > 0) {
        balls.map((elem) => {
            removeBall(elem);
        });
        countBalls = 0;
    } else {
        alert("Não existem Bolas Criadas!");
    }
});

function removeBall (ball) {
    balls.map((elem) => {
        elem.delete();
    })
}