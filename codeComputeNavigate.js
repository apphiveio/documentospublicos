const {
    paginaObjetivo,
    parametrosDePagina,
} = args

const a = apphive.fn.callCallback
const b = (mensaje) => a('onParametrosDePaginaIncorrectos', mensaje)
const c = (valor) => typeof valor !== 'string' || !valor

const valorNoEsUnRecord = (valor) => typeof valor !== 'object' || valor === null

const encontrarErrorEnCorreoYPassword = (objetoOriginal) => {
    if (valorNoEsUnRecord(objetoOriginal)) {
        return `Los parametros deben ser un objeto, se paso eso : ${JSON.stringify(parametrosDePagina)}`
    }
    const { direccionDeCorreo, password } = objetoOriginal
    if (c(direccionDeCorreo)) {
        return `La direcccion de correo no es valida : ${JSON.stringify(parametrosDePagina)}`
    }
    if (c(password)) {
        return `El password no es valido : ${JSON.stringify(parametrosDePagina)}`
    }
    return undefined
}

switch (paginaObjetivo) {
case 'pedirPasswordParaNuevaCuenta': {
    if (c(parametrosDePagina)) {
        b(`Para pedir password de nueva cuenta se requiere un correo valido, se paso eso : ${JSON.stringify(parametrosDePagina)}`)
    } else {
        a('pedirPasswordParaNuevaCuenta', parametrosDePagina)
    }
    break
}
case 'validarCorreoEnFirebase': {
    if (c(parametrosDePagina)) {
        b(`Para validar en firebase el correo debe ser una cadena de caracteres, se paso eso : ${JSON.stringify(parametrosDePagina)}`)
    } else {
        a('validarCorreoEnFirebase', parametrosDePagina)
    }
    break
}
case 'pedirConfirmacionPassword': {
    const mensajeDeError = encontrarErrorEnCorreoYPassword(parametrosDePagina)
    if (mensajeDeError) {
        b(mensajeDeError)
        break
    }

    a('pedirConfirmacionPassword', parametrosDePagina)
    break
}
case 'pedirCorreoParaEntrar':
    a('pedirCorreoParaEntrar')
    break
case 'crearCuentaConCorreoYPassword': {
    const mensajeDeError = encontrarErrorEnCorreoYPassword(parametrosDePagina)
    if (mensajeDeError) {
        b(mensajeDeError)
        break
    }
    a('crearCuentaConCorreoYPassword', parametrosDePagina)
    break
}
case 'cargarCorreoEnFormulario':
    a('cargarCorreoEnFormulario')
    break
// mensaje titulo
case 'error': {
    if (valorNoEsUnRecord(parametrosDePagina)) {
        b(`Los parametros no son un record para mostrar pagina de error ${JSON.stringify(parametrosDePagina)}`)
        break
    }
    const { mensaje, titulo } = parametrosDePagina
    if (c(titulo)) {
        b(`Cuando se muestra un error se requiere que el titulo sea una cadena y esto se encontro: ${titulo}`)
        break
    }
    a('error', { mensaje, titulo })
    break
}
case 'validarUsuarioEsAdmin':
    a('validarUsuarioEsAdmin')
    break
default:
    a('onPaginaObjetivoInvalida')
}
