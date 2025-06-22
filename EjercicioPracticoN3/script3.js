 // Inicializamos un array para contar apariciones de las sumas (del 2 al 12)
    let apariciones = Array(13).fill(0); // Índices del 0 al 12, ignoramos 0 y 1

    // Función para tirar un dado (número entre 1 y 6)
    function tirarDado() {
      return Math.floor(Math.random() * 6) + 1;
    }

    // Repetimos el lanzamiento 50 veces
    for (let i = 0; i < 50; i++) {
      let dado1 = tirarDado();
      let dado2 = tirarDado();
      let suma = dado1 + dado2;

      apariciones[suma]++; // Sumamos 1 a la suma correspondiente
    }

    // Mostramos el resultado en la página
    let salida = "<ul>";
    for (let i = 2; i <= 12; i++) {
      salida += `<li>Suma ${i}: ${apariciones[i]} apariciones</li>`;
    }
    salida += "</ul>";

    document.getElementById("resultado").innerHTML = salida;

    // También mostramos en consola por si querés verlo ahí
    console.log("Resultados:", apariciones.slice(2)); // Sacamos el 0 y 1 que no usamos