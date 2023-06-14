var prompt = require('prompt-sync')();
/*
console.log(" 1.exercícios antigos, agora usar com funçtion-------------------")
console.log('----exercício 1 : calcular tempo de viagem---------------------');
//tempo viagem em horas e velocidade km/h > calcular consumo, media 12km/litro

function calcular_consumo(tempo, velocidade){
    const distancia = tempo*velocidade;
    const consumo = distancia/12;
    return consumo;
}
function main(){
//ENTRADA:
    const tempo = Number(prompt('Tempo (horas): '));
    const velocidade = Number(prompt('Velocidade (km/h:) '));
//PROCESSAMENTO:
    const consumo = calcular_consumo (tempo, velocidade);
//SAÍDA
console.log('consumo =',consumo.toFixed(2), 'litros de gasolina', );
}
main()


console.log("2.----exercício salario percentual ---------------------------")
function main(){
    const salario_atual = Number(prompt('Digite seu salário: '))
    const percentual = Number(percentual_aumento(salario_atual))
    const aumento = salario_atual * (percentual/100)
    const novo_salario = salario_atual + aumento

    console.log('Salário Anterior R$' ,salario_atual)
    console.log('Percentual aumento(%)', percentual)
    console.log('Aumento: R$', aumento.toFixed(2))
    console.log('Novo salário: R$', novo_salario.toFixed(2))
}
function percentual_aumento(salario){
    if (salario <= 400.00){
    return 15
    } else if (salario >= 400.01 && salario <=800.00){
    return 12
    }  else if (salario >= 800.01 && salario <=1200.00){
    return 10
    }  else if (salario >= 1200.01 && salario <=2000.00){
    return 7
    }  else if (salario >= 2000.01){
    return 4
    }
}
main()
*/
console.log("3.----exercício condiçoes ---------------------------")
//dizer em qual intervalo esta o valor de entrada [0,25][25,50][50,75]/[75,100]
// valor entrada 25.00   intervlo [0,25]
//valor entrada 25.01    intervalo [25,50]

//TENTANDO : 
/*
function main(){
    let intervalo = calcular_intervalo(valor_entrada,intervalo);
    valor_entrada = Number(prompt('Digite um número de 0 até 100: '))
    console.log("Número: " ,valor_entrada)
    console.log('O valor está dentro do intervalo' ,intervalo)
}
function valor_entrada

(intervalo){
    if (intervalo >=0 && intervalo <25){
        return 0_25
    } if (valor >= 25 && valor <50){
        return 25_50
    } if (valor >=50 && valor <75){
        return 50_75
    } if (valor >=75 && valor <100){
        return 75_100
    }
}
main()
*/

console.log("4.---------exercício: par ou impar----------------")
// criar um algoritmo que diga se o numero é par ou impar

//TENTANDO: 
function main(){
    const numero = 23;
    if (numero%2 == 0){
        return par
        console.log("par")
    } else {
        return impar
        console.log("impar")
    }
}
main()