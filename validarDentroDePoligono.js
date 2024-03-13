const todosLosValores = args.poligono
    ? args.poligono.split(',').map((valor) => Number(valor))
    : []

const coordenadas = []

for (let indice = 0; indice < todosLosValores.length - 1; indice += 2) {
    const latitude = todosLosValores[indice]
    const longitude = todosLosValores[indice + 1]
    coordenadas.push({ x: latitude, y: longitude })
}

const punto = {
    x: args.coordenada.latitude,
    y: args.coordenada.longitude,
}

let intersecciones = 0;
for (let i = 0, j = coordenadas.length - 1; i < coordenadas.length; j = i++) {
    const { x: xi, y: yi } = coordenadas[i];
    const { x: xj, y: yj } = coordenadas[j];

    // Si el punto está en la línea que une dos vértices del polígono
    if ((yi > punto.y && yj < punto.y) || (yi < punto.y && yj > punto.y)) {
        // Si la línea intersecta la horizontal que pasa por el punto
        if (xi + (punto.y - yi) / (yj - yi) * (xj - xi) > punto.x) {
            intersecciones++;
        }
    }
}

return intersecciones % 2 === 1