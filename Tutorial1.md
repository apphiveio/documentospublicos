# Documento de aplicacion de transporte

## Descripcion general del negocio
Se tiene una flotilla de autos con personal que los maneja y actualmente se hacen viajes (como bases de taxi) que ya se piden sin la app y la app sera mas bien una herramienta para que los usuarios puedan pagar directo y para que no tengan que dar direccion al chofer.

## Primera lista de requerimientos
- Como calcular cuanto vas a cobrar?
- Como calcular cuanto vas a cobrar?
- Como haremos para hacer viajes planificados?
- Como haremos los espontaneos?
- Como determinar que zonas pueden pedir viaje y a que distancias?
- Como testear sistema sin tener que conducir?
- Como determinar cuanto del viaje le toca al chofer y cuanto a la casa?
- Como manejar los horarios de los choferes?
- Cuales son los estados de los viajes (apartado, en curso, terminado, cancelado)
- Como vamos a bloquear usuarios (solo los admins)?

## Estructura de la base de datos en firebase

```typescript
type PathsEnLaBase = [
    {
        parametros: {
            correoEnBase64: string;
        };
        path: '/CorreosQuePuedenSerAdmins/${correoEnBase64}';
        valoresPosibles: true | null;
    },
]
```
