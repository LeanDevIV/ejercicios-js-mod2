let paises = [];
let continuar = true;

while (continuar) {
  nombreDeCiudad = prompt("Ingresa el nombre de tu país");
  paises.push(nombreDeCiudad);
  continuar = confirm("Quieres seguir agregando ciudades?");
}
paises.push("París");

if (paises.length > 0) {
  paises[1] = "Bacelona";
  console.log(
    "Paises ingresados: ",
    paises,
    "longitud de lista: ",
    paises.length,
    "Primer elemento: ",
    paises[0] ?? "No disponible",
    "Segundo elemento: ",
    paises[1] ?? "No disponible",
    "Tercer elemento: ",
    paises[2] ?? "No disponible",
    "Último elemento: ",
    paises[paises.length - 1] ?? "No disponible"
  );
}
