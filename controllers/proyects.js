const express = require("express");

// Controladores para proyectos
function create(req, res, next){
  res.send("Project create");
}
function list(req, res, next){
  res.send("Project list");
}
function index(req, res, next){
  res.send("Project index");
}
function replace(req, res, next){
  res.send("Project replace");
}
function update(req, res, next){
  res.send("Project update");
}
function destroy(req, res, next){
  res.send("Project destroy");
}

module.exports = {
  list,
  index,
  create,
  replace,
  update,
  destroy
};