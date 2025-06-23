
// Ejercicio numeero 1

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const texto = "<H3>Lista de meses </H3>";
document.writeln(texto);
for (let i = 0; i < meses.length; i++) {
  document.writeln(meses[i] + "<br>");
}
