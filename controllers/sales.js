const sales = require("../data/supplies");

async function getSales() {
  return sales.getAllSales();
}

async function getSaleId(id) {
  return sales.getSaleId(id);
}

async function getCustomersUnhappy() {
  return sales.getCustomersUnhappy();
}

async function getSalesMethod(method) {
  return sales.getSalesMethod(method);
}

async function getPurchaseEmail(mail) {
  return sales.getPurchaseEmail(mail);
}

module.exports = {
  getSales,
  getSaleId,
  getCustomersUnhappy,
  getSalesMethod,
  getPurchaseEmail,
};
