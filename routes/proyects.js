const express = require('express');
const router = express.Router();
const projects = require('../controllers/proyects');

// Rutas para proyectos
router.get('/:id', projects.index);
router.get('/:id', projects.list);
router.post('/', projects.create);
router.put('/:id', projects.replace);
router.patch('/:id', projects.update);
router.delete('/:id', projects.destroy);

module.exports = router;