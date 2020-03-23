const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    return response.send({
        evento: 'Semana Omnistack',
        aluno: "William Castro"
    })
})

app.listen(3333);
