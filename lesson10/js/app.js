'use strict'
// class User{
//     sayHi(){
//         alert(this.name);
//     }
//     constructor(name){
//         this.name=name;
//     }
   
  
// }
// let user=new User("John");
// user.sayHi();
// console.log(typeof User);
// console.log(User);


class User {
    constructor(name) {
    this.name = name; // calls the setter
    }
    get name() {
    return this._name; //property must match the name used in the setter
    }
    set name(value) {
    if (value.length < 4) {
    alert("Name is too short.");
    return;
    }
    this._name = value; //must set a property name different from the setter name 
    }
    }
    let user = new User("John");
    alert(user.name); // calling the getter
    user.name = 'Fred'; //calling the setter
    alert(user.name);
    let user2 = new User(""); // Name too short.
    
