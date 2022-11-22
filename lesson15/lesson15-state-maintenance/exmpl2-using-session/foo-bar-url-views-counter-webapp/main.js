/**
 * main.js
 */
"use strict";

import express from "express";
import parseUrl from "parseurl";
import session from "express-session";

const app = express();

app.use(session( {
    secret: "artic-ice-is-gone"
}));

app.use((req, res, next) => {
    if(!req.session.views) {
        req.session.views = {}; // put 'views' object into session
    }
    // get the url pathname
    const pathName = parseUrl(req).pathname;

    // Count the number of times viewed for the given url
    req.session.views[pathName] = (req.session.views[pathName] || 0) + 1;
    next();
});

app.get("/foo", (req, res, next) => {
    const foopageContent = `
        <p><a href="/foo">Foo page</a> | <a href="/bar">Bar page</a></p>
    `;
    res.send(`${foopageContent} You have viewed this page ${req.session.views["/foo"]} times.`);
});

app.get("/bar", (req, res, next) => {
    const barpageContent = `
        <p><a href="/foo">Foo page</a> | <a href="/bar">Bar page</a></p>
    `;
    res.send(`${barpageContent} You have viewed this page ${req.session.views["/bar"]} times.`);
});

app.get("/", (req, res) => {
    const homepageContent = `
        <a href="/foo">Foo page</a> | <a href="/bar">Bar page</a>
    `;
    res.send(homepageContent);
});

app.listen(3000, () => {
    console.log(`Server started. Running on port 3000`);
});