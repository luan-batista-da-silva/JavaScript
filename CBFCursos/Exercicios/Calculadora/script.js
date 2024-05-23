const on_key = document.querySelector("#t-onOff");
const nums_keys = [...document.querySelectorAll(".num")];
const operations_keys = [...document.querySelectorAll(".op")];
const res_key = document.querySelector(".res");
const display = document.querySelector("#display");
const clear_key = document.querySelector('#tClear');
const copy_key = document.querySelector('#t-Copy');
const inpu_test = document.querySelector("#teste");

const btn_expand = document.querySelector("#btn_expand");

const calc = document.querySelector(".calc");

let op = false;
let decimal  = false;

nums_keys.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        if (display.innerHTML == "0" && elem.innerHTML != '.') {
            display.innerHTML = '';
            display.innerHTML += elem.innerHTML;
        } else if (elem.innerHTML == '.') {
            if (!decimal) {
                decimal = true;
                if (display.innerHTML == '0') {
                    display.innerHTML = '0.';
                } else if (op) {
                    display.innerHTML += '0.';
                } else {
                    display.innerHTML += elem.innerHTML;
                }
            }
        } else {
            display.innerHTML += elem.innerHTML;
        }
        op = false;
    })
});

operations_keys.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        if (!op) {
            op = true;
            decimal = false;
            if (display.innerHTML == '0') {
                display.innerHTML = '';
            }
            if (elem.innerHTML == 'x') {
                display.innerHTML += "*";
            } else {
                display.innerHTML += elem.innerHTML;
            }
        }
    })
});

clear_key.addEventListener('click', (event) => {
    display.innerHTML = 0;
    op = false;
    decimal = false;
});

res_key.addEventListener('click', (event) => {
    op = false;
    decimal = false;
    try {
        const res = eval(display.innerHTML);
    } catch {
        alert('[ERROR]');
    }

});

copy_key.addEventListener('click', (event) => {
    navigator.clipboard.writeText(display.innerHTML);

    // inpu_test.select(); // Para não ter problemas com dispositivos mobile
    // inpu_test.setSelectionRange(0,99999); // Mobile
    // navigator.clipboard.writeText(inpu_test.value);
});

btn_expand.addEventListener("click", (event) => {
    const thatDisplay = event.target.parentNode.parentNode.children[0].style.display;

    if (thatDisplay == 'none') {
        event.target.parentNode.parentNode.children[0].style.display = "flex";
        btn_expand.innerHTML = "expand_less";
        btn_expand.style.color = "red";
    } else {
        event.target.parentNode.parentNode.children[0].style.display = "none";
        btn_expand.innerHTML = "expand_more";
        btn_expand.style.color = "white";
    }

})