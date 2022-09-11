const service = require('../service/classes.service')
const moment = require('moment')

const myDatabase = []

const getAll = (req, res) => {
    res.send(service.getAll())
}

const create = (req, res) => {
    res.send("Aula cadastrada com sucesso!")
}

module.exports = {
    getAll,
    create
}