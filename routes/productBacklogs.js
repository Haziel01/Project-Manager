const express = require("express");
const router = express.Router();
const sprint = require("../controllers/sprintBacklogs");

router.post("/", sprint.create);

router.get("/", sprint.list);

router.get("/:id", sprint.index);

router.put("/:id", sprint.replace);

router.patch("/:id", sprint.update);

router.delete("/:id", sprint.destroy);

module.exports = router;
