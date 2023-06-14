let prompt = require('prompt-sync')();
/*
console.log("-1.exercicio-------------------------");
// O Sr.Manoel Joaquim possui uma grande loja de artigos de R$ 1.99, com cerca de 10 caixas.
///Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu uma tabela que contém o número
//de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa
//apenas contar quantos itens o cliente está levando e olhar na tabela de preços.
//Você foi contratado para desenvolver o programa que monta esta tabela de preços,
//que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:
//Lojas Quase Dois = tabela de preços:
//1- R$ 1,99
//2- R$ 3,98
// ...
//50- R$ 99,50

console.log("Loja Quase Dois = Tabela de preços:");
let preco = 1.99;
let itens = 1;
while(itens < 51){
    console.log(itens, "Total R$: " ,(itens * 1.99));
    itens = itens +1;
}
*/

console.log("-2.exercicio-------------------------");
//o Sr.Manoel Joaquim expandiu seus negócios para além dos negócios de 1.99 e
//agora possui uma loja de conveniências.
//Faça um programa que implante uma caixa registradora rudimentar.
//O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias.
//Um valor zero deve ser informado pelo operador para indicar o final da compra.
//O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu,
//para então calcular e mostrar o vaor do troco. 
//Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:
// Lojas Tabajara:
//Produto 1: R$ 2.20
//Produto 2: R$ 5.80
//Produto 3: 0
//Total: R$ 9.00
//Dinheiro: R$20.00
//Troco: R$11.00
let i = 0;
let t = 0;
let totalDaCompra = 0;
let lista = Array();
do{
    lista[i] = Number(prompt('Insira o valor do produto? '));  
    console.log(lista);     
        console.log("Produto" ,i,": R$" , lista[i]);
        i++;
        console.log(lista)
} while (lista[i - 1] !== 0)
    console.log("---* * * encerrar compra * * *---")
    //errado
for(t=0; t<lista.length; t++){
    totalDaCompra += lista[t];
}
console.log("Total da compra: " ,totalDaCompra);
let dinheiro = Number(prompt('Dinheiro do cliente: '));
let troco = Number(dinheiro - totalDaCompra);
console.log("Troco", troco);
console.log(" ======== Compra Encerrada! ========")

/*
console.log("-3.exercicio:temperatura---------------------------------");
//O departamento Estadual de Meteorologia lhe contratou para desenvolver um programa
//que leia as temperaturas de um conjunto indeterminado de temperaturas, e informe ao final
//a menor e a maior temperaturas informadas, bem como a média das temperaturas.
let maior = 0;
let temperaturas = 0;
let lista2 = Array();
let a = 0;
for(a=1; a<4; a++){
    lista2[a] = Number(prompt('Digite a temperatura em graus celsius: '))
    temperaturas += lista2[a];
}
console.log("lista",lista2);

let menor = lista2[1];
for(m=1; m<=lista2.length; m++){
    if (lista2[m] > maior){
        maior = lista2[m];
    }
    if ( lista2[m] < menor ){
        menor = lista2[m];
            console.log(menor);
    }
    
}
let media = Number(temperaturas/3);
console.log("A temperatura maior foi de" , maior);  
console.log("A temperatura menor foi de" , menor);  
console.log("A media das temperaturas é" ,media);


if (temperatura <0 ){
    console.log("temperatura inválida");
        if(contador +=1){
            soma +=temperatura;
             if(temperatura < menor){
                  menor = temperaturaMenor;
                }
                if(temperatura > maior){
                    maior = temperaturaMaior;
                }
            }
        }
    }  
     */