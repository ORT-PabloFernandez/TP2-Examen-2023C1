const sales = require("../data/supplies");

async function getSales() {
  return sales.getAllSales();
}

async function getSaleById(id) {
  return sales.getSaleById(id);
}

async function getSalesByPurchaseMethod(pMethod) {
  return sales.getSalesByPurchaseMethod(pMethod);
}

async function getSalesByCustomerEmail(email) {
  return sales.getSalesByCustomerEmail(email);
}

async function getListOfCustomersSatisfaction(satisfactionLevel) {
  return sales.getListOfCustomersSatisfaction(satisfactionLevel);
}

async function getTotalAmountByStoreLocation(storeLocation) {
  const salesByLocation = await sales.getTotalAmountByStoreLocation(
    storeLocation
  );
  let totalAmount = 0;
  salesByLocation.map((sale) => {
    sale.items.map((item) => {
      totalAmount += item.price * item.quantity;
    });
  });
  return storeLocation.toString() + ": $" + totalAmount;
}

module.exports = {
  getSales,
  getSaleById,
  getSalesByPurchaseMethod,
  getSalesByCustomerEmail,
  getListOfCustomersSatisfaction,
  getTotalAmountByStoreLocation,
};
