# Express-TypeScript

Este proyecto es una pequeña API RESTful desarrollada en TypeScript con Express que permite gestionar entradas de diario. Utiliza como base de datos un JSON, ya que lo utilicé para practicar TypeScript. Luego hice un proyecto más completo, que es  [este.](https://github.com/V11Playko/API-REST-Typescript)  :)

## Configuración ##

1. Clona este repositorio.
2. Instala las dependencias con **npm install**.
3. Tambien puedes ver y exportar la [colección de postman.](docs/express%20typescript.postman_collection.json)

## Ejecución ##

Para ejecutar el proyecto, utiliza el siguiente comando:

   ```sh
   npm start
   ```

Y en modo dev:

   ```sh
   npm run dev
   ```

## Uso ##
El proyecto expone una API REST para manejar diarios. A continuación se detallan los endpoints disponibles:

- GET /ping: Endpoint de prueba para verificar que el servidor está en funcionamiento. Devuelve "pong".
- GET /api/diaries: Obtiene una lista de todas las entradas de diario sin información sensible.
- GET /api/diaries/:id: Obtiene una entrada de diario específica por su ID.
- POST /api/diaries: Agrega una nueva entrada de diario.

## Estructura del Proyecto ##

- src/index.ts: Archivo principal que configura y arranca el servidor Express.
- src/routes/diaryRoutes.ts: Definición de las rutas de la API relacionadas con las entradas de diario.
- src/services/diaryservices.ts: Servicios que contienen la lógica de negocio para manejar las entradas de diario.
- src/utils/enum.ts: Definición de enumeraciones para el clima y la visibilidad.
- src/utils/types.d.ts: Definición de tipos de datos utilizados en el proyecto.
- src/utils/utils.ts: Funciones de utilidad para validar y transformar datos de entrada.


## Licencia ##

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

## Comentario ##
Si tienes algún comentario sobre el repositorio, por favor dímelo para poder mejorar :)

- 📫 Cómo contactarme **heinnervega20@gmail.com**