/**
 * minibankapp.js
 */
"use strict";

// console.log("Welcome to my MiniBanking WebApp");

window.addEventListener("DOMContentLoaded", () => {
    let currentRowNo = 2;
    const formNewAccount = document.querySelector("#formNewAccount");
    formNewAccount.addEventListener("submit", (event) => {
        event.preventDefault();
        const txtAccountNo = document.querySelector("#txtAccountNo");
        const txtCustomerName = document.querySelector("#txtCustomerName");
        const ddlAccountType = document.querySelector("#ddlAccountType");

        const strAccountNo = txtAccountNo.value;
        const strCustomerName = txtCustomerName.value;
        const strAccountType = ddlAccountType.value;

        // call addNewAccountDataRow
        addNewAccountDataRow(strAccountNo, strCustomerName, strAccountType);
        txtAccountNo.value = "";
        txtCustomerName.value = "";
        ddlAccountType["selectedIndex"] = 0;
        txtAccountNo.focus();

        // Bad Alternative -- hack HTML by using .innerHTML

    });

    const addNewAccountDataRow = function(accountNo, customerName, accountType) {
        const tblAccounts = document.querySelector("#tblAccounts");
        const newRow = tblAccounts.insertRow(-1);
        const newCellRowNo = newRow.insertCell(0);
        const strNewRowNo = document.createTextNode(`${++currentRowNo}.`);
        newCellRowNo.appendChild(strNewRowNo);
        const newCellAccountNo = newRow.insertCell(1);
        const strAccountNo = document.createTextNode(`${accountNo}`);
        newCellAccountNo.appendChild(strAccountNo);
        const newCellCustomerName = newRow.insertCell(2);
        const strCustomerName = document.createTextNode(`${customerName}`);
        newCellCustomerName.appendChild(strCustomerName);
        const newCellAccountType = newRow.insertCell(3);
        const strAccountType = document.createTextNode(`${accountType}`);
        newCellAccountType.appendChild(strAccountType);
    }
});