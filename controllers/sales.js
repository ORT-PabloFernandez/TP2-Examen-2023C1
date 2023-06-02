const sales = require("../data/supplies");

async function getSales() {
  return sales.getAllSales();
}

async function getSaleById(id) {
  return sales.getSaleById(id);
}

async function getSalesByPurchaseMethod(purchaseMethod) {
  return sales.getSalesByPurchaseMethod(purchaseMethod);
}

async function getSalesByCustomerEmail(email) {
  return sales.getSalesByCustomerEmail(email);
}

async function getSalesByUnstisfiedCustomers() {
  return sales.getSalesByUnstisfiedCustomers();
}

async function getTotalSalesByStoreLocation(storeLocation) {
  return sales.getTotalSalesByStoreLocation(storeLocation);
}

module.exports = {
  getSales,
  getSaleById,
  getSalesByPurchaseMethod,
  getSalesByCustomerEmail,
  getSalesByUnstisfiedCustomers,
  getTotalSalesByStoreLocation,
};
