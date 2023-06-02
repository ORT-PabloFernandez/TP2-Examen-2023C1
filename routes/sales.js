const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/email/:mail", async (req, res) => {
  console.log("entro");
  res.json(await controller.getPurchaseEmail(req.params.mail));
});

router.get("/", async (req, res) => {
  console.log("check");
  res.json(await controller.getSales());
});

router.get("/:_id", async (req, res) => {
  const id = req.params._id;
  res.json(await controller.getSaleId(id));
});

router.get("/unHappy", async (req, res) => {
  res.json(await controller.getCustomersUnhappy());
});

router.get("/salesMethod/:method", async (req, res) => {
  res.json(await controller.getSalesMethod(req.params.method));
});

module.exports = router;
