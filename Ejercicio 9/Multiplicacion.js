function multiplicar(a,b){
    return  a * b;
    
}

function dobleProducto(a,b){
    return multiplicar(a, b) * 2;
   
}

function mostrarResultado(a,b){
    let resultado1 = multiplicar(a,b);
    let resultado2 = dobleProducto(a,b);

    console.log("El producto es: " + resultado1);
    alert("El producto es: " + resultado1);
    console.log("El Doble del Producto es " + resultado2);
    alert("El Doble del Producto es " + resultado2);
}

function main(){
    let a = parseFloat(prompt("Digite el Numero 1:"))
    let b = parseFloat(prompt("Digite el Numero 2: "));
    mostrarResultado(a,b);
}

main();