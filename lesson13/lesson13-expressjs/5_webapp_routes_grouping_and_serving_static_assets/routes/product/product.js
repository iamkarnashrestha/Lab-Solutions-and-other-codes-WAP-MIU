/**
 * product.js
 */
"use strict";

const express = require("express");
const path = require("path");
const productRouter = express.Router();

// Define routes for product pages
productRouter.get("/list", (req, res, next) => {
    console.log(`Presenting list of products page`);
    res.sendFile(path.join(__dirname, "../../views", "product-list.html"));
});

module.exports = productRouter;
