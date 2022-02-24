let arraySource = [];
for (i=0; i<10; i++){
    arraySource.push(Math.round(Math.random() * 100));
}
let arraySource1 = [];
for (i=0; i<10; i++){
    arraySource1.push('a' + 2);
}

const iV = 'Bal';
let arraySource2 = ['pada', 'adkha', 'adjadbaga!@', 'hd', 'kjsbfsnfb']
const soma = arraySource2.splice(2, 2,'joão'*2)
console.log(arraySource2)
console.log(soma)
let result = [];
arraySource.forEach(numero => result.push(numero*2));
//console.log(result)