// ================ MÉTODO MAP =================

/*

-> PRIMEIRA FORMA DE SE USAR O MAP

    const cursos = ['HTML', 'CSS', 'JS', 'PHP', 'React'];

    cursos.map((elem, index) => {
        console.log('Curso: ' + elem + ' - Posição do Curso: ' + index)
    });
        // Esse método é utilizado para percorrer todos os elementos de um array

*/


/*

-> SEGUNDA FORMA DE SE USAR O MAP

    const converterInt = (e) => parseInt(e);

    const dobrar = (e) => e*2;

    let num = ['1', '2', '3', '4'];
    console.log(num);
    console.log(num.map(converterInt));
    console.log(num.map(dobrar));

*/

// -> TERCEIRA FORMA DE SE USAR O MAP

const el = document.getElementsByTagName("div");

const val = Array.prototype.map.call(el, ({innerHTML})=>innerHTML);
console.log(val);