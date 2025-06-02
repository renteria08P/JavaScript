function calcularNotaFinal(teoria,practica){
     return (teoria * 0.60) + (practica * 0.40);
}

function esNotaAlta(nota){
   return nota >= 4.0
}

function mostarResultado(teoria,practica){
    let notafinal = calcularNotaFinal(teoria, practica);
    if(esNotaAlta(notafinal)){
        console.log("Nota Final es Alta");
    }else{
        console.log("Nota Final es Baja");
    }
}

function main() {
    let n1 = parseFloat(prompt("Digite Nota Teoria:"));
    let n2 = parseFloat(prompt("Digite Nota Practica:"));
    mostarResultado(n1, n2);
}

main();
