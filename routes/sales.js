const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/", async (req, res) => {
  console.log("check");
  res.json(await controller.getSales());
});

router.get("/PurchaseMethod/:purchaseMethod", async (req, res) => {
  res.json(
    await controller.getSalesByPurchaseMethod(req.params.purchaseMethod)
  );
});

router.get("/:id", async (req, res) => {
  res.json(await controller.getSaleById(req.params.id));
});

router.get("/Customer/:email/sales", async (req, res) => {
  res.json(await controller.getSalesByCustomerEmail(req.params.email));
});

router.get("/Satisfaction/:satisfactionLevel/Customers", async (req, res) => {
  const level = parseInt(req.params.satisfactionLevel);
  res.json(await controller.getListOfCustomersSatisfaction(level));
});

router.get("/StoreLocation/:storeLocation/Amount", async (req, res) => {
  res.json(
    await controller.getTotalAmountByStoreLocation(req.params.storeLocation)
  );
});

module.exports = router;
