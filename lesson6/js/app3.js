console.log("Welcome");
// window.onload=loadEvent;
// function loadEvent(){
//     const btnClickMe=document.getElementById("btnClickMe");
//     btnClickMe.addEventListener("click",function(){
//         alert("Hello");
//     });
// }

//do not polute the global env  
window.onload=function(){
    const btnClickMe=document.getElementById("btnClickMe");
    btnClickMe.addEventListener("click",function(){
        //alert("Hello");
        const mainhead= document.getElementById("mainheading");
        mainhead.className='highlighted';
    });
};
