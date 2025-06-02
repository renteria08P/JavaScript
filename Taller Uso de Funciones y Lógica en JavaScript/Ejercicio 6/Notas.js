function calcularPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function clasificarNota(promedio) {
    if (promedio >= 3.0) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

function analizarEstudiante(n1, n2, n3) {
    let promedio = calcularPromedio(n1, n2, n3);
    let resultado = clasificarNota(promedio);
    console.log("Promedio:", promedio.toFixed(2));
    console.log("Estado:", resultado);
}

function main() {
    let n1 = parseFloat(prompt("Digite la Nota 1:"));
    let n2 = parseFloat(prompt("Digite la Nota 2:"));
    let n3 = parseFloat(prompt("Digite la Nota 3:"));
    analizarEstudiante(n1, n2, n3);
}

main();

