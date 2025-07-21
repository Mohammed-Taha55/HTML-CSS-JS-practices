// let obj={
//     name:"taha",
//     age:"21",
//     weight:"57",
//     height:"5.5",
//   greet:function(){
// console.log("iam legend");
//     }
// };
// console.log(obj);
// obj.greet();

// let arr = [1,2,3,4,5];
// let brr = new Array ("taha","hero",1,true,69);
// brr.push("kai");
// brr.pop();
// brr.shift();
// brr.unshift("taha");
// console.log(brr.slice(1,3));
// brr.splice(3,0,"legend")
// console.log(brr);

// let arr = [10,21,32,43,54,65,76];
// let evnarr = arr.filter((number) => {
//      return number%2 === 0;
// });
// console.log(evnarr);

// arr = [10,20,30,40];
// arr.forEach((value,index ) => {
//     console.log("number",value,"index:",index);
    
// })

// let obj={
//     name:"taha",
//     age:"21",
//     weight:"57",
//     height:"5.5",
//   greet:function(){
// console.log(`hello ${this.name}`);
//     }
// };
// let obj2 = {
//     name:"hero",
// };
// obj.greet.call(obj2);

// const lalo = obj.greet.bind(obj2);
// lalo();
// console.log(lalo());       


// function createfun(fname,lname,age,hobbies){
//     return{
//          firstname:fname,
//          lastname:lname,
//          age:age,
//          hobbies:["gym","gaming"]
//     }
// }
// let person = createfun("taha","hero",45)
// console.log(person)

//The call() method of Function instances calls this function with a given
//  this value and arguments provided individually.


//The bind() method of Function instances creates a new function that, when called,
//  calls this function with its this keyword set to the provided value, and a given 
// sequence of arguments preceding any provided when the new function is called.

//The apply() method of Function instances calls this function with a given this value,
//  and arguments provided as an array (or an array-like object).


// We can also modify our array, we can add and delete items in our array using:

// push : Adds an item to the end of the array.
// unshift : Adds an item to the beginning of the array.
// pop : Removes the last item from the array.
// shift : Removes the first item from the array


// In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties

// const numbers = [-2,4,67,-69,55,-1,-72,-55,44];

// const posnum = numbers.filter((number) =>{
//     return number > 0;
// })
// console.log(posnum)


// const colors = ['red', 'green', 'blue'];

// for (let color of colors) {
//   console.log(color);
// }

/* Output :
red
green
blue
*/


let numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;
for(let value of numbers){
    sum += value;
}
console.log(sum);

// Output : 28
function clc (a,b){
  return a+b;
}
module.exports = clc;