function calcularImpostoRenda(salario) {
    let imposto = 0;

    if (salario > 4500.00) {
        imposto += (salario - 4500.00) * 0.28;
        salario = 4500.00;
    }
    if (salario > 3000.00) {
        imposto += (salario - 3000.00) * 0.18;
        salario = 3000.00;
    }
    if (salario > 2000.00) {
        imposto += (salario - 2000.00) * 0.08;
    }

    return imposto === 0 ? "Isento" : `R$ ${imposto.toFixed(2)}`;
}

// if (typeof module !== "undefined" && module.exports) {
//     module.exports = calcularImpostoRenda;
// } else {
//     // Interface
//     document.addEventListener("DOMContentLoaded", () => {
//         const input = document.createElement("input");
//         input.type = "number";
//         input.step = "0.01";
//         input.placeholder = "Digite seu salário";
//         input.min = "0"; // Tira valores negativos

//         const button = document.createElement("button");
//         button.textContent = "Calcular Imposto";

//         const result = document.createElement("p");

//         button.addEventListener("click", () => {
//             let salario = parseFloat(parseFloat(input.value).toFixed(2)); // Transforma para 2 casas decimais
//             if (!isNaN(salario)) {
//                 result.textContent = calcularImpostoRenda(salario);
//             } else {
//                 result.textContent = "Por favor, insira um valor válido.";
//             }
//         });

//         document.body.appendChild(input);
//         document.body.appendChild(button);
//         document.body.appendChild(result);
//     });
// }

// Testes
console.log(calcularImpostoRenda(3002.00)); // R$ 80.36
console.log(calcularImpostoRenda(4500.00)); // R$ 350.00
console.log(calcularImpostoRenda(1000.00)); // Isento
console.log(calcularImpostoRenda(7000.00)); // R$ 1050.00
