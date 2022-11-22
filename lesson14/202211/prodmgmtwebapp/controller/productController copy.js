/**
 * productController.js
 */
"use strict";
const productDAO = require("../dao/productDAO");
const productDBDAO=require("../dao/productDBDAO");
const Product = require("../model/product");

const productController = (function () {

    const getProducts = function (req, res) {
        //ToDO get the products from the DAO
        //return productDAO.getProducts();

        return productDBDAO.getProducts();
    }

    const addNewProduct = function (req, res) {
        const productId = productDAO.getProducts() + 1;
        const productNo = req.body.productNo;
        const productName = req.body.productName;
        const unitPrice = req.body.unitPrice;
        const newProduct = new Product(productId, productNo, productName, unitPrice);
        productDAO.saveProduct(newProduct);

    }

    return {
        getProducts: getProducts,
        addNewProduct: addNewProduct
    }

})();
module.exports = productController;