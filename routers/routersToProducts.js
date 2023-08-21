const express = require("express");
const {
  getAllData,
  getOneProduct,
  createAProduct,
  updateAProduct,
  deleteAProduct,
  updateInventory,
} = require("../controller/controlOfProducts.js");
const routes = express.Router();

routes.get("/getAllData", getAllData);

routes.get("/getAProduct/:id", getOneProduct);

routes.post("/createAProduct", createAProduct);

routes.put("/updateAProduct/:id", updateAProduct);

routes.delete("/deleteAProduct/:id", deleteAProduct);

routes.put("/updateInventory/:id", updateInventory);

module.exports.routes = routes;
