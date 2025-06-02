function obtenerSaludo(hora){
if(hora < 12){
    return "Buenos Dias";
} else if(hora < 18){
    return "Buenas Tardes";
} else{
    return "Buenas Noches";
}
}

function mostrarSaludo(nombre, hora){
     let saludo = obtenerSaludo(hora)
     console.log(`${saludo}, ${nombre}`);
}

function main(){
  let nombre = prompt("Digite su Nombre: ");
  let hora = parseInt(prompt("Digite la Hora:"));
  mostrarSaludo(nombre, hora);
}

main();
