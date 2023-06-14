console.log ("-----------------------exercicio achar numeros primos até 20-----------------")

/*  mostrar apenas numeros primos
criar algoritmo que mostre apenas numeros primos
no console falta fazer
exemplo: [20]  entra um valor e irá printar apenas numeros primos  
n. primo é se é divisivel por um e por ele mesmo
primos: 2 - 3 - 5 - 11 - 13 - 17 - 19 */
let primo = true;
for (let n=2; n<=20; n++){
    let primo = true;

    for (let p=2; p<n; p++){
        if(n%p == 0){
            primo = false
        }
    }
if (primo){
console.log( n, " é primo")
}
}

console.log("")
console.log ("-----------------------vetor-----------------")

let vetor = [23,25,2,8,9];
console.table(vetor);
console.log(vetor.length);

console.log("")
console.log ("-------------exercicio vetor e for-----------------")
//  a partir do vetor de exemplo quero que seja printado a soma dos numeros impares
// vetor entrada  -  let vetor = [3,5,6,2,4,8,9,14];
// exemplo saida: a soma total dos pares é de:  e a soma total dos impares é de: 
let vetor2 = [3,5,6,2,4,8,9,14];
let somapar = 0;
let somaimpar = 0;
console.log(vetor2)

for (v=0; v<vetor2.length; v++){
    if (vetor2[v] % 2 === 0){  
        somapar += vetor2[v]; 
    } else {
        somaimpar += vetor2[v];
    }
}
console.log("A soma dos pares é: ", somapar, ". A soma dos impares é: ", somaimpar );
// o vetor2.length com < conta de 0 a 7 na posição. Se for <= ele vai buscar as 8 posições e vai dar NaN.


console.log("")
console.log ("-------------exercicio vetor e for-----------------")

//a partir de vetor de exemplo, printar o maior e menor valor e
// suas respectivas posições no vetor
//vetor de entrada let vetor = [3,5,6,2,4,8,9,14];
// exemplo saída: "O maior valor é 14 e está na posição 7.
//" O menor valor é 2 e está na posição 3."

let vetor3 = [30,5,61,23,4,8,90,14];
let nmaiorvalor = 0;
let nmenorvalor = 0;
let maiorposicao = 0;
let menorposicao =0;
console.log(vetor3);
for ( m=0; m<=vetor3.length; m++){
    if (vetor3[m] >= nmaiorvalor){
        nmaiorvalor = vetor3[m];
        maiorposicao = m;
    }
    else if (vetor3[m] < vetor[nmenorvalor] ){
        nmenorvalor = vetor3[m];
        menorposicao = m;
}
}
console.log(" O maior valor é " , nmaiorvalor, " e está na posição" , maiorposicao, ".");
console.log(" O menor valor é" ,nmenorvalor, " e está na posição" ,menorposicao, ".");

