let cajaDeDados = [];
function lanzarDados() {
  return Math.floor(Math.random() * 6) + 1;
}

if (alert === true) {
  for (let i = 0; i < 10; i++) {
    cajaDeDados = lanzarDados();
  }
  console.log(cajaDeDados)
}

alert("Quiere tirar los dados?")