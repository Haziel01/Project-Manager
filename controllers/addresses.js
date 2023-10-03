const express = require('express');

function create(req, res, next) {
    res.send('Direccion creada');
}

function list(req, res, next) {
    res.send('Listado de Direcciones');
}

function index(req, res, next) {
  res.send("Direccion Index");
}

function replace(req, res, next) {
  res.send("Direccion reemplazada");
}

function update(req, res, next) {
  res.send("Direccion actualizada");
}

function destroy(req, res, next) {
  res.send("Direccion eliminada");
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
};