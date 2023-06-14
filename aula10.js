let prompt = require('prompt-sync')();
/*
console.log(" 1. ----------exercício----------------");
// Em uma competiçãode salto em distância cada atleta tem direito a cinco saltos.
//No final sa série de saltos de cada atleta, o melhor e o pior resultados são eliminados.
//O seu resultado fica sendo a média dos três valores restantes.
//Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta
//em seus saltos e depois informe a média dos saltos conforme a decrição acima informada
//(retirar o melhor e o pior salto e depois calcular a média).
//faça uso de uma lista para armazenar os saltos.
//Os saltos são informados na ordem de execução, portanto não são ordenados.
//A saída do programa deve ser conforme o exemplo abaixo:
// Atleta: Rodrigo Curvêllo
// Primeiro Salto:  6.5m
// Segundo salto: 6.1m
// Terceiro salto: 6.2m
// Quarto salto: 5.4m
// quinto salto: 5.3m
// Melhor salto: 6.5m
// Pior salto: 5.3m
// Média dos demais saltos: 5.9m
// Resultado Final:
// Rodrigo Curvêllo: 5.9m
let s = 0;
let saltos = Array()
let soma=0;
for(s=0; s<5;s++){
    saltos[s] = Number(prompt('Distância do salto: '));
    //console.log("indice" ,[s]);
    saltos[s] = saltos[s];
    soma += saltos[s];   // guardar a soma dos valores do array par aa media depois
}
console.log("saltos array",saltos);
let maior =saltos[0];  // atribuir em 0 para 
let menor = saltos[0];
let maiorSalto = 0;
let menorSalto =0;
let media = 0;
for(m=0; m<saltos.length; m++){   
    if (saltos[m] > maior){
        maior = saltos[m]; // guardar o valor maior do array
        maiorSalto = maior;
    }
    if (saltos[m] < menor ){
        menor = saltos[m];  // guardar o valor menor do array
        menorSalto = menor; 
    }
}
console.log ("O maior salto: ", maior);
console.log ("O menor salto: ", menor);
media = (soma - (maior + menor))/5;
console.log("A média dos valores restantes é: ", media)
*/
console.log("exercicio: ordem crescente-------------------")
// com a entrada dos 3 valores, ordena-los de forma crescente;
// if, else if, else - Guilherme
let numeros =Array();
let v = 0;
let vetor =0;
let nMaior = 0;
let nummaior = 0;
let nummenor = 0;
let nMenor = 0;
let nMedio = 0;
for(v=0; v<3;v++){
    numeros[v] = Number(prompt('Digite 1 valor: '));
    vetor[v] += numeros;
    console.log(numeros)
}
for(a=0; a<=numeros.length;a++){
    if(numeros[a] > nMaior){
        nMaior = numeros[a];
        nummaior = nMaior;
    }
    if(numeros[a] < nMenor){
        nMenor = numeros[a];
        nummenor = nMenor;
    }
    if(nMaior[a] - nMenor[a]){
        nMedio = numeros[a]
    }
}
console.log("numero maior" ,nMaior);
console.log("numero menor" ,nMenor);
//for() // teste crescente



//console.log("exercicio antigos, usar com função-------------------")