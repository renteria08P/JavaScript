function calcularDescuento(precio, porcentaje) {
  return precio - (precio * porcentaje / 100);
}

function esDescuentoAlto(porcentaje) {
  return porcentaje >= 30;
}

function verificarDescuento(precio, porcentaje) {
  let nuevoPrecio = calcularDescuento(precio, porcentaje);
  if (esDescuentoAlto(porcentaje)) {
    console.log("Descuento aplicado es alto.");
  } else {
    console.log("Descuento aplicado es bajo.");
  }
  console.log("El nuevo precio es: " + nuevoPrecio);
}

let precio = parseFloat(prompt("Precio:"));
let porcentaje = parseFloat(prompt("Porcentaje de descuento:"));
verificarDescuento(precio, porcentaje);

