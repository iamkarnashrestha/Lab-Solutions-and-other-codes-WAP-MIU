/**
 * index.js
 */
"use strict";

import express from "express";
import path from "path";
import url from "url";
import cookieParser from "cookie-parser";

const app = express();
const __fileName = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

// Middlewares

// Setup Cookie-Parser middleware
app.use(cookieParser());

// Setup HttpRequest parser for x-www-form-urlencoded form data
app.use(express.urlencoded( { extended: false } ));

// Setup Views path and View Engine 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Setup path/location of static content/resources i.e. css, images, js etc.
app.use("/static", express.static(path.join(__dirname, "static-assets")));

// Setup HttpGetRequest handler for homepage route
app.get("/", (req, res) => {
    if(req.cookies.rememberMe) {
        const emailAddr = req.cookies.emailAddr;
        console.log(`Email is ${emailAddr}`);
        res.locals = { emailAddr: emailAddr };
        res.render("index");
    } else {
        res.sendFile(path.join(__dirname, "./views", "login-form.html"));
    }
});

app.post("/signIn", (req, res) => {
    console.log(`Remember is ${req.body.rememberMe}`);
    if(req.body.rememberMe) {
        // Set non-persistent cookies -- gets removed when browser is closed
        res.cookie("rememberMe", "1");
        res.cookie("emailAddr", req.body.txtEmailAddr);
        // Set persistent cookies
        // res.cookie("rememberMe", "1", {maxAge: 7*24*60*60*1000});
        // res.cookie("emailAddr", req.body.txtEmailAddr, {maxAge: 7*24*60*60*1000});
    }
    res.redirect("back");
});

app.get("/signOut", (req, res) => {
    res.clearCookie("rememberMe");
    res.clearCookie("emailAddr");
    res.redirect("back");
});

// Setup error 404
// TODO

app.listen(3000, () => {
    console.log(`Server started. Listening on port 3000`);
});
