/**
 * productDAO.js
 */
 "use strict";
 const dbConnectionManager=require("../db/dbConnectionManager");
 //Inmomery data
 
 const Product = require("../model/product");
 const productDBDAO = (function () {
    //  const productsData = [
    //      new Product(1, 1001, "Apple iPhone 14", 1850.65),
    //      new Product(1, 1001, "Samsung Galaxy S14", 1750.65),
    //      new Product(1, 1001, "Google Pixel 7", 1250.65)
    //  ];
     const getProducts = async function () {
         const qryStrGetProducts="SELECT * from `product`.products";
         try{
            const dbConnection=dbConnectionManager.getConnection();
            //query is the command to query in database
            const [products]=await dbConnection.promise().query(qryStrGetProducts);
            return products;
         }catch(err){
            console.log(`Database Access Error:${error}`);
            throw error;
         }
     };
 
     const saveProduct = async function (product) {
        
        const cmdStrSaveProduct=`Insert into products(productNo,productName,unitPrice) values(${product.productNo},'${product.productName}',${product.unitPrice})`;
        console.log(cmdStrSaveProduct);
        try{
            const dbConnection=dbConnectionManager.getConnection(); 
            //execute is command to run command
            const saveOpResult=await dbConnection.promise().execute(cmdStrSaveProduct);
            return saveOpResult;
        }
        catch(error){
            console.log(`Database Access Error:${error}`);
            throw error;
        }

        productsData.push(product);
     }
 
     return {
         getProducts: getProducts,
         saveProduct:saveProduct
     }
 
 
 })();
 
 module.exports = productDBDAO;