const express = require('express');
const router = express.Router();
const user = require('../controllers/users');

// Rutas para usuarios
router.get('/:id', user.index);
router.get('/', user.list);
router.post('/', user.create);
router.put('/:id', user.replace);
router.patch('/:id', user.update);
router.delete('/:id', user.destroy);

module.exports = router;