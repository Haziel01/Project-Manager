const express = require("express");

function create(req, res, next) {
  res.send("Retrospectiva backlog creado");
}

function list(req, res, next) {
  res.send("Litado de retrospectivas");
}

function index(req, res, next) {
  res.send("Retrospectivas index");
}

function replace(req, res, next) {
  res.send("Retrospectiva reemplazada");
}

function update(req, res, next) {
  res.send("Retrospectiva actualizada");
}

function destroy(req, res, next) {
  res.send("Retrospectiva eliminada");
}

module.exports = {
  list,
  index,
  create,
  replace,
  update,
  destroy,
};
