const express = require("express");
const router = express.Router();
const skills = require("../controllers/skills");

router.post("/", skills.create);

router.get("/", skills.list);

router.get("/:id", skills.index);

router.put("/:id", skills.replace);

router.patch("/:id", skills.update);

router.delete("/:id", skills.destroy);

module.exports = router;
