// Ejercicio numero 5

function cadenaDeTexto(string) {
  if (string === string.toUpperCase()) {
    return "El string está en mayúsculas";
  } else if (string === string.toLowerCase()) {
    return "El string está en minúsculas";
  } else {
    return "El string contiene minúsculas y mayúsculas";
  }
}
let texto = prompt("Ingrese su texto");

let resultado = cadenaDeTexto(texto);

console.log(resultado);
