/* let arraySource = [];
for (i=0; i<10; i++){
    arraySource.push(Math.round(Math.random() * 100));
}
let arraySource1 = [];
for (i=0; i<10; i++){
    arraySource1.push('a' + 2);
}

const iV = 'Bal';
let arraySource2 = ['pada', 'adkha', 'adjadbaga!@', 'hd', 'kjsbfsnfb']
const soma = arraySource2.splice(2, 2,'joão')
console.log(arraySource2)
console.log(soma)
let result = [];
arraySource.forEach(numero => result.push(numero*2));
const as = arraySource.concat(arraySource2).concat(soma)
console.log(as) */
//console.log(result)
const alunos ={
    name: ['Laís', 'João', 'Felícia'],
    nota1: [10, 8, 9],
    nota2: [6, 7, 8],
     
}
//console.log(alunos.nota1)
function teste(obj, key){
    const t = {
        name: ['Laís', 'João', 'Felícia'],
        nota1: [10, 8, 9],
        nota2: [6, 7, 8],
         
    }
    const k = key
    const valor = t[k];
    console.log(valor)
}
//teste(alunos, 'nota1')
// console.log(alunos)


// alunos.media = alunos.nota1.map((n,i) => (n + alunos.nota2[i])/2)
// console.log(alunos)

// for(i=0;i<alunos.name.length;i++){
//     console.log(`O(a) aluno(a) ${alunos.name[i]} ficou com média ${alunos.media[i]}`)
// }
str = '1234'

function myFunction(str){
const last = str.substring(0, str.length/2)
return last
}
//console.log(myFunction(str))
const ir = (renda)=> {return renda<1903 ? 0 : renda<2826 ? 0.075 : renda<3751 ? 0.15 : renda<4664 ? 0.225 : 0.275}
const cliente = {
    nome: 'Danilo',
    idade: 28,
    cpf: '3545424574212',
    email: 'kala@abhs.com',
    salario: 4300,
    liquido: (sal, aliq) => { return sal - sal*aliq},
    saldo: 641,

}


//console.log(cliente)




//console.log(cliente)


//console.log(cliente)
const despesasFixas = document.getElementById('despesas').value
let despesasVar = cliente.salario*0.3 + cliente.saldo*0.05
function alteraSaldo(){
  
    cliente.saldo = cliente.saldo + cliente.liquido(cliente.salario, ir(cliente.salario)) - despesasFixas - despesasVar
    return cliente.saldo
}
function alteraSalario(aumento){

    cliente.salario = aumento*cliente.salario
}

let saldoJan = alteraSaldo()
let saldoFev = alteraSaldo()
let saldoMar = alteraSaldo()
let saldoAbr = alteraSaldo()
let saldoJun = alteraSaldo()
let saldoJul = alteraSaldo()
alteraSalario(1.2)
let saldoAgo = alteraSaldo()
let saldoSet = alteraSaldo()
let saldoOut = alteraSaldo()
let saldoNov = alteraSaldo()
let saldoDez = alteraSaldo()
console.log(cliente)
console.log(`O saldo em Fevereiro foi de R$ ${saldoFev.toFixed(2)}`)
console.log(`O saldo em Dezembro foi de R$ ${saldoDez.toFixed(2)}`)
