const { cadena } = args

const todosLosValores = cadena
    ? cadena.split(',').map((valor) => Number(valor))
    : []

const coordenadas = []

for (let indice = 0; indice < todosLosValores.length - 1; indice += 2) {
    const latitude = todosLosValores[indice]
    const longitude = todosLosValores[indice + 1]
    coordenadas.push({ latitude, longitude })
}

const markers = {}

if (coordenadas.length < 3) {
    coordenadas.forEach((coordenada, indice) => {
        markers[`pi${indice}`] = {
            latitude: coordenada.latitude,
            longitude: coordenada.longitude,
        }
    })
}

return {
    markers,
    polygons: {
        zona: {
            coordinates: coordenadas,
        },
    },
}