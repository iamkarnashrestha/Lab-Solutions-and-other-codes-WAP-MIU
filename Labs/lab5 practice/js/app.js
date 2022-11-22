const max2 = function (n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    else {
        return n2;
    }
}

const four = 4, six = 6;
console.log(`Max of :${four} and ${six}: ${max2(four, six)}`);

const max3 = (n1, n2) => {
    if (n1 > n2) {
        return n1;
    }
    else {
        return n2;
    }
}
console.log(`Max of :${four} and ${six}: ${max3(four, six)}`);

const max4 = (n1, n2) => (n2 > n2) ? n1 : n2;
console.log(`Max of :${four} and ${six}: ${max3(four, six)}`);


//problem 2
function maxOfThree(n1, n2, n3) {
    let max = n1;
    if (n2 > max) {
        max = n2;
    }
    if (n3 > max) {
        max = n3;
    }
    return max;
}

const seventeen = 17;
console.log(`Max of :${four}, ${six}  and ${seventeen}: ${maxOfThree(four, six, seventeen)}`);

const maxOfThree2 = (n1, n2, n3) => (n1 > n2) ? ((n1 > n3) ? n1 : n3) : ((n2 > n3) ? n2 : n3);
console.log(`Max of :${four}, ${six}  and ${seventeen}: ${maxOfThree2(four, six, seventeen)}`);


//problem 3
// const isVowel = (charIn) => {
//     let char = charIn.toUpperCase();
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }
// console.log(` ${isVowel("d")}`);

//problem 4
const sum = (a) => {
    let sum = 0;
    for (let n of a) {
        sum += n;
    }
    return sum;
}
const a=[1,2,3,4,5];
console.log(` The sum of array ${a} is: ${sum(a)}`);