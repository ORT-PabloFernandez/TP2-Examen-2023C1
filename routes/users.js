var express = require("express");
var router = express.Router();
const controller = require("../controllers/sales");

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("checkl");
  res.send("respond with a resource");
});

router.get("/:id", async (req, res) => {
  res.json(await controller.getSaleById(req.params.id));
});

module.exports = router;
