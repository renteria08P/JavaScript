function esPar(numero) {
  return numero % 2 === 0;
}

function evaluarNumero(numero) {
  if (esPar(numero)) {
    console.log(`El número ${numero} es Par.`);
  } else {
    console.log(`El número ${numero} es Impar.`);
  }
}

function main() {
  let n = prompt("Digite el número:");
  let numero = parseInt(n);
  evaluarNumero(numero);
}

main();


