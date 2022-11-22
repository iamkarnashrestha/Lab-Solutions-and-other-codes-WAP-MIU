/**
 * index.js
 */
"use strict";
const express=require("express");
const app=express();
const portNumber=5000;
app.use("/",(req,res)=>{
    console.log(`Serving homepage content`);
    const homepageContent= `
    <!doctype html>
    <html lang="en">
        <head>
            <title>Express app</title>
        </head>
        <body>
            <h1>Welcome to first Express App</h1>
        </body>
    </html>
    `;
    res.send(homepageContent);
});
app.listen(portNumber,()=>{
    console.log(`Listening port no ${portNumber}`);
})