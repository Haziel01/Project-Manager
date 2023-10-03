const express = require("express");

function create(req, res, next) {
  res.send("Release backlog creado");
}

function list(req, res, next) {
  res.send("Litado de release backlog");
}

function index(req, res, next) {
  res.send("Release backlog index");
}

function replace(req, res, next) {
  res.send("Release backlog reemplazado");
}

function update(req, res, next) {
  res.send("Release backlog actualizado");
}

function destroy(req, res, next) {
  res.send("Release backlog eliminado");
}

module.exports = {
  list,
  index,
  create,
  replace,
  update,
  destroy,
};
