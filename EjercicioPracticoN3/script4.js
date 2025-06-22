
// Ejercicio numero 4


function verificador(numero) {
  if (numero % 2 === 0) {
    return "El numero " + numero + " es par.";
  } else {
    return "El numero " + numero + " es impar.";
  }
}

let numero = prompt("Ingrese su número");

let mensaje = verificador(numero);
console.log(mensaje);
