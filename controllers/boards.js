const express = require("express");
const Board = require("../models/board");
const Columns = require("../models/column");

async function create(req, res, next) {
  let name = req.body.name;
  let columnsIds = req.body.columnsIds;
  columns = [];

  columnsIds.forEach(async (columnId) => {
    const column = await Columns.findOne({ _id: columnId });
    if (column) {
      columns.push(column);
    }
  });

  let board = new Board({
    name: name,
    columns: columns,
  });

  board
    .save().then((obj) =>
      res.status(200).json({
        message: "ok",
        obj: obj,
      })).catch((ex) =>
      res.status(500).json({
        message: "error",
        ex: ex,
      }));
}

function list(req, res, next) {
  let page = req.params.page? req.params.page: 1;
  const options = {
    page: page,
    limit: 5
  };
  Booking.paginate({},options).then((objs) =>
      res.status(200).json({
        message: "ok",
        obj: objs,
      })).catch((ex) =>
      res.status(500).json({
        message: "error",
        obj: ex,
      }));
}

function index(req, res, next) {
  const id = req.params.id;
  Board.findOne({ _id: id })
    .then((obj) =>
      res.status(200).json({
        message: "ok",
        obj: obj,
      })
    )
    .catch((ex) =>
      res.status(500).json({
        message: "error",
        obj: ex,
      })
    );
}

function replace(req, res, next) {
  const id = req.params.id;
  const name = req.body.name ? req.body.name : "";
  const columnsIds = req.body.columnsIds ? req.body.columnsIds : "";
  const columns = [];

  columnsIds.forEach(async (columnId) => {
    const column = await Columns.findOne({ _id: columnId });
    if (column) {
      columns.push(column);
    }
  });

  let rol = new Object({
    _name: name,
    _columns: columns,
  });

  Board.findOneAndUpdate({ _id: id }, rol, { new: true }).then((obj) =>
      res.status(200).json({
        message: "ok",
        obj: obj,
      })).catch((ex) =>
      res.status(500).json({
        message: "error",
        obj: ex,
      }));
}

function update(req, res, next) {
  const id = req.params.id;
  const name = req.body.name;
  const columnsId = req.body.columnsId;
  const columns = [];
  
  columnsId.forEach(async (columnId) => {
    const column = await Columns.findOne({ _id: columnId });
    if (column) {
      columns.push(column);
    }
  });

  let board = new Object();
  if (name) board._name = name;
  if (columns) board._columns = columns;

  Board.findOneAndUpdate({ _id: id }, board).then((obj) =>
      res.status(200).json({
        message: "ok",
        obj: obj,
      })).catch((ex) =>
      res.status(500).json({
        message: "error",
        obj: ex,
      }));
}

function destroy(req, res, next) {
  const id = req.params.id;
  Board.findByIdAndRemove({ _id: id }).then((obj) =>
      res.status(200).json({
        message: "ok",
        obj: obj,
      })).catch((ex) =>
      res.status(500).json({
        message: "error",
        obj: ex,
      }));
}

module.exports = {
  list,
  index,
  create,
  replace,
  update,
  destroy,
};
