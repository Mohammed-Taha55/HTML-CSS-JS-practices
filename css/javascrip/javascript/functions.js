// function myname(){
//     console.log("taha");
// }
// myname();

// function print(){
//     for(i=1;i<=10;i++)
//         console.log(i);
// }
// print();

// func with parameter
// function sum1(num){
// console.log("print number:",num);
// }
// sum1(5);

// function avg(num1,num2){
//     let avg=(num1+num2)/2;
//     console.log("avg:",avg);
// }
// avg(10,100);


// function getsum(a,b,c){
//     let sum = (a+b+c);
//     return sum;
// }
// let abs = getsum(1,2,3);
// console.log("printing:",abs);


// function fullname(firstname,secondname){
//     let surname=(firstname + " " + secondname);
//     return surname;
// }
// let name = fullname("taha","hero");
// console.log("nameis:",name);

// function mul(a,b){
//     return a*b;
// }
// let mul1 = mul(10,2);
// console.log(mul1);

// function pow(x,y){
// return x**y;
// }
// let power = pow(2,10);
// console.log(power);

// let greet = function(){
//     console.log("hello jee");
// }
// greet();

// function greetme(greet, fullname){
//     console.log("hello",fullname);
//     greet();
// }
// function greet(){
//     console.log("greetings");
// }
// greetme(greet, "taha");

// const arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     },
// ]
// let first = arr[2];
// let ans = first(6,10);
// console.log(ans);
 
// const sub = (a,b) => a - b;
// const sum = sub(4,73);
// console.log(sum);

// function SimpleFunction() {
//     this.value = 10;
  
//     setInterval(function () {
//         console.log(this.value);
//     }, 1000);
//   }
//   function ArrowFunction() {
//     this.value = 20;
  
//     setInterval(() => {
//         console.log(this.value);
//     }, 1000);
//   }
//   const simpleInstance = new SimpleFunction();
//   const arrowInstance = new ArrowFunction(); 

// function check (value){
//   if (value) {
//     console.log("truthy");
//   }
//   else{
//     console.log("falsy");
//   }
// }
// check(1)
// check(0)
// check("taha")
// check("")
// check([])
// check([1,2,3])

// let globals = "iam global"
// function global(){
// globals = "iam modified"
// let bast = " legend";
// console.log(bast);
// }
// global();

let mike = function(){
  let gus = {
    theme : "dark",
  }
  return gus;
}();
  
