const express = require("express");
const Backlog = require("../models/backlogs");
const UserHistory = require("../models/userHistory");

async function list(req, res) {
  try {
    let page = req.params.page ? req.params.page : 1;
    const options = {
      page: page,
      limit: 5,
    };
        const backlogs = await Backlog.find().populate("_histories").paginate({}, options);
        res.status(200).json(backlogs);
    }catch(err) { 
        res.status(500).json({
            message: "error."
        });
  }
}

async function create(req, res, next) {
  try {
    title = req.body.title;
    histories = req.body.historiesIds;
    backLogType = req.body.backLogType;
    const backlogs = new Backlog({ title, histories, backLogType });
    const savedBacklog = await backlogs.save();
    res.status(200).json(savedBacklog);
  } catch (err) {
    res.status(500).json({
      message: "error.",
    });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { __title, __historiesIds, __BackLogtype } = req.body;
    __histories = [];
    __historiesIds.forEach(async (historyId) => {
      const history = await UserHistory.findOne({ _id: historyId });
      if (history) {
        __histories.push(history);
      }
    });
    const update = await Backlog.findByIdAndUpdate(
      id,
      { __title, __histories, __BackLogtype },
      { new: true }
    );

    res.status(200).json(update);
  } catch (err) {
    res.status(500).json({
      message: "error.",
    });
  }
}

async function destroy(req, res) {
  try {
    const { id } = req.params;
    await BacklogItem.findByIdAndRemove(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({
      message: "error.",
    });
  }
}

module.exports = {
  list,
  create,
  update,
  destroy,
};
