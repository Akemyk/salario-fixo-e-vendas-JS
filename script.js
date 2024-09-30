let salarioFixo = Number(prompt("Digite o salário fixo"))
let vendas = Number(prompt("Digite o valor das vendas"))
let comissao
let salarioTotal

if (vendas<=1500) {
  comissao = vendas*0.03  
}else{
    comissao = 1500*0.03+(vendas-1500)*0.05
} salarioTotal = salarioFixo+comissao
alert("O salário total é "+salarioTotal)
