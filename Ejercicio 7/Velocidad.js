function calcularExceso(velocidad, limite) {
    return velocidad - limite;
}

function aplicaMulta(exceso) {
    return exceso > 10;
}

function verificarMulta(velocidad, limite) {
    const exceso = calcularExceso(velocidad, limite);

    if (aplicaMulta(exceso)) {
        console.log("Hay Multa");
    } else {
        console.log("No hay Multa");
    }
}

function main() {
    let velocidad = parseFloat(prompt("Ingrese la velocidad:"));
    let limite = parseFloat(prompt("Ingrese el límite de velocidad:"));

    verificarMulta(velocidad, limite);
}

main();
