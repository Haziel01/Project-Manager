const express = require('express');

function create(req, res, next) {
    res.send('Panel de control creado');
}

function list(req, res, next) {
    res.send('Litado de Panel de control');
}

function index(req, res, next) {
  res.send("Panel de control index");
}

function replace(req, res, next) {
  res.send("Panel de control reemplazado");
}

function update(req, res, next) {
  res.send("Panel de control actualizado");
}

function destroy(req, res, next) {
  res.send("Panel de control eliminado");
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
};