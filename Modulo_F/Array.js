/*
-> Declarando um array no JS
    - let num = [5, 8, 4, 151, 52]
        // Atribuição direta

    - num[3] = 6 
            No JS tem como acrescentar slots para variáveis a mais, é so fazer dessa forma,
            pois o JS percebe que não há a possição e acrescenta
      
    
-> Outra forma de acrescentar Valores ao Array
    - num.push(7)
        Aqui nesse comando o JS vai no vetor e cria a última possição, colocando seu
        índice correspondente e adicionando o valor indicado entre os () da função
   

-> Como saber o tamanho do Array
    - num.length
         
            Não recebe parênteses no final por ser um atributo não um função, e
            retorna o tamanho do array
        

-> Organização por Qsort
    - num.sort()
   
        No JS essa função realiza o método qsort e organiza o array em ordem crescente
        de valores
    
*/

// Imprimindo Usando o For
console.log('Imprimindo usando For\n')
let valores = [15, 289, 36, 5, 8]

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`Posição ${pos} tem o valor ${valores[pos]}`)
}



// Imprimindo usando a estrutura For-In
console.log('\nImprimindo usando For-In\n')
for (let c in valores) {
    console.log(`Posição ${c} tem o valor ${valores[c]}`)
}


    /*
        O for-in é usado para percorrer todos os valores do array de modo que use menos
        comparadores dentro do for, somente usando o for-in
    */

// Função que Faz uma busca de Valores nos Vetores
    /*
        num.indexof(7) -> O JS irá procurar o elemento ao qual foi inserido no parenteses
                            dentro do vetor, retornando o índice ao qual se encontra, e 
                            se não houver o valor ele retornará -1
    */
let posicao = valores.indexOf(15)

console.log(`O valor 15 está na posição ${posicao}`)