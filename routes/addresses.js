const express = require("express");
const router = express.Router();
const address = require("../controllers/addresses");

router.post("/", address.create);

router.get("/", address.list);

router.get("/:id", address.index);

router.put("/:id", address.replace);

router.patch("/:id", address.update);

router.delete("/:id", address.destroy);

module.exports = router;
