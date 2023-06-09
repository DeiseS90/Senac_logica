var prompt = require('prompt-sync')();

console.log("-----------trabalho final-----------")
// O cardápio de uma lanchonete é o seguinte:
// Especificação          código            preço
// Cachorro quente        100               R$ 1,20
// Bauru simples          101               R$ 1,30
// Bauru com ovo          102               R$ 1,50
// Hamburguer             103               R$ 1,20
// Cheeseburguer          104               R$ 1,30
// Refrigerante           105               R$ 1,00
// Faça um programa que leia o codigo dos itens pedidos e as quantidades desejadas. Calcule e mostre o valor a ser pago por item (preço * quantidades) e o total geral do pedido. O pedido é encerrado quando o cliente digitar o codigo 999. Controlar para que o cliente digite os codigos do menu.
console.log(" ");
console.log("================ LANCHES =======================");
console.log("-  CODIGO 100   - R$ 1.20 -   Cachorro quente  -");
console.log("-  CODIGO 101   - R$ 1.30 -   Bauru simples    -");
console.log("-  CODIGO 102   - R$ 1.50 -   Bauru com ovo    -");
console.log("-  CODIGO 103   - R$ 1.20 -   Hamburguer       -");
console.log("-  CODIGO 104   - R$ 1.30 -   Cheeseburguer    -");
console.log("-  CODIGO 105   - R$ 1.00 -   Refrigerante     -");
console.log("================================================");
let codigo_produto = Array();
let total_pedido = 0;
let quantidade = Array();
let qtde = 0;
let cod100 = 0;
let cod101 = 0;
let cod102 = 0;
let cod103 = 0;
let cod104 = 0;
let cod105 = 0;
do{
    console.log(" "); 
    codigo_produto = Number(prompt('Digite o CODIGO do lanche:  '));
    if(codigo_produto >=100 && codigo_produto <=105){ 
        quantidade = Number(prompt(' Digite a quantidade deste lanche: '));
        if(quantidade !== 999 && quantidade >= 0 ){  
            console.log(" > São " ,quantidade, " unidades do lanche cód.", codigo_produto);     
            qtde += quantidade;                
            switch( codigo_produto){
                case 100:
                    cod100 += (quantidade * 1.20);
                    console.log(" = cod.100-Cachorro quente: total=", cod100,"reais");
                    break;
                case 101:
                    cod101 += (quantidade * 1.30);
                    console.log(" = cod.101-Bauru simples: total=", cod101,"reais");
                    break;
                case 102:
                    cod102 += (quantidade * 1.50);
                    console.log( "= cod.102-Bauru com ovo: total=", cod102,"reais");
                    break;
                case 103:
                    cod103 += (quantidade * 1.20);
                    console.log(" = cod.103-Hamburguer: total=", cod103,"reais");
                    break;
                case 104:
                    cod104 += (quantidade * 1.30);
                    console.log(" = cod104-Cheeseburguer: total=", cod104,"reais");
                    break;
                case 105:
                    cod105 += (quantidade * 1.00);
                    console.log(" = cod.105-Refrigerante: total=", cod105,"reais");
                    break;
                }
        } else { 
            console.log("- - - - - -..QUANTIDADE  INVÁLIDA..- - - - - - - -")
            console.log(" ");
        }           
    } else { 
        console.log("- - - - - - -..CÓDIGO  INVÁLIDO..- - - - - - - - -")
        console.log(" ");
    }
} while(quantidade !== 999 && codigo_produto !== 999 );
    console.log("* - * - * - * FINALIZANDO SEU PEDIDO; * - * - * - *");

console.log("Valor total do cod 100: ", cod100, "reais- cachorros quentes");
console.log("Valor total do cod 101: ", cod101, "reais- baurus simples");
console.log("Valor total do cod 102: ", cod102, "reais- baurus com ovos");
console.log("Valor total do cod 103: ", cod103, "reais- hamburgueres");
console.log("Valor total do cod 104: ", cod104, "reais- cheeseburgueres");
console.log("Valor total do cod 105: ", cod105, "reais- refrigerantes");
console.log(" ");
console.log("Total de lanches pedidos:",qtde, "unidades");
total_pedido = (cod100 + cod101 + cod102 + cod103 + cod104 + cod105);
console.log("Valor total do pedido: R$ ", total_pedido, " reais.");
console.log(" ");
console.log("================ PEDIDO ENCERRADO =================");
console.log(" ");