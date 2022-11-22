/**
 * app.js
 */
console.log("Hello Javascript");
var address={
    street:'Main Street',
    'house number':1000,
    apartment:{
        floor:'3',
        'number':301
    }
};
console.log("Street:"+address.street+" "+"House Number:"+address["house number"]+"  "+ "Floor:"+address.apartment.floor);


//Lexical Environmenr and Exection Context

//Global Environment
var myName='Karna';

//Function Environment
function printMyName()
{
    var yourName="Md";
    console.log("My Name:"+myName);
    console.log(yourName);

    //Block environment(Block scope)
    const array=[];
    for(let index=0;index<Array.length;index++)
    {
        const element=array[index];
    }
    console.log(this);
}
printMyName();
//console.log(this);
//console.log(yourName);
window.name="akarna";//overridinf the name or window

//hoisting
var i; //only declaration
i=10; //initialization

var j=-0; //declaring and initializaion


var a=5;
// 1st phase declare a and assign it undefined
// 2nd phase assign 5 to a

b();
function b()
{
    console.log("a");
}



// hoisting with function expression\
var b2=function(){
    console.log("b2");
}
b2();

//hoisting var b2=undefined,  b2 is not a function 
