const express = require("express");
const fs = require("fs");
const path = "C:/Users/user/Desktop/kodcode/node-js-project/data.json";

const getAllProducts = () => {
  const data = getJson(path);
  return data;
};

const getAProduct = (id) => {
  const data = getJson(path);
  for (let product = 0; product < data.length; product++) {
    if (id === data[product].id) {
      return data[product];
    }
  }
  return "product was not found";
};

const createNewProduct = (newProduct) => {
  const data = getJson(path);
  data.push(newProduct);
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
};

const updateProduct = (body, id) => {
  const data = getJson(path);
  for (let index = 0; index < data.length; index++) {
    if (id === data[index].id) {
      data[index] = body;
    }
  }
  fs.writeFileSync(path, JSON.stringify(data));
  return "product was updated";
};

const deleteTheProduct = (id) => {
  const data = getJson(path);
  const newArray = data.filter((obj) => obj.id !== id);
  fs.writeFileSync(path, JSON.stringify(newArray));
  return "product was deleted";
};

const updateTheInventory = (id) => {
  const data = getJson(path);
  let info = 0;
  for (let index = 0; index < data.length; index++) {
    if (id === data[index].id) {
      data[index].product.stock += 1;
      info = data[index].product.stock;
    }
  }
  fs.writeFileSync(path, JSON.stringify(data));
  return info;
};

const getJson = (path) => {
  const dataFromJson = fs.readFileSync(path);
  const convertData = JSON.parse(dataFromJson);
  return convertData;
};

module.exports = {
  getAllProducts,
  getAProduct,
  createNewProduct,
  updateProduct,
  deleteTheProduct,
  updateTheInventory,
};
