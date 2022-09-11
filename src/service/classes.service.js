const myDatabase = []

const getAll = () => myDatabase

const create = classes => {
    myDatabase.push(classes)
    classDataBase = myDatabase 
}

module.exports = {
    getAll,
    create
}