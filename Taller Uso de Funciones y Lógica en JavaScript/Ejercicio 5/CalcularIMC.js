function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function esPesoSaludable(imc) {
    return imc >= 18.5 && imc <= 24.9;
}

function evaluarSalud(peso, altura) {
    let imc = calcularIMC(peso, altura);
    if (esPesoSaludable(imc)) {
        console.log(`IMC: ${imc} - Peso saludable.`);
    } else {
        console.log(`IMC: ${imc} - No tiene peso saludable.`);
    }
}

function main() {
    let peso = parseFloat(prompt("Digite su peso en kg:"));
    let altura = parseFloat(prompt("Digite su altura en metros: "));
    evaluarSalud(peso, altura);
}

main();
