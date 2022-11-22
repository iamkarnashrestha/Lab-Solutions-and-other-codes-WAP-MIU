/**
 * app2.js
 */
var p=50;
var q=100;
var r=function(p,q,r){
    console.log(`a=${a}`);
    console.log("q="+q);
    var s=function(p,q,r){
        p=r;
        console.log(`p=${p}`);
        p=q;
        r=r*2;
        var a=75;
        return r;
    }
    return s(p,q,r);
}
a=17;
q=r(18,19,100);
console.log("p="+p);
console.log(`q=${q}`);
console.log(window)

// line 7 prints a=17 a has global scope
// line 8 prints q=19 , the 19 comes from  argument of function
// line 11 prints p=100, the value of p is changed inside the function as p=r, and r has 100 from parameter
//line 21 prints p=50, it comes from the global variable p.
//line 22 prints, 200 that is returned from the function inside
//