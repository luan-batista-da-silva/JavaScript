let valores = [1, 2];

const op = [
    (val) => {
        let res = 0;
        for (v of val) {
            res += v;
        }
        return res;
    },
    (val) => {
        let res = 1;
        for (v of val) {
            res  *= v;
        }
        return res;
    },  
    (val) => {
        for (v of val) {
            console.log(v);
        }
    }
]

console.log(op[1](valores));
    // É dessa foma que se pode chamar a função que está localizada dentro de um array