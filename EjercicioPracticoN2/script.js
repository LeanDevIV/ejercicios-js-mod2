// Pedimos al usuario las filas y columnas
let filas = parseInt(prompt("¿Cuántas filas querés?"));
let columnas = parseInt(prompt("¿Cuántas columnas querés?"));
// ----------------
// Comienzo de condicional que separa una sección
//  para la validación del resultado de prompt
//  y la segunda para la jecución del script en caso
// de que los datos ingresados sean correctos
if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
  console.log("Poné números válidos, por favor.");
  // Ejecución de código para resolver la ecuación e imprimir la tabla
} else {
  // Creación de variables internas de bucles y condicional 
  // (no son variables globales?)
  let total = filas * columnas;
  let contador = total;
  // Array que se imprimirá en tabla en la consola
  let tabla = []
// Bucle exterior
  for (let i = 0; i < filas; i++) {
    let fila = [];
    // Bucle interno
    for (let j = 0; j < columnas; j++) {
      // Esto mete un valor adentro de contador,
      //  que después se resta para contar en reversa
     fila.push(contador);
     contador--;
    }
    tabla.push(fila)
  }
  // fin de condicional
  //--------------- 

  // Esto imprime una tabla con un indice
  //  para ordenar la tabla en la consola
  console.table(tabla);
}
