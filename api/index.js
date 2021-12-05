const { Op } = require("sequelize");

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

const getAuthors = async () => {
    //SELECT * FROM autor
    const authors = await db.autor.findAll().then(result => {
        return result
    });

    return authors;
}

const getBookById = async (id) => {
    console.log('*--*-*-*-***-*-');
    console.log('El ID que llegó a/api es' + id);
    console.log('*--*-*-*-***-*-');
    // SELECT * FROM libro WHERE id_libro = 3
    // findByPk = find primary key
    const book = await db.libro.findByPk(id, { 
        include: db.autor
     }).then(result => {
         return result;
     });

    return book;
}

const searchByTitle = async (titulo) => {
    // Op.substring toma una cadena y lo agrega %
    // SELECT * FROM libros
    // WHERE columna OPERADOR valor
    const results = await db.libro.findAll({
        where: {
            titulo:{     
            [Op.substring]: titulo
            }
        }, 
        include: db.autor
        
    }).then(result => {
        return result;
    });

    return results;

}

const addBook = (titulo, precio, portada, autorId) => {
    //Acá vamos a agregar un libro
    console.log('Llegó', titulo, precio, portada, autorId);
}


// Exportamos las funciones
module.exports = { 
    getBooks,
    getAuthors,
    getBookById,
    searchByTitle,
    addBook
}