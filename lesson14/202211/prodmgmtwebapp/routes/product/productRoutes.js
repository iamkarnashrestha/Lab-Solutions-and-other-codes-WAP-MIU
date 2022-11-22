
/**
 * productRoutes.js
 */
"use strict";
const express = require("express");
const path = require("path");
const productController = require("../../controller/productController");

const productRouter = express.Router();

productRouter.get("/list", async(req, res) => {
    const products = await productController.getProducts();
    res.render("product/productList", { products : products}); 
});

productRouter.get("/product-form", (req, res) => {
    res.sendFile(path.join(__dirname, "../../views/product", "product-form.html"));
});


productRouter.post("/new", async(req, res) => {
    await productController.addNewProduct(req,res);
    res.redirect(303,"list");
});


module.exports = productRouter;