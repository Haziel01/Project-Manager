const express = require("express");
const router = express.Router();
const userLog = require("../controllers/userLog");

router.post("/", userLog.create);

router.get("/", userLog.list);

router.get("/:id", userLog.index);

router.put("/:id", userLog.replace);

router.patch("/:id", userLog.update);

router.delete("/:id", userLog.destroy);

module.exports = router;
