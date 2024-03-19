# Como leer este documento
La primer seccion "Cosas que saldran en siguiente release" indica lo que ya esta desarrollado y esta en espera de subirse a produccion, para subir a produccion se hace validacion de que nada truene y eso puede tardar, la fecha que tiene como tentativa es cuando se va a subir si no se encuntran problemas. Abajo de esta seccion se encuentra "Cosas pendientes de QA", que tiene todo lo que ya se desarrollo pero aun no se pasa a validar por calidad, y es lo que se subira despues de lo que esta en la seccion anterior. Las secciones abajo son el historico de lo que se subio por fecha

# Cosas que saldran en siguiente release
(Fecha tentativa de subida: 20 de marzo)
1. Nuevo modo arbol para la base de datos, es un nuevo modo para ver el data en la base de datos (no esta completo aun) pero sera para ver la info en la base como si fuera directo en firebase en lugar de en tablas, ademas se actualizo como se ve la tabla de los datos.<br /><img src="https://firebasestorage.googleapis.com/v0/b/apphive-inc.appspot.com/o/MediaReleases%2FDEVN-12501.png?alt=media" width="300">

2. Se agregaron mas propiedades en el modify control para camara, las propiedades son:
    - startRecord
    - stopRecord
    - videoResolutionWidth
    - videoResolutionHeight
    - type
3. Se puede renombrar un projecto dando click a la opcion del menu desplegable ademas de dando doble click al nombre <br /><img src="https://firebasestorage.googleapis.com/v0/b/apphive-inc.appspot.com/o/MediaReleases%2FDEVN-12583.png?alt=media" width="200">

# Cosas pendientes de QA
1. Se agrego boton para borrar los logs en una funcion en modo debug.<br /><img src="https://firebasestorage.googleapis.com/v0/b/apphive-inc.appspot.com/o/MediaReleases%2FDEVN-1718.PNG?alt=media" width="200">
2. Se pueden enviar ahora archivos usando http request y una nueva funcion llamada creformDataCreate (solo ios y android) [Video demo](https://firebasestorage.googleapis.com/v0/b/apphive-inc.appspot.com/o/MediaReleases%2FDEVN-12486.webm?alt=media)


# Historico
## 19 Marzo 2024
1. Se agrego la funcion "Get other user custom data" a cloud