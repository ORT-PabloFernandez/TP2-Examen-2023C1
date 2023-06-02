const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/", async (req, res) => {
  console.log("check");
  res.json(await controller.getSales());
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.json(await controller.getSaleById(id));
});

router.get("/purchaseMethod/:purchaseMethod", async (req, res) => {
  const purchaseMethod = req.params.purchaseMethod;
  res.json(await controller.getSalesByPurchaseMethod(purchaseMethod));
});

router.get("/customerEmail/:email", async (req, res) => {
  const email = req.params.email;
  res.json(await controller.getSalesByCustomerEmail(email));
});

router.get("/UnstisfiedCustomers/customers", async (req, res) => {
  res.json(await controller.getSalesByUnstisfiedCustomers());
});

router.get("/StoreLocation/:storeLocation", async (req, res) => {
  const storeLocation = req.params.storeLocation;
  res.json(await controller.getTotalSalesByStoreLocation(storeLocation));
});

module.exports = router;
