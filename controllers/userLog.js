const express = require('express');

function create(req, res, next) {
    res.send('User creado');
}

function list(req, res, next) {
    res.send('Listado de Usuarios');
}

function index(req, res, next) {
  res.send("User Index");
}

function replace(req, res, next) {
  res.send("User reemplazado");
}

function update(req, res, next) {
  res.send("User actualizado");
}

function destroy(req, res, next) {
  res.send("User eliminado");
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
};