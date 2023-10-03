const express = require('express');

function create(req, res, next) {
    res.send('Historia creada');
}

function list(req, res, next) {
    res.send('Litado de historias creada');
}

function index(req, res, next) {
  res.send("Historia index");
}

function replace(req, res, next) {
  res.send("Historia reemplazada");
}

function update(req, res, next) {
  res.send("Historia actualizada");
}

function destroy(req, res, next) {
  res.send("Historia eliminada");
}

module.exports = {
    list,
    index,
    create,
    replace,
    update,
    destroy
};