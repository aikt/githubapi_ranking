# Reto ranking github

## Descripción: 

- Se crea API usando NodeJS + ExpressJs 
- Se crean 1 endpoints:
  - Obtener el ranking dependiendo del limite y el lenguaje 
- Se integra middleware para la configuración de los headers de entrada
- Se integra una arquitectura de patrón estilo MVC
- Se integran herramientas de desarrollo (Nodemon, ESLint, Prettier)
- Se integran test con Jest y SuperJest
- Se integra Git hook con Lint-staged y Husky ✚ 1️⃣
- Se integra Dockerfile y Docker Compose ✚ 1️⃣

--------------------------------

## Listo para la explicación ? 💪🏼

## Requerimientos:

- Tener instalado NodeJS ( https://nodejs.org/en/download/ )
- Tener instalado NVM ( https://github.com/nvm-sh/nvm ) 
- Instalar la versión node 15 y usarla
```sh
nvm install 15 
nvm use 15
```

### Requerimientos opcionales:

- Tener instalado Docker ( https://docs.docker.com/get-docker/ ) 

## Esqueleto del proyecto

```bash
github_rankings
|   .env
|   .eslintrc.json
|   .gitignore
|   .prettierrc.json
|   app.js
|   config.js
|   Dockerfile
|   docker-compose.yml
|   index.js
|   package-lock.json
|   package.json
│   README.md
└───tests
    |   index.spec.js
└───middlewares
    |   configHeaders.js
└───routes
    |   index.js
└───services
    |   mongoose.js
└───src
    └───rankings
        |   routes.js
        └───controller
            │   index.js
     
    └───files_externals
        |   gitranking_csv.js
```

## Definición del esqueleto:

- __.env__: Archivo que contiene variables de entorno. Se pueden cargar a la aplicación usando el paquete _dotenv_. Se recomienda utilizar este enfoque para evitar exponer información relevante como credenciales.
- __.eslintrc.json__: Configuración de ESLint 
- __.gitignore__: Archivo que contiene archivos ignorados para evitar enviar archivos innecesarios al repositorio. 
- __.prettierrc.json__: Configuración de Prettier
- __app.js__: Archivo que crea una aplicación express y define algunos middlewares para personalizar la aplicación
- __config.js__: Archivo que contiene configuraciones de proyecto como puerto de escucha y algunos valores predeterminados para variables importantes
- __Dockerfile__: Conjunto de comandos necesarios para ensamblar una imagen
- __docker-compose.yml__: Es el orquestador para ensamblar diferentes servicios en nuestra imagen.
- __tests__: Carpeta que contiene los tests implementados
- __tests/index.spec.js__: Contiene las funciones donde cada una actua como test para nuestro API
- __index.js__: Punto de entrada de la aplicación. El archivo define la configuración del servidor.
- __package-lock.json__: Archivo generado automáticamente para cualquier operación en la que npm modifique el proyecto
- __package.json__: Archivo que contiene datos relevantes para el proyecto como paquetes instalados, herramientas configuradas, etc.
- __middlewares__: Carpeta que contiene middlewares relevantes para usar en el proyecto
- __middlewares/configHeaders__: Middleware encargado de configurar los headers como permitir solo GET, inhabilitar credenciales, etc
- __routes/index.js__: Archivo que resume todas las rutas de la API en el proyecto. Las rutas específicas se definirán en cada módulo de la aplicación.
- __src__: Carpeta que contiene la lógica para cada módulo
- __rankings__: Un modulo de la aplicación
- __rankings/routes.js__: Archivo que contiene todas las rutas para el rankings de Github
- __rankings/controller/index.js__: Básicamente, el conjunto de funciones que da vida a las API, se definen e implementan aquí.
- __file_externals__: Carpeta que contiene el archivo CSV y la logica
- __file_externals/gitranking_csv.js__: Contiene la función para leer el archivo CSV

Como puede verse, la aplicación se divide en diferentes partes. Cada módulo tiene sus propios modelos y controladores, todo está desconectado. Permite tener noción de todo el proyecto, modificar componentes de forma fácil y escalable.

## Comandos personalizados Package

    - "dev": "nodemon index.js",
    - "lint": "eslint .",
    - "lint:fix": "eslint . --fix",
    - "format": "prettier-eslint \"$PWD/{,!(node_modules)/**/}*.{js,json}\"",
    - "format:fix": "prettier-eslint --write \"$PWD/{,!(node_modules)/**/}*.{js,json}\"",
    - "test": "jest"
    
## Dockerización

- Se implemento Docker para evitar tiempos de instalación en la maquina del examinador, el contenedor se indico que se ejecutara en el puerto 5001 y se corre de la siguiente manera:

```bash
  docker-compose up--build
```

- Se implemento GitHooks + Husky + Lint-staged esto quiere decir que cada vez que se ejecute un "git commit" nuestro hook "pre-commit" ejecutara "lint-staged" que contiene los comandos de "lint:fix" y "git add". En caso de fallar los archivos no se subiran y así se evitaran catastrofes en producción. A continuación muestro screenshots de como fallo un git commit

- Aquí nos indica que un import debe ir antes de otro import.

<img width="1069" alt="Screen Shot 2022-07-18 at 2 16 41" src="https://user-images.githubusercontent.com/16615287/179482218-c7e96144-0e76-455c-b3af-4523bd7f7cd9.png">


## Pruebalo!! ;)

Después de clonar el proyecto, es necesario instalar __ESLint__ y __nodemon__ globalmente e instalar otros localmente

```bash
  npm install nodemon -g
  npm install eslint -g
  npm i
  npm run dev
```

Ahora, la aplicación debería estar ejecutándose y lista para probar. Visita la url localhost:5000/rankings?q=10&l=Javascript

## Rutas 

- /rankings?q=numero&l=lenguaje: Devuelve la lista de rankings del CSV filtrado por el "q" (limite) y "l" (busqueda del lenguaje)


## Testings

- Para correr los testings, basta ejecutar "npm run test"
- Se crean 5 funciones que actuaran cada una de ella como un testing:
    ✓ Get the list ranking by word "Javascript" and limit 10 with status 200 code

    <img width="1016" alt="1" src="https://user-images.githubusercontent.com/16615287/191386142-9d02a23b-d463-45cf-8042-9265099abebd.png">
    
    ✓ Get an 404 code because the parameter q or l are not exist in the query params (13 ms)

<img width="593" alt="2" src="https://user-images.githubusercontent.com/16615287/191386156-3f46f0cc-db8a-4f7a-a250-65b8216d31be.png">

    ✓ Get an 404 code because the parameter q need are only number (8 ms)

<img width="523" alt="3" src="https://user-images.githubusercontent.com/16615287/191386165-290cbf75-50eb-497e-9005-f768a691a4cc.png">

    ✓ Get an 404 code because the parameter q need are number positive (1 ms)

<img width="624" alt="4" src="https://user-images.githubusercontent.com/16615287/191386173-df90a89d-94bd-4dfb-9ab6-0a84151b4321.png">

    ✓ Get an 404 code because the route "noexistodemoruta" doesnt exist in the routes of the controller of rankings (1 ms)

<img width="527" alt="5" src="https://user-images.githubusercontent.com/16615287/191386190-f746c3f1-b159-4a31-90ea-cfc08bd0719a.png">


