console.log('              1= --------------------------------')
// 4 valores de entrada ( * - * ) =
const a = 5;
const b = 6;
const c = 7;
const d = 8;
console.log ( a*b - c*d);
console.log ( (a*b) - (b*c) );
console.log('             2= --------------------------------')
// tempo viagem em horas e velocidade em km/h
// calcular o consumo, media 12km/litro
const horas = 10;
const velocidade = 85;
const media = 12;
const litros = (horas * velocidade / media);

console.log ('A quantidade de litros usados na viagem é de ' , litros , 'litros de gasolina.')
console.log('           3= --------------------------------')
const e =3;
console.log(e**3);

console.log(5/2); // divisão

console.log(5%2);  // resto de divisão, par e impar

const f =2.35
console.log(f);  // valor como escrito
console.log(parseInt(f));    //int
console.log(parseFloat(f));   //float

console.log("1" == 1);    //compara se os numeros são iguais
console.log("1" === 1);   //compara se os numeros sao iguais e se os tipos são iguais.  Str e Int

// || = ou
// &&  and ou e (somente se for retornar true)

console.log('          4= --------------------------------');

const idade = 15;
if (idade >=18)
{
    console.log ("você é de maior de idade.");

}
console.log("Terminou a execução.");

console.log('         5= --------------------------------');

const idade2 = 17;
if (idade2 >=18)
{
    console.log("Você tem permissão.");

}
console.log("Falta 1 ano para ter permissão.");
console.log("Terminou a execução.");

console.log('         6= --------------------------------');

const idade3 = 15;
if (idade3 >=18)
{
    console.log("Você tem permissão.");
}
console.log("Falta 3 anos para ter permissão.");
console.log("Terminou a execução.");
console.log('          7= --------------------------------');
// >18 and <70
const idade4 = 15;
if (idade4 >=18 && idade <=70)
{
    console.log("Você tem entre 18 e 70 anos, então você tem permissão.");
}else if(idade==17)
    {
        console.log("falta apenas um ano para ter acesso.");
    }
console.log("fim")
console.log('            8= --------------------------------');
// acesso negado
const idade5 = 17;
if (idade5 >=18 && idade <=70)
{
    console.log("Você tem entre 18 e 70 anos, então você tem permissão.");
}else if(idade==17){
     console.log("falta apenas um ano para ter acesso.");
}else{
    console.log("Acesso negado") 
}
console.log("fim")
console.log('            9= --------------------------------');
let mes= 2;
switch (mes){
    case 1:
        console.log('janeiro');
        break;
    case 2:
        console.log('fevereiro');
        break;
    case 3:
        console.log('marco');
        break;

    default:
        console.log('não é um mês válido.');
        break;
}
console.log('            10= --------------------------------');
// valor se é par ou ímpar
const numero =3;
if (numero %2==0)
{
    console.log("O numero é par")
}
else if(numero %2==1)
{
    console.log("O numero é impar")
}
console.log('fim')
console.log('            11= --------------------------------');
// imc = (peso / (altura * altura))
const altura = 1.64
const peso = 54
const imcconta = (54 / (1.64 * 1.64));
console.log('O imc é = ', imcconta);

const imc = 20.77
if (imc <= 18.5)
{ 
    console.log('Seu IMC é considerado como magreza')
}
else if (imc >= 18.5 && imc <= 24.9)
{
    console.log('Seu IMC é considerado como normal')
}
else if (imc >= 25 && imc <= 29.9)
{
    console.log('Seu IMC é considerado como sobrepeso')
}
else if (imc >= 30 && imc <= 34.9)
{
    console.log('Seu IMC é considerado como obesidade grau 1')
}
else if (imc >= 35 && imc <= 39.9)
{
    console.log('Seu IMC é considerado como obesidade grau 2')
}
else if (imc >= 40)
{
    console.log('Seu IMC é considerado como obesidade grau 3')
}
console.log("fim")
console.log('            12= --------------------------------');
