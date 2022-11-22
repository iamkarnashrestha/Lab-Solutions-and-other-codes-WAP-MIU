"use strict";
 window.addEventListener("DOMContentLoaded", () => {
    $("#products").on( "click" ,"a", function(event) {
        event.preventDefault();
        $("#products").append("<article><header class='articleHeader'><h4>Product Name</h4></header><p>Here is a brief description/note about this product.</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia consectetur iure expedita non pariatur porro enim sunt sed obcaecati saepe.</p><div class='btnPanel'><a class='lnkBtn' href='http://www.amazon.com'>Add a new Product</a></div></article>");
    });
 });
  