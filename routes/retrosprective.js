const express = require("express");
const router = express.Router();
const retrospective = require("../controllers/retrosprective");

router.post("/", retrospective.create);

router.get("/", retrospective.list);

router.get("/:id", retrospective.index);

router.put("/:id", retrospective.replace);

router.patch("/:id", retrospective.update);

router.delete("/:id", retrospective.destroy);

module.exports = router;
