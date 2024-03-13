const {
    cadena,
    colorDeFondoCoordenadaNoSeleccionada,
    indiceCoordenadaSeleccionada,
    colorDeFondoCoordenadaSeleccionada,
    todosLosPoligonos,
    nombreZona,
} = args

const crearCoordenadasDeCadena = (cadenaPoligono) => {
    const todosLosValores = cadenaPoligono
        ? cadenaPoligono.split(',').map((valor) => Number(valor))
        : []

    const coordenadas = []

    for (let indice = 0; indice < todosLosValores.length - 1; indice += 2) {
        const latitude = todosLosValores[indice]
        const longitude = todosLosValores[indice + 1]
        coordenadas.push({ latitude, longitude })
    }

    return coordenadas
}

const poligonosQueNoEstoyEditando = { ...(todosLosPoligonos || {}) }
delete poligonosQueNoEstoyEditando[nombreZona]

const coordenadasQueNoEstoyEditando = Object
    .entries(poligonosQueNoEstoyEditando)
    .map(([nombre, cadenaPoligono]) => [
        nombre,
        crearCoordenadasDeCadena(cadenaPoligono),
    ])

apphive.fn.callCallback('log', coordenadasQueNoEstoyEditando)

const coordenadas = crearCoordenadasDeCadena(cadena)

const markers = {}

if (coordenadas.length < 3) {
    coordenadas.forEach((coordenada, indice) => {
        markers[`pi${indice}`] = {
            latitude: coordenada.latitude,
            longitude: coordenada.longitude,
        }
    })
} else if (indiceCoordenadaSeleccionada >= 0) {
    const coordenadaSeleccionada = coordenadas[indiceCoordenadaSeleccionada]
    if (coordenadaSeleccionada) {
        markers[`cs${indiceCoordenadaSeleccionada}`] = {
            latitude: coordenadaSeleccionada.latitude,
            longitude: coordenadaSeleccionada.longitude,
        }
    }
}

const listaDeCoordenadas = coordenadas.map((coordenada, indiceCoordenada) => ({
    colorDeFondo: indiceCoordenada === indiceCoordenadaSeleccionada ? colorDeFondoCoordenadaSeleccionada : colorDeFondoCoordenadaNoSeleccionada,
    indiceCoordenada,
}))

const colorSeleccionado = {
    type: 'custom',
    value: '#0099FF',
}

const colorNoSeleccionado = {
    type: 'custom',
    value: '#D3D3D3',
}

const polygons = {
    [nombreZona]: {
        coordinates: coordenadas,
        fillColor: colorSeleccionado,
        strokeColor: colorSeleccionado,
    },
}

coordenadasQueNoEstoyEditando.forEach(([polName, coordenadasPol]) => {
    if (coordenadasPol.length < 1) {
        return
    }
    polygons[polName] = {
        coordinates: coordenadasPol,
        fillColor: colorNoSeleccionado,
        strokeColor: colorNoSeleccionado,
    }
})

return {
    listaDeCoordenadas,
    markers,
    polygons,
}