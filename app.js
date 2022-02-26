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
console.log(alunos.nota1)
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
teste(alunos, 'nota1')
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
console.log(myFunction(str))
