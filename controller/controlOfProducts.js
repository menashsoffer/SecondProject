const {
  getAllProducts,
  getAProduct,
  createNewProduct,
  updateProduct,
  deleteTheProduct,
  updateTheInventory,
} = require("../dal/getProductInfo");

const getAllData = (req, res) => {
  const getAll = getAllProducts();
  if (typeof getAll !== Array) return res.status(404).send("was not found");
  res.send(getAll);
};

const getOneProduct = (req, res) => {
  const id = req.params.id;
  const getOne = getAProduct(id);
  if (typeof getOne !== "object") return res.status(404).send("was not found");
  res.send(getOne);
};

const createAProduct = (req, res) => {
  const body = req.body;
  const newProduct = body;
  const addOne = createNewProduct(newProduct);
  res.send(addOne);
};

const updateAProduct = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const update = updateProduct(body, id);
  res.send(update);
};

const deleteAProduct = (req, res) => {
  const id = req.params.id;
  const deleteMe = deleteTheProduct(id);
  res.send(deleteMe);
};

const updateInventory = (req, res) => {
  const id = req.params.id;
  const updateMe = updateTheInventory(id);
  res.send(updateMe);
};

module.exports = {
  getAllData,
  getOneProduct,
  createAProduct,
  updateAProduct,
  deleteAProduct,
  updateInventory,
};
