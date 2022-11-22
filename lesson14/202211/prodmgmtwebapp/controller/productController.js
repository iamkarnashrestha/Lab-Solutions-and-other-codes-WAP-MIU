/**
 * productController.js
 */
"use strict";
const productDAO = require("../dao/productDAO");
const productDBDAO=require("../dao/productDBDAO");
const Product = require("../model/product");

const productController = (function () {

    const getProducts = async function (req, res) {
        try {
            const products = await productDBDAO.getProducts();
            
            return products;
        } catch (error) {
            res.status(500);
            res.render("50X", { error: error });
        }
        return products;
    }
    

    const addNewProduct = async function (req, res) {
        //const productId = productDAO.getProducts() + 1;
        const productNo = req.body.productNo;
        const productName = req.body.productName;
        const unitPrice = req.body.unitPrice;
      
        const newProduct = new Product(null,productNo, productName, unitPrice);

        try {
            const opsRes = await productDBDAO.saveProduct(newProduct);
            return opsRes;
        
        } catch (error) {
            res.status(500);
            res.render("50X", { error: error });
        }

    }

    return {
        getProducts: getProducts,
        addNewProduct: addNewProduct
    }

})();
module.exports = productController;