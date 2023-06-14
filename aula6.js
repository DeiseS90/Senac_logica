 console.log("1.-----------------------while e do while----------");
//  while : enquanto >>>>  1.primeiro vai checar a condição e 
//          2. depois então vai testar a condição
let i = 0;
while(i<4){
    console.log("ola");
    i++;
}

//  do while : faça enquanto >>>>     1. primeiro vai testar uma vez e 
// 2.depois vai checar a condição e   3.depois testar para ver se vai contnuar repetindo
let j = 0;
do{
    console.log('ola');
    j++;
}while (j<5)

console.log("2.-----------------------prompt-sync----------");

var prompt = require('prompt-sync')();
let idade = prompt ('Qual a sua idade?');

if(idade >18){
    console.log("bem vindo");
}

console.log("3.-----------------------exercicio repetido ----------");
// a partir do vetor de exemplo, printar se existe algum valor repetido dentro do vetor
// vetor = [1,2,4,6,1,5]
// exemplo de saída:  existem elementos repetidos? Não existem elementos repetidos?

let vetor = [1,2,4,8,2,5];
let repetido = false;
let v = 0;
let n=0;
console.log(vetor);
for(v=0; v<vetor.length; v++){
    for(let n=vetor.length; n>v ; n--)
        if(vetor[v] == vetor[n]){
            repetido = true;
    }
}
if(repetido){
console.log("tem repetido");
}
else{
console.log("não tem repetido");
}