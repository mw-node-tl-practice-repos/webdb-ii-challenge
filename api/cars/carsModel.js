const db = require('../../data/dbConfig');

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
}

function find() {
    return db('cars')
}

function findById(id) {
    console.log('This is the id the database is looking for', {id})
    return db('cars')
    .where({id})
}

function insert(car) {
    console.log('This is what is being entered into the database', car)
    return db('cars')
    .insert(car)
    .then(ids => {
        const [id] = ids 
        console.log("This is ids", ids)
        console.log("This is id", [{id}])
        return db('cars')
        .where({id})
    })
}

function update(id, changes) {
    return db('cars')
    .where({id})
    .update(changes)
    .then(() => {
        return db('cars')
        .where({id})
    })
    // .then(ids => {
    //     const [id] = ids
    //     console.log("Normal", id)
    //     console.log("Ids", ids)
    //     console.log("Brackets", [id])
    //     return db('cars')
    //     .where({id})
    //     .first()
    // })
}

function remove(id) {
    return db('cars')
    .where({id})
    .delete();
}