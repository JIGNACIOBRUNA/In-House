# In-House

### Proyecto que consiste en una API REST desarrollada en Node.js. Permite a los crear, listar y eliminar/deshabilitar chatbots, además de enviar preguntas y recibir respuestas simuladas de los chatbots creados. 

## Instalacion 

 Asegúrate de tener instalado Node.js v18.12.1 y PostgreSQL 14.8 en tu sistema.

## Clona este repositorio en tu máquina local:
 1. git clone https://github.com/JIGNACIOBRUNA/In-House.git
 2. Navega hasta el directorio del proyecto:
 3. cd API-In-House

## Instala las dependencias del proyecto usando npm:
 npm install

### Dependencias 

```plaintext
axios: ^1.6.8
cors: ^2.8.5
dotenv: ^16.4.5
express: ^4.19.2
pg: ^8.11.3
sequelize: ^6.37.1
jest: "^29.7.0",
supertest: "^6.3.4"
```

## Configuración

1. Crea un arhivo ".env" en directorio raiz del proyecto
2. Agrega las siguientes variables de entorno:
   
```plaintext
DB_USERNAME=tu_usuario_de_postgres
DB_PASSWORD=tu_contraseña_de_postgres
DB_DATABASE=nombre_de_tu_base_de_datos
DB_HOST=localhost
DB_PORT=3001
```

### Ejecucion 

1. Ejecuta el servidor: "npm start"
2. El servidor estará disponible en: http://localhost:3001

### Uso  
Crear un nuevo chatbot  
URL: /chatbots  
Método HTTP: POST  
Body: 


### Uso 
Crear un nuevo chatbot 
 URL: /chatbots 
 Método HTTP: POST 
 Body: 
 ```plaintext
{
  "name": "Nombre del Chatbot",
  "description": "Descripción del Chatbot"
}
```
Respuesta Exitosa:
```plaintext
{
  "id": 1,
  "name": "Nombre del Chatbot",
  "description": "Descripción del Chatbot",
  "state": true,
  "createdAt": "2024-03-27T02:37:49.316Z",
  "updatedAt": "2024-03-27T02:37:49.316Z"
}
```
Listar todos los chatbots
 URL: /chatbots
 Método HTTP: GET
 Respuesta Exitosa:
 ```plaintext
[
  {
    "id": 1,
    "name": "Nombre del Chatbot",
    "description": "Descripción del Chatbot",
    "state": true,
    "createdAt": "2024-03-27T02:37:49.316Z",
    "updatedAt": "2024-03-27T02:37:49.316Z"
  }
]
```
Eliminar un chatbot
 URL: /chatbots/:id
 Método HTTP: DELETE
 Respuesta Exitosa:
  ```plaintext
{
  "message": "Chatbot deshabilitado exitosamente"
}
```
Enviar una pregunta a un chatbot
 URL: /chatbots/:id/ask
 Método HTTP: POST
 Body:
  ```plaintext
{
  "question": "¿Cuál es tu nombre?"
}
```
Respuesta Exitosa:
```plaintext
{
  "message": "Mi nombre es Nombre del Chatbot, y mi ID es :id."
}
```
