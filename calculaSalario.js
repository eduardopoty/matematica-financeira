let salarioTotal
let valorBruto = 2000
let valorImposto
let addBeneficios = 250

if (valorBruto >= 0.00 && valorBruto <= 1100.00) {
    valorImposto = 0.05 * valorBruto
}

else if (valorBruto >= 1100.01 && valorBruto <= 2500.00) {
    valorImposto = 0.1 * valorBruto
}

else if (valorBruto > 2500) {
    valorImposto = 0.15 * valorBruto
}

salarioTotal = (valorBruto - valorImposto) + addBeneficios

console.log("O salário total a ser transferido para o funcionário será de " + salarioTotal)