/**
 * productDAO.js
 */
"use strict";
//const dbConnectionManager=require("../db/dbConnectionManager");
//Inmomery data

const Product = require("../model/product");
const productDAO = (function () {
    const productsData = [
        new Product(1, 1001, "Apple iPhone 14", 1850.65),
        new Product(1, 1001, "Samsung Galaxy S14", 1750.65),
        new Product(1, 1001, "Google Pixel 7", 1250.65)
    ];
    const getProducts = function () {
        return productsData;
    }

    const saveProduct = function (product) {
        productsData.push(product);
    }

    return {
        getProducts: getProducts,
        saveProduct:saveProduct
    }


})();

module.exports = productDAO;