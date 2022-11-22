/**
 * index.js
 */
 const express = require("express");
 const app = express();
 app.use("/", (req, res) => {
     console.log(`Serving homepage content...`);
     const homepageContent = `
         <!doctype html>
         <html lang='en'>
             <head>
                 <title>My First Express WebApp</title>
             </head>
             <body>
                 <h1>Welcome to My First Express WebApp</h1>
             </body>
         </html>
     `;
     res.send(homepageContent);
 });
 const port = 3000;
 app.listen(port, () => {
     console.log(`Web Server started on port ${port}`);
 });
 