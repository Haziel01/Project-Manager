const express = require("express");
const router = express.Router();
const history = require("../controllers/historyCard");

router.post("/", history.create);

router.get("/", history.list);

router.get("/:id", history.index);

router.put("/:id", history.replace);

router.patch("/:id", history.update);

router.delete("/:id", history.destroy);

module.exports = router;
