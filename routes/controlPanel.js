const express = require("express");
const router = express.Router();
const panel = require("../controllers/controlPanel");

router.post("/", panel.create);

router.get("/", panel.list);

router.get("/:id", panel.index);

router.put("/:id", panel.replace);

router.patch("/:id", panel.update);

router.delete("/:id", panel.destroy);

module.exports = router;
