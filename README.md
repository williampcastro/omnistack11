# Omnistack 11
---

## Tipos de Parâmetros da Requisição GET

* __Query Params:__ Parâmetros nomeados enviados na rota após "?", utilizado para filtros e paginação. (Ex.: <http://localhost:3333/users/?name=william> | Uso: request.query)  

* __Route Params:__ parâmetros utilizados par identificar recuros (Ex.: <http://localhost:3333/users/:id> | Uso: request.params)  

* __Request Body:__ Corpo da requisição, utilizada para criar ou alterar recursos  


## Comnads of KNEX Migrations
    npx knex migrate:make create_incidents
    npx knex migrate:latest

## Lib that makes Validation on routes | Backend

* Celebrate (integra o Joi com o Express do node)
* Joi


## Extention to make tests | Backend
* jest => tests


## Dependencies backend
* cross-env => 