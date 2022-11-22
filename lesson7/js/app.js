//console.log(i);
let i=0;

//Assignment statement- LHS and RHS
//LHS: variable declaration
// RHS: an expression that is a function
// sum(1,2);
// const sum=function(a, b){
//     return a +b;
// };

// console.log(sum2(1,2));
// function sum2(a,b)
// {
//     return a+b;
// }

// function b(){
//     var x=10;
//     a();
//     function a(){
//         console.log(x);
//     }
//     x=20;
//     a();
// }b();

window.onload=function(){
     const studentRegForm=document.getElementById("studentRegForm");
     //studentRegForm.onsubmit=function(event){
     studentRegForm.addEventListener("submit",function(event){
        event.preventDefault();
        const txtId=document.getElementById("studentId");
        const strStudentId=txtId.value;
        const stdList=document.getElementById("studentsList");
        stdList.innerHTML+=`<p> Student Id: ${strStudentId} </p>`;
        txtId.value="";
        txtId.focus();
     });
};