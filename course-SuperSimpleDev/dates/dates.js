let allDates = []

function add() {
    let name = document.querySelector('input.name')
    let dateObjt = new Date()
    dateObjt = document.querySelector('input.date')
    let outPut = document.querySelector('div.outPut')
    
    let date = new Date(dateObjt.value)
    
    allDates.push({
        name: `${name.value}`,
        date: `${date}`
    })

    outPut.innerHTML = ' '
    for (let i = 0; i < allDates.length; i++) {
        let dateAux = new Date( allDates[i].date)

        outPut.innerHTML += `${allDates[i].name} - ${dateAux.getDate()}<br>`
    }
}