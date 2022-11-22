/**
 * index.js
 * @author: Karna
 */

console.log("Hello Product Management Web App");
const express=require("express");
const app=express();
const path=require("path");
const homePageRoutes = require("./routes/public/home");
const productRoutes=require("./routes/product/productRoutes");
console.log(`Product Management Web App Server Starting.... Please wait.`);
const PORT_NUMBER=9000;

//Define Middlewares
app.set("views", path.join(__dirname,"views"));
app.set("view engine","pug");

//set up express HttoRequest

//Parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended:false}));


//Set folder named "public" as the source folder for all static content
app.use("/static",express.static(path.join(__dirname,"public")));


//set up routes for homepage
app.use("",homePageRoutes);

//setup routes for products page
app.use("/prodmgmt/product",productRoutes);


// app.get("/",(req,res)=>{
//    // res.send(`<h1> Hello from Product Management Web App Home Page`);
//    res.sendFile(path.join(__dirname,"views","index.html"))
// })






app.listen(PORT_NUMBER,()=>{
    console.log(`Product Management Web App Server Started. Listening on port number ${PORT_NUMBER}`);
});


