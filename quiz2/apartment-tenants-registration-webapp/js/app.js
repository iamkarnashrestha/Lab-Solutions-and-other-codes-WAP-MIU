'use strict'
window.onload=function(){
    const formData=document.getElementById("apartmentForm");
    formData.addEventListener("submit",function(event){
        //for preventing the page to reload after submit
        event.preventDefault();
        const txtBuildingNumber=document.getElementById("buildingNo").value;
        const txtfloorNo=document.getElementById("floorNo").value;
        const txtapartmentNo=document.getElementById("apartmentNo").value;
        const txttitle=document.getElementById("title").value;
        const txtfullNames=document.getElementById("fullNames").value;
        const txtphoneNo=document.getElementById("phoneNo").value;
        const txtemail=document.getElementById("email").value;
        const txtdriversLicenceNo=document.getElementById("driversLicenceNo").value;


        //putting the things that needs to be printed in alert box in a variable
        const message=`
        Tenant Registration Data:
        Building No: ${txtBuildingNumber}
        Floor No: ${txtfloorNo}
        Apartment No: ${txtapartmentNo}
        Tenant Information:
        Title: ${txttitle}
        Full Names: ${txtfullNames}
        Phone No: ${txtphoneNo}
        Email: ${txtemail}
        Drivers License No: ${txtdriversLicenceNo}`;

        alert(message);


        //clearing text fields
        document.getElementById("buildingNo").value="";
        document.getElementById("floorNo").value="";
        document.getElementById("apartmentNo").value="";
        document.getElementById("title").value="";
        document.getElementById("fullNames").value="";
        document.getElementById("phoneNo").value="";
        document.getElementById("email").value="";
        document.getElementById("driversLicenceNo").value="";


    });
};