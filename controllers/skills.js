const express = require('express');

function create(req, res, next) {
    res.send('Skill creado');
}

function list(req, res, next) {
    res.send('Listado de Skills');
}

function index(req, res, next) {
  res.send("Skill Index");
}

function replace(req, res, next) {
  res.send("Skill reemplazado");
}

function update(req, res, next) {
  res.send("Skill actualizado");
}

function destroy(req, res, next) {
  res.send("Skill eliminado");
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
};