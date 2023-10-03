const express = require("express");
const router = express.Router();
const release = require("../controllers/releaseBacklogs");

router.post("/", release.create);

router.get("/", release.list);

router.get("/:id", release.index);

router.put("/:id", release.replace);

router.patch("/:id", release.update);

router.delete("/:id", release.destroy);

module.exports = router;
