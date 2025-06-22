let numero = parseInt(
  prompt("Ingresá un número para ver su tabla de multiplicar:")
);

// Función que genera y muestra la tabla
function mostrarTabla(num) {
  let salida = "";

  for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    let linea = `${num} x ${i} = ${resultado}`;

    console.log(linea); // Mostrar en consola
    salida += linea + "<br>"; // Acumulamos para mostrar en HTML
  }
}
mostrarTabla(numero);