estas son las dos rutas que funcionan, puedes usarlas a travez de postman o con la extencion de vscode de Rest client

GET http://localhost:3000/authors

###

POST http://localhost:3000/authors HTTP/1.1
content-type: application/json

{
    "userId": "2",
    "title": "sample",
    "content": "lorem itsum"
}