var express = require('express');
var router = express.Router();

// Traigo todas las funciones de la API
const api = require('../api')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET nosotros page */
router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros', { title: 'Nosotros' });
});

/* GET contacto page */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto', { title: 'Contacto' });
});

// localhost:3000/libros
router.get('/libros',async (req, res) => {
  // Llamar la función getbooks
  const books = await api.getBooks();
  
  //Devolver el Json con los libros recibidos
  res.send(books);
})

module.exports = router;