/*
let nameList = []
let dateList = []



let todoList = JSON.parse(localStorage.getItem('todoList')) || {
    nameList: [],
    dateList: []
}

let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}
*/



let todoListArmazem = JSON.parse(localStorage.getItem('todoList')) || {
    todoList: []
}

let countTamList = 0

console.log(todoListArmazem)

updateList()
let intervalo = setInterval(relogio, 1000)


// function putInOrder() {
//     let indexAux

//     for (let i)
// }

function relogio() {
    let divRelogio = document.querySelector('.divRelogio')
    let dataAtual = new Date()
    let horas = dataAtual.getHours()
        horas = horas < 10 ? "0" + horas : horas
    let minuto  = dataAtual.getMinutes()
        minuto = minuto < 10 ? "0" + minuto : minuto
    let segundo = dataAtual.getSeconds()
        segundo = segundo < 10 ? "0" + segundo : segundo

    let semana = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"]
    
    let dia = dataAtual.getDate()
        dia = dia < 10 ? "0" + dia : dia
    let mes = dataAtual.getMonth() + 1
        mes = mes < 10 ? "0" + mes : mes


    divRelogio.innerHTML = `${dia}/${mes}/${dataAtual.getFullYear()} - ${semana[dataAtual.getDay()]} - ${horas}:${minuto}:${segundo}`
}

function updateList() {
    // let res = document.querySelector('div.resTodoList')
    // let semana = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"]

    // if (localStorage.todoListArmazem) {
    //     todoList = JSON.parse(localStorage.getItem('todoList'))
    // }

    // res.innerHTML = ' '
    // for (let i = 0; i < countTamList; i++) {
    //     let dateAux = new Date(todoList[i].data.value)
        
    //     let weekDay = new Date(dateAux.getFullYear(), dateAux.getMonth(), dateAux.getDate() + 1, dateAux.getDay() + 1)

    //     let dia = weekDay.getDate()
    //         dia = dia < 10 ? "0" + dia : dia
    //     let mes = weekDay.getMonth() + 1
    //         mes = mes < 10 ? "0" + mes : mes

    //     res.innerHTML += `
    //         <div>${todoList[i].nome.value}</div>
    //         <div>${dia}/${mes}/${weekDay.getFullYear()} - ${semana[weekDay.getDay()]} </div>
    //         <button class="delButton" onclick="todoListDel(${i})">Delete</button>
    //     `
    // }
/*
    // putInOrder()

    let res = document.querySelector('div.resTodoList')
    let semana = ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"]
    
    if (localStorage.todoNameList && localStorage.todoDateList) {
        nameList = JSON.parse(localStorage.getItem('todoNameList'))
        dateList = JSON.parse(localStorage.getItem('todoDateList'))
    }

    

    // nameElem.innerHTML = ' '
    // dateElem.innerHTML = ' '
    // delElem.innerHTML = ' '

    res.innerHTML = ' '
    for (let i = 0; i < nameList.length; i++) {
        let dateAux = new Date(dateList[i])
        
        let weekDay = new Date(dateAux.getFullYear(), dateAux.getMonth(), dateAux.getDate() + 1, dateAux.getDay() + 1)

        let dia = weekDay.getDate()
            dia = dia < 10 ? "0" + dia : dia
        let mes = weekDay.getMonth() + 1
            mes = mes < 10 ? "0" + mes : mes

        weekDay.toLocaleDateString("pt-br", options)
        

            res.innerHTML += `
                <div>${nameList[i]}</div>
                <div>${dia}/${mes}/${weekDay.getFullYear()} - ${semana[weekDay.getDay()]} </div>
                <button class="delButton" onclick="todoListDel(${i})">Delete</button>
            `
    }
*/
    
}

function todoListAdd() {
    let name = document.querySelector('input.todoName')
    let res = document.querySelector('div.resTodoList')
    let dateElem = new Date()
        dateElem = document.querySelector('input.todoDate')
    
    let date = new Date(dateElem.value)

    if (localStorage.todoListArmazem) {
        todoList = JSON.parse(localStorage.getItem('todoList'))
    }

    todoListArmazem.todoList.push({
        nome: `${name.value}`,
        data: `${date}`
    })

    countTamList++

    localStorage.todoListArmazem = JSON.stringify(todoList)

    console.log(todoListArmazem.todoList[0].nome)

    console.log(todoListArmazem)

/*
    let name = document.querySelector('input.todoName')
    let dateObjt = new Date()
    dateObjt = document.querySelector('input.todoDate') 

    let date = new Date(dateObjt.value)

    if(localStorage.todoNameList) {
        nameList = JSON.parse(localStorage.getItem('todoNameList'))
    }
    if(localStorage.todoDateList) {
        dateList = JSON.parse(localStorage.getItem('todoDateList'))
    }

    nameList.push(name.value)
    dateList.push(date)

    console.log(date)

    localStorage.todoNameList = JSON.stringify(nameList)
    localStorage.todoDateList = JSON.stringify(dateList)

    updateList()

    name.value = ''
    date.value = ''
    name.focus()
*/
}

function todoListDel(pos) {
/*
    nameList.splice(pos, 1)
    dateList.splice(pos, 1)

    localStorage.todoNameList = JSON.stringify(nameList)
    localStorage.todoDateList = JSON.stringify(dateList)
    updateList()
*/
}