function calcularPrecioFinal(precioBase, estudiante, parallevar, vegano, vegetariano, minusvalia) {
    var precioMenu = parseFloat(precioBase);

    if (estudiante == "no") {
        precioMenu = precioBase;
    } else {
        if (estudiante == "si") {
            precioMenu -= 1.5;
        }

        if (parallevar == "si") {
            precioMenu *= 0.25;
        }

        if (vegano == "si" || vegetariano == "si") {
            precioMenu *= 0.15;
        }

        if (minusvalia == "si") {
            precioMenu *= 0.25;
        }
    }

    return Math.round(precioMenu * 100) / 100;
}