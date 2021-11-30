// traer DB
const db = require('../models');

// SELET * FROM libro
// Esto es una función anónima de tipo arow function guardada en una variable llamada getbooks... por lo tanto es una funci{on llamada getbooks}
const getBooks = async () => {
    // Llamo a la DB
    const books = await db.libro.findAll({
        include: db.autor
    }).then(result => {
        return result;
    });

    return books;
}

// Exportamos las funciones
module.exports = { 
    getBooks
}