const array=[];
array.push(1,2,3,4);
array.forEach(n=>console.log(n));
//Higher order function
const oddsOnly=array.filter(function(n){
    return n%2!=0;
});
console.log(oddsOnly);

//Map
const doubledNums=array.map(function(n){
    return n*2;
});
console.log(doubledNums);

const sum=array.reduce(function(accum,curr){return accum*curr},2);
console.log(sum);

console.log(()=>10);

const r=(x)=>10;
console.log(r());

