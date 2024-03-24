const express = require('express');
const router = express.Router();
const productController = require("../controller/productController.js");

//get all products
router.get("/", productController.getAllProducts);

//get a single product by id
router.get("/:id", productController.getOneProduct);

//add a new product
router.post("/", productController.createProduct);

//update an existing product
router.put("/:id", productController.updateProduct);

//delete a product
router.delete("/:id", productController.deleteProduct);

module.exports = router;
