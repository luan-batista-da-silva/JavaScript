let calculation = localStorage.getItem('calculation') || ''
let res = document.querySelector('div.res')

calculateOrClear()

function updateCalculation(key) {
    calculation += key

    res.innerHTML += key

    localStorage.setItem('calculation', calculation)
}

function calculateOrClear() {
    res.innerHTML = `${calculation}`
}