const ir = (renda)=> {return renda<1903 ? 0 : renda<2826 ? 0.075 : renda<3751 ? 0.15 : renda<4664 ? 0.225 : 0.275}
class Cliente {
    constructor(nome, idade, cpf, email, salario, despesasFixas) {
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.email = email
        this.salario = salario
        this.despesasFixas = despesasFixas
        this.liquido = (sal, aliq) => { return sal - sal * aliq }
        this.saldo = 0
    }
    alteraSaldo(){
        let despesasVar = this.salario*0.3 + this.saldo*0.05
        this.saldo = this.saldo + this.liquido(this.salario, ir(this.salario)) - this.despesasFixas - despesasVar
        return this.saldo
    }
    alteraSalario(aumento){

        this.salario = aumento*this.salario
    }
}
/* function novoCliente(){
    
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let cpf = document.getElementById('cpf').value
    let email= document.getElementById('email').value
    let salario = document.getElementById('salario__inicial').value
    const despesasFixas = document.getElementById('despesas').value
    const newClient = new cliente(nome, idade, cpf, email, salario, despesasFixas)
    console.log(newClient)
    for (i=0; i<5; i++){
        newClient.alteraSaldo()
        console.log(newClient.saldo)
    }
    newClient.dependente = {
        nome: '',
        idade,
        justapostg: ['a', 'b', 'c', 'd']
    }
    

} */
nome = 'Danilo'
idade = '28'
cpf = '154343435432'
email = 'danilo@gmail.com'
salario = 8225
despesasFixas = 2314
const newClient = new Cliente(nome, idade, cpf, email, salario, despesasFixas)

newClient.dependentes = [{
    name: 'Ans',
    idade: 25,
    jeral: true,
}]

newClient.dependentes.push({
    name: 'as',
    idade: 26,
    jeral: false,
})
console.log(newClient)
const maisNova = newClient.dependentes.filter(dependente => dependente.idade===25)
console.log(maisNova)
newClient.alteraSaldo();
console.log(newClient)
/* const envFormulario = document.querySelector('#enviar');

envFormulario.onclick = novoCliente 
 */





