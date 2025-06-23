    let sideA = parseFloat(prompt("Ingresá el valor del lado A:"));
    let sideB = parseFloat(prompt("Ingresá el valor del lado B:"));

    function calcularPerimetro(a, b) {
      return 2 * (a + b);
    }

    let perimetro = calcularPerimetro(sideA, sideB);

    console.log("El perímetro del rectángulo es: " + perimetro);