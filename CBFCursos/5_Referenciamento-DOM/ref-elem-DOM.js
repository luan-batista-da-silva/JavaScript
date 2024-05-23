const caixa1 = document.querySelector('#caixa1');
const bnt_c = [...document.querySelectorAll('.curso')]

/*

-> .children
    console.log(caixa1.children);

->  .children[..]
    console.log(caixa1.children[0]); 
        // É possível escolher qual elemento quero pegar

->  .lastElementChild
    console.log(caixa1.lastElementChild);
        // Retorno o último elemento filho

-> .getRootNode()
    console.log(caixa1.getRootNode()); 
        // Document é sempre o nó raiz

->  .ownerDocument
    console.log(caixa1.ownerDocument); 
        // O proprietário tbm é o Document
*/

    console.log(caixa1.hasChildNodes());
        // Retorna true ou false se tem nodes dentro (Considera até o Text)
    
    console.log(bnt_c[0].children.length > 0 ? "Possui Filhos" : "Não possui Filhos");

        // if (bnt_c[0].children.length > 0) {
        //     console.log("Possui Filhos");
        // } else {
        //     console.log("Não possui filhos");
        // }
            
    
