# Sistema de Registro de Personas

## Descripción
Este sistema permite registrar personas ingresando su nombre, apellido y DNI. Además, se pueden asociar múltiples números telefónicos a cada persona. Una vez finalizada la carga de datos, el sistema muestra la información ingresada en la consola.

## Tecnología Utilizada
- Python (para la implementación en terminal / consola)

## Estructura de los Datos
Los datos se almacenan en una matriz con el siguiente formato:

```
['Juan', 'Perez', '26123456', ['3704112233', '3704321456', '3704122321']]
['Andres', 'Acosta', '29123654', ['3704223344', '3704212223']]
```

Cada registro contiene:
- Nombre
- Apellido
- DNI
- Lista de números telefónicos asociados

## Instalación y Ejecución
### En Python
1. Asegúrate de tener Python instalado en tu sistema.
2. Descarga o clona este repositorio.
3. Abre una terminal en la carpeta del proyecto y ejecuta:
   ```bash
   python sistema.py
   ```

## Uso
1. El sistema solicitará ingresar el nombre, apellido y DNI de una persona.
2. Luego, se podrán ingresar uno o varios números telefónicos.
3. Una vez completada la carga de datos, se mostrará la lista de personas registradas con sus respectivos teléfonos.

## Autor
Desarrollado por Mauricio Heredia

