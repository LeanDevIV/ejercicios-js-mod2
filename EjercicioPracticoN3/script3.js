function lanzarDados() {
  return Math.floor(Math.random() * 6) + 1;
}

let contadorDeDados = Array(13).fill(0);
for (let i = 0; i < 50; i++) {
  let dado1 = lanzarDados();
  let dado2 = lanzarDados();
  const suma = dado1 + dado2;

  contadorDeDados[suma]++;
}
for (let i = 2; i <= 12; i++) {
  console.log(`Cara ${i}: ${contadorDeDados[i]} apariciones`);
}
