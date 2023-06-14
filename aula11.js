

// base decimal 0, 1,2,3,4,5,6,7,8,9. começa em zero

//função: 
function main(){
    //console.log('ola');
    saudacao()//criar outra função
}
main()    // a função não faz nada. Somente busca a função e executa
//outro exemplo:
function ehPar(valor){   //valor é o parametro da função
    if (valor%2 ==0){
        return true
    } else {
        return false
    }
}   // manter a ordem das linhas



function main(){
    const idade = 36;
   // const peso = 100;
    console.log(ehPar(idade))
   // console.log(soma(idade + peso));
}
main()



//outro exemplo:
function soma(valorA, valorB){
    let resultado = valorA + valorB
    return resultado
}
main()

//strings são imutáveis, não pode alterar dados. Mas pode juntar ou criar nova.
// length:
const frase= 'ola a todos!';
console.log(frase[6,7]);
//frase.split(a);
//console.log(frase.split(a));  // corta a frase conforme a solicitacao do corte do "a". 
//Muda o ascii entre maiusculo e minusculo
//tabela ASCII - busca o código da string conforme a posicao na tabela ascii
console.log(frase.charCodeAt(7)); // passa a posicao da variável e retorna o numero
console.log(String.fromCharCode(65,75));  //passao o numero e ele retorna a letra


const nome = obterTexto('Seu nome: ')


//Math.    = a parseInt
//('string'+string) = concatena 
//('Valor inválido'+descricao)
//= Valor inválido, sua idade


//github, criar  -usar readme para editar depois