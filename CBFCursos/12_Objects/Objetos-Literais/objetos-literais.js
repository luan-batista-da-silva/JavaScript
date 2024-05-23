const btn_add = document.querySelector('#btn_add');
const res = document.querySelector('.res');
let pessoas = [];

const addPessoas = () => {
    res.innerHTML = '';
    pessoas.map((elem) => {
        const div = document.createElement('div');
        div.setAttribute("class", 'pessoa');
        
        div.innerHTML = `Nome.: ${elem.getName()} <br>Idade.: ${elem.getAge()}`;
        
        res.appendChild(div);
    })
}

btn_add.addEventListener('click', (event) => {
    const name = document.querySelector('#firstName');
    const age = document.querySelector('#age');
    
    const Pessoa = {
        name: '',
        age: '',
        getName: function() {
            return this.name;
        },
        getAge: function() {
            return this.age;
        },
        setName: function(nome) {
            this.name = nome;
        },
        setAge: function(idade) {
            this.age = idade;
        }
    }
    
    Pessoa.setName(name.value);
    Pessoa.setAge(Number(age.value));
    
    pessoas.push(Pessoa);

    name.value = '';
    age.value = '';
    name.focus();    

    addPessoas();
})
