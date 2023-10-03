const express = require("express");

function create(req, res, next) {
  res.send("Product backlog creado");
}

function list(req, res, next) {
  res.send("Litado de product backlog");
}

function index(req, res, next) {
  res.send("Product backlog index");
}

function replace(req, res, next) {
  res.send("Product backlog remplazado");
}

function update(req, res, next) {
  res.send("Product backlog actualizado");
}

function destroy(req, res, next) {
  res.send("Product backlog eliminado");
}

module.exports = {
  list,
  index,
  create,
  replace,
  update,
  destroy,
};
