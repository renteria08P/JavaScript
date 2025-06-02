function calcularEdad(anoNacimiento, anoActual) {
  return anoActual - anoNacimiento;
}

function esMayorEdad(edad) {
  return edad >= 18;
}

function analizarEdad(anoNacimiento, anoActual) {
  let edad = calcularEdad(anoNacimiento, anoActual);
  if (esMayorEdad(edad)) {
    console.log("Es mayor de edad.");
  } else {
    console.log("No es mayor de edad.");
  }
}

function main() {
  let anoNacimiento = parseInt(prompt("Digite el año de nacimiento:"));
  let anoActual = parseInt(prompt("Digite el año actual:"));
  analizarEdad(anoNacimiento, anoActual);
}

main();
