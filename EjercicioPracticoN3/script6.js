 // Pedimos los lados al usuario (conversión a número con parseFloat)
    let ladoA = parseFloat(prompt("Ingresá el valor del lado A:"));
    let ladoB = parseFloat(prompt("Ingresá el valor del lado B:"));

    // Función para calcular el perímetro
    function calcularPerimetro(a, b) {
      return 2 * (a + b);
    }

    // Guardamos el resultado
    let perimetro = calcularPerimetro(ladoA, ladoB);

    // Mostramos en consola
    console.log("El perímetro del rectángulo es: " + perimetro);