// let fame = 'taha';
// let fame = 'l';
//Cannot redeclare block-scoped variable 'fame'.

//lexical scoping in js is a convention that determine how variables are accessable in a block of code

//closure is fn that has access to the variable of its outer function 
//even after the outer function has finished executing

// let fname = 'taha';

// function sayname(){
//     let fname = 'kai';
//     console.log('this is fn', fname);
// }

// sayname();
// console.log('this is not fn ', fname);

// function increment (){
//     let count = 0;
//     return function(){
//         count ++;
//         return count;
//     }
// }
// const x = increment();
// const y = increment();

// console.log(x())
// console.log(x())
// console.log(x())
// console.log(y())
// console.log(y())
// console.log(x())
// console.log(y())

function createcount (stepsize = 1 , initialvalue = 0) {
return function(){
    initialvalue = initialvalue + stepsize;
    return initialvalue;
}
}
const li = createcount(2,0);

console.log(li());
console.log(li());
console.log(li());
console.log(li());
console.log(li());
