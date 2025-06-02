function calcularBonificacion(salario) {
    return salario * 0.10;
}

function esBonificacionAlta(bonificacion) {
    return bonificacion > 500;
}

function analizarBonificacion(salario) {
    let bonificacion = calcularBonificacion(salario);

    if (esBonificacionAlta(bonificacion)) {
        console.log("La bonificación es alta.");
        alert("La bonificación es alta.\nEl 10% del salario es: " + bonificacion);
    } else {
        console.log("La bonificación es baja.");
        alert("La bonificación es baja.\nEl 10% del salario es: " + bonificacion);
    }
}

function main() {
    let salario = parseFloat(prompt("Ingrese el salario:"));
    analizarBonificacion(salario);
}

main();
