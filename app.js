const ir = (renda)=> {return renda<1903 ? 0 : renda<2826 ? 0.075 : renda<3751 ? 0.15 : renda<4664 ? 0.225 : 0.275}
class cliente {
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
function novoCliente(){
    
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
    
    

}




const envFormulario = document.querySelector('#enviar');

envFormulario.onclick = novoCliente 






