 
console.log("1.----------exercício: imprimir os numeros não primos----------");
//primos: 2 - 3 - 5 - 11 - 13 - 17 - 19
//let primo = false;
//let primo = false;
for (let n=2; n<=20; n++){
    let primo = false;

    for (let p=2; p<n; p++){
        if(n%p == 0){
            primo = true
        }
    }
if (primo){
console.log( n, " não é primo")
}
}

console.log("2.----exercício: imprimir a média do numeros não primos até 20-----");

// não primos: 1 - 4 -6 - 7 - 8 - 9 - 10 - 12 - 14 - 15 - 16 - 18 - 20
let vetor = [1,4,6,8,9,10,12,14,15,16,18,20]
let media = 0;
let soma = 0;
console.log(vetor);
for(let m in vetor){
    soma = soma + vetor[m]
}
console.log("média =" , soma/2 )

console.log("3.---------------exercício: fibonacci ----------");
/*  dez termos. O 1: =0    e o   2: =1
 3: 0+1 = 1
 4: 1+1 = 2
 5: 1+2 = 3
 6: 2+3 = 5
 7: 3+5 = 8
 8: 5+8 = 13   */
let posicao = 10;
let primeiro = 0;
let segundo = 1;
let terceiro =0;

for(let numero = 2; numero<posicao; numero++){
    terceiro = primeiro + segundo;
        primeiro = segundo;
        segundo = terceiro;
console.log(primeiro, "+" ,segundo, "=" , terceiro);
}

console.log("4.-----exercício: vetor ate 20 numeros - vertical e horizontal ----");
//criar vetor de 20 numeros e imprimir na vertical e na horizontal

let a=0;
let v = 0;
let horizontal = 0;
for(a=1; a<=20; a++){
    horizontal += a + " ";
    console.log(a);
}
console.log(horizontal);

console.log("5.------------exercício: input----------");

/*desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer
numero inteiro entre 1 e 10.
O usuario deve informar de qual numero ele deseja ver a tabuada.
A saída deve ser conforme o exemplo abaixo:
tabuada de 5:
5x1 = 5
5x2 = 10
---
5x10 = 50
*/
let prompt = require('prompt-sync')();
let numero = 0;
let tabuada = 0;
let contador = prompt("Você deseja a tabuada de qual numero? ")

for(numero=0 ; numero<11; numero++){
    tabuada = (numero * contador);
        console.log("tabuada" ,contador, "x" ,numero, " =" , tabuada)
}