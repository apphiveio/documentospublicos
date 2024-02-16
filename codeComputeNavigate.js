const {
    paginaObjetivo,
    parametrosDePagina,
} = args

const irAPagina = apphive.fn.callCallback
const irAErrorParametrosErroneos = (mensaje) => irAPagina('onParametrosDePaginaIncorrectos', mensaje)
const valorNoEsUnaCadenaNoVacia = (valor) => typeof valor !== 'string' || !valor

const valorNoEsUnRecord = (valor) => typeof valor !== 'object' || valor === null
const valorNoEsUnArreglo = (valor) => !Array.isArray(valor)

const encontrarErrorEnCorreoYPassword = (objetoOriginal) => {
    if (valorNoEsUnRecord(objetoOriginal)) {
        return `Los parametros deben ser un objeto, se paso eso : ${JSON.stringify(parametrosDePagina)}`
    }
    const { direccionDeCorreo, password } = objetoOriginal
    if (valorNoEsUnaCadenaNoVacia(direccionDeCorreo)) {
        return `La direcccion de correo no es valida : ${JSON.stringify(parametrosDePagina)}`
    }
    if (valorNoEsUnaCadenaNoVacia(password)) {
        return `El password no es valido : ${JSON.stringify(parametrosDePagina)}`
    }
    return undefined
}

switch (paginaObjetivo) {
case 'pedirPasswordParaNuevaCuenta': {
    if (valorNoEsUnaCadenaNoVacia(parametrosDePagina)) {
        irAErrorParametrosErroneos(`Para pedir password de nueva cuenta se requiere un correo valido, se paso eso : ${JSON.stringify(parametrosDePagina)}`)
    } else {
        irAPagina('pedirPasswordParaNuevaCuenta', parametrosDePagina)
    }
    break
}
case 'validarCorreoEnFirebase': {
    if (valorNoEsUnaCadenaNoVacia(parametrosDePagina)) {
        irAErrorParametrosErroneos(`Para validar en firebase el correo debe ser una cadena de caracteres, se paso eso : ${JSON.stringify(parametrosDePagina)}`)
    } else {
        irAPagina('validarCorreoEnFirebase', parametrosDePagina)
    }
    break
}
case 'pedirConfirmacionPassword': {
    const mensajeDeError = encontrarErrorEnCorreoYPassword(parametrosDePagina)
    if (mensajeDeError) {
        irAErrorParametrosErroneos(mensajeDeError)
        break
    }

    irAPagina('pedirConfirmacionPassword', parametrosDePagina)
    break
}
case 'pedirCorreoParaEntrar':
    irAPagina('pedirCorreoParaEntrar')
    break
case 'crearCuentaConCorreoYPassword': {
    const mensajeDeError = encontrarErrorEnCorreoYPassword(parametrosDePagina)
    if (mensajeDeError) {
        irAErrorParametrosErroneos(mensajeDeError)
        break
    }
    irAPagina('crearCuentaConCorreoYPassword', parametrosDePagina)
    break
}
case 'cargarCorreoEnFormulario':
    irAPagina('cargarCorreoEnFormulario')
    break
// mensaje titulo
case 'error': {
    if (valorNoEsUnRecord(parametrosDePagina)) {
        irAErrorParametrosErroneos(`Los parametros no son un record para mostrar pagina de error ${JSON.stringify(parametrosDePagina)}`)
        break
    }
    const { mensaje, titulo } = parametrosDePagina
    if (valorNoEsUnaCadenaNoVacia(titulo)) {
        irAErrorParametrosErroneos(`Cuando se muestra un error se requiere que el titulo sea una cadena y esto se encontro: ${titulo}`)
        break
    }
    irAPagina('error', { mensaje, titulo })
    break
}
case 'administradores': {
    if (valorNoEsUnArreglo(parametrosDePagina)) {
        irAErrorParametrosErroneos('Para mostrar la lista de administradores se requiere el arreglo de los mismos')
        break
    }
    irAPagina(paginaObjetivo, parametrosDePagina)
    break
}
case 'validarUsuarioEsAdmin':
case 'correoNoPuedeSerAdmin':
case 'splash':
case 'principal':
case 'cargandoAdministradores':
    irAPagina(paginaObjetivo)
    break
default:
    irAPagina('onPaginaObjetivoInvalida')
}