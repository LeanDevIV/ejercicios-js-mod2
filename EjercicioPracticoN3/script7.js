function multTable(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
let numero = parseInt(prompt("ingrese su número"));

if (!isNaN(numero)) {
  multTable(numero);
} else {
  console.log("Ingrese un número válido");
}
