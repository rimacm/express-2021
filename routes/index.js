var express = require('express');
var router = express.Router();

// Traigo todas las funciones de la API
const api = require('../api')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET /resultados page */
router.get('/resultados', async (req, res) => {
  // Conseguir lo que usuario tipeó en el campo 'TITULO'
  // CONST titulo = req.query.titulo
  const {titulo} = req.query;

  // Enviar titulo a la API
const results = await api.searchByTitle(titulo);

  res.send(results);
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
  res.render('pages/libros',{books});
});

router.get('/libro/:id', async (req, res) =>{
  // console.log('La ruta trajo: + req.params.id');
  const book = await api.getBookById(req.params.id);

  res.render('pages/libro',{book});
});



module.exports = router;