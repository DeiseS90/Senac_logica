let prompt = require('prompt-sync')();
/*
console.log("1.----------------exercicio: quantos par e impar-----------")
// Faça um programa que peça 10 números inteiros, calcule e mostre
// a quantidade de números pares e a quatidade de ímpares
let im = 0;
let pa = 0;

for(n=0 ; n<10; n++){
    let n = prompt('Digite 10 números: ');
    if(n%2 == 0){
        pa ++;
        }   
    else if(n%2 != 0){
        im ++;
        }
}
console.log("De todos os números, " ,pa, " são pares. E " , im, " são impares.");


console.log("2.----------------exercicio: exponenciacao-----------")

//Faça um programa que peça 2 números, base e expoente, 
//calcule e mostre o primeiro número elevado ao segundo.
//Não utilize a função de potência da linguagem.
// 2x(3) = 2x2x2 =8
let base= 0;
let expo = 0;
let conta = 1;
base = prompt('Digite um número para base: ')
expo = prompt('Digite um número para expoente: ')


for(a=0; a<expo; a++){
    conta *= base;
}
console.log(" conta" , conta)

*/
console.log("3.---------exercicio: CDs valor total e média do custo-------")

// Faça um programa que calcule o valor total investido por um colecionardor 
// em sua coleção de CDs e o valor médio gasto em cada um deles.
// O usuário deverá informar a quantidade de CDs e o valor para cada um.
// >> definir um array para quantos cds. Total investido  e média do custo
//definir for para os valores


//let custo_total = quantos_cds*custo;
//let media_valor = custo; 
/*
let c = Number(prompt('Quantos CDs você tem? '));
let quantos_cds = Array(c);

let custo_cds = 0;

for(i=0; i<=quantos_cds.lengt; i++){
    quantos_cds[i] = Number(prompt('Qual o custo de cada CD? '));
}

//console.log("Custo total" ,custo_total , "média" , media_valor)
*/

let quantos_cds = Number(prompt('Quantos CDs você tem? '));
let custo_cds = Array(quantos_cds);
let custo_total = 0;
let custo_medio = 0;

for(let i=1; i<=quantos_cds; i++){
    custo_cds[i] = Number(prompt('Qual o custo de cada CD? '));
    custo_total += custo_cds[i];
}
custo_medio = (custo_total / quantos_cds);
console.log(" Custo total de CDs é:" , custo_total, ". E o custo médio é de: " , custo_medio)

// no prompt usa sempre com crase( quando usar variável no meio do texto)
//  ou aspas simples( quando usar só texto)