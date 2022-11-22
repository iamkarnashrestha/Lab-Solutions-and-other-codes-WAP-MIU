'use strict'
class Product{
    constructor(productId,name,unitPrice,dateSupplied){
        this.productId=productId;
        this.name=name;
        this.unitPrice=unitPrice;
        this.dateSupplied=dateSupplied;
    }
    //Getters
    get productId(){return this._productId;}
    get name(){return this._name;}
    get unitPrice(){return this._unitPrice;}
    get dateSupplied(){ return this._dateSupplied;}
    
    //Setters
    set productId(value){
        this._productId=value;
    }
    set name(value){
        this._name=value;
    }
    set unitPrice(value){
        this._unitPrice=value;
    }
    set dateSupplied(value){
        this._dateSupplied=value;
    }

    toString(){
        return `{
            ProductID:${this._productId},
            Name:${this._name},
            UnitPrice:${this._unitPrice},
            DateSupplied:${this._dateSupplied}
        }`;
    }
}

const products=[
    new Product(101,"Apple",1.55,new Date(2022,10,15)),
    new Product(102,"Orange",1.50,new Date(2022,10,16)),
    new Product(103,"Banana",0.50,new Date(2022,10,14))
];

console.log(products[0].toString());
products[0].name="Apples";

products.forEach(p=>console.log(p.toString()));

const orange=products[2];
console.log(orange.dateSupplied);

