const express = require('express')
const router = require('./router/classes.routes')
const app = express()

app.use(express.json())
app.use('/api/v1/classes', router)

app.listen(3001, () => console.log('Servidor rodando na porta 3001'))