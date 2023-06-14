// open folder e abrir a minha pasta.
// new folder para criar nova pagina dentro da minha pasta

/* 
0 - 400.00        15%
400.0 -800.00     12%
800.01 - 1200.00  10%
1200.01 - 2000.00 7%
2000.01 +         4%

entrada
salario com ponto flutuante

exemplo saída

novo salário: 460.00
reajuste ganho: 60.00
em percentual: 15%
*/

const salario = 400.00
const per15 = salario*0.15
const per12 = salario*0.12
const per10 = salario*0.10
const per7 = salario*0.07
const per4 = salario*0.04

if (salario <= 400){
    console.log("Seu salário foi reajustado em 15%. Então seu reajuste será de" ,per15, " reais. Seu novo salário será de " , (salario+per15), " reais.")
}
else if (salario >= 400.01 && salario <= 800.00){
    console.log("Seu salário foi reajustado em 12%. Então seu reajuste será de" ,per12, " reais. Seu novo salário será de " , (salario+per10), " reais.")
}
else if (salario >= 800.01 && salario <= 1200.00){
    console.log("Seu salário foi reajustado em 10%. Então seu reajuste será de" ,per10, " reais. Seu novo salário será de " , (salario+per15), " reais.")
}
else if (salario >= 1200.01 && salario <= 2000.00){
    console.log("Seu salário foi reajustado em 7%. Então seu reajuste será de" ,per7, " reais. Seu novo salário será de " , (salario+per7), " reais.")
}
else if (salario >= 2000.01){
    console.log("Seu salário foi reajustado em 4%. Então seu reajuste será de" ,per4, " reais. Seu novo salário será de " , (salario+per4), " reais.")
}
console.log(" ")
console.log("-----------------------------NOVO EXERCÍCIO--------------------------------")

/* dizer em qual intervalos esta o valor de entrada ([0,25] , [25,50] , [50,75] , [75,100])
exemplos
valor de entrada 25.00   intervalo [0,25]
valor de entrada 25.01   intervalo [25,50]
fora do intervalo */

const valor = 102


if (valor >=0 && valor <25){
    console.log("O valor está no intervalo de [0,25]")
}
if (valor >=25 && valor <50){
    console.log("O valor está no intervalo de [25,50].")
}
if (valor >=50 && valor <75){
    console.log("O valor está no intervalo de [50,75].")
}
if (valor >=75 && valor <=100){
    console.log("O valor está no intervalo de [75,100].")
}
if (valor > 100){
    console.log("O valor está fora do intervalo.")
}
console.log(" ")
console.log("-----------------------------ARRAY--------------------------------")

// array

const familia = ['pai', 'mae', 'filho'];
console.log(familia);
console.log(familia[0]);

const familia2 = ['5' , 'mae' , true];
console.log(familia2[2]);


console.log(" ")
console.log("-----------------------------FOR E LET--------------------------------") 

// for
for(let i=0; i<5; i++){
    console.log("Estou aprendendo")
}


console.log(" ")
console.log("-----------------------------NOVO EXERCÍCIO--------------------------------") 

// printar se os numeros sao par ou impar
// exemplo valor de entrada e mostrar quais sao par e impar
// const par n%2 == 0;
// const impar n%2 ==1;

for(let n=0; n<8; n++){
    if (n%2 == 0)
    console.log("O numero", n, "é par");
    if (n%2 == 1)
    console.log("O numero", n, "é impar");
}

console.log(" ")
console.log("-----------------------------NOVO EXERCÍCIO--------------------------------")

// criar um algoritmo que some todos os multiplos de 3 e de 5 e somar todos os numeros
// numero de entrada = 20
                                 
for(let m=0; m<20; m++){
    if (m%3==0){
    console.log("O numero", m, "é multiplo de 3");
    }
    if (m%5==0){
    console.log("O numero", m, "é multiplo de 5");
}
}
console.log(" A soma dos numeros é de " )

console.log(" ")
console.log("-----------------------------NOVO EXERCÍCIO teste--------------------------------")

let n3 = 3;
let n5 = 5;
let soman3 = 0;
let soman5 = 0;

for(let m=0; m<=20; m++){
    if (m % 3 == 0){
    console.log("O numero", m, "é multiplo de 3");
    }
    if (m % 5 == 0){
    console.log("O numero", m, "é multiplo de 5");
}
}
for(let m=0; m<=20; m++){ 
    if (m % 3 === 0){
        soman3 += m;
    }
    if (m % 5 === 0){
        soman5 += m;  
    }
}
console.log("soma", soman3 + soman5 )  