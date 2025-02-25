// Primeiro uma função de verificação
function naoEhMultiploDe13(num) {
    return num % 13 !== 0;
  }
  
  // Função da soma
  function somaDosNaoMultiplosDe13(x, y) {
    let soma = 0;
  
    // Intervalo independente da se o x > y ou o contrário
    const inicio = Math.min(x, y);
    const fim = Math.max(x, y);

    // Caso em que x = y (intervalo de apenas um número)
  if (inicio === fim) {
    if (naoEhMultiploDe13(inicio)) {
      soma += inicio;
    }
  } else {
    // Itera sobre o intervalo e soma os números que não são múltiplos de 13
    for (let i = inicio; i <= fim; i++) {
      if (naoEhMultiploDe13(i)) {
        soma += i;
      }
    }
    }

    return soma
}
  
//   // Leitura da entrada
//   const x = parseInt(prompt("Digite o valor de X:"));
//   const y = parseInt(prompt("Digite o valor de Y:"));
  
//   // Validação
//   if (isNaN(x) || isNaN(y)) {
//     alert("Por favor, insira valores válidos.");
//   } else {
//     // Resultado
//     const result = somaDosNaoMultiplosDe13(x, y);
//     alert("A soma dos números não múltiplos de 13 é: " + result);
//   }

// Teste
console.log(somaDosNaoMultiplosDe13(0,150)); // 10467
console.log(somaDosNaoMultiplosDe13(9,9)); // 9
console.log(somaDosNaoMultiplosDe13(13,13)); // 0
console.log(somaDosNaoMultiplosDe13(-15,13)); // -29