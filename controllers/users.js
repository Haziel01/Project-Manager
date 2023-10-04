const express = require("express");

// Controladores para usuarios
function create(req, res, next){
  res.send("User create");
}
function list(req, res, next){
  res.send("User list");
}
function index(req, res, next){
  res.send("User index");
}
function replace(req, res, next){
  res.send("User replace");
}
function update(req, res, next){
  res.send("User update");
}
function destroy(req, res, next){
  res.send("User destroy");
}

module.exports = {
  list,
  index,
  create,
  replace,
  update,
  destroy
};