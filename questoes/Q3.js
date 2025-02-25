function substituirNegativosPorUm(arr) {
    // Cria uma nova array trocando os valores negativos ou nulos por 1
    const resultado = arr.map(num => (num <= 0 ? 1 : num));

    resultado.forEach((valor, index) => {
        console.log(`X[${index}] = ${valor}`);
    });

    return resultado;
}

// A diferença que usando a função de cima ele cria um novo usando o map() , fazendo com que no final o programa possa usar a array antiga (X) ou a nova (resultado)

// function substituirNegativosPorUmFOR(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= 0) {
//             arr[i] = 1;
//         }
//         console.log(`X[${i}] = ${arr[i]}`);
//     }
// }

// Teste
const X = [0, -5, 3, -8, 10, 6, -2, 4, 0, -1];
substituirNegativosPorUm(X);
