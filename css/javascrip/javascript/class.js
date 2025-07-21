const clc = require("./arrays")
// class human{
//     //property
//     age=21;
//     weight=57;
//     #height=168;
    
//     constructor(newage,newheight,newweight){
//         this.age=newage;
//         this.weight=newweight;
//         this.#height=newheight;
//     }
//     //functions
//     gym(){
//         console.log("iam builder",this.#height);
//     }

//     code(){
//         console.log("ia, coding");
//     }

// }

// let obj = new human(18,65,190);
// console.log(obj.weight);
// obj.gym();
// console.log(obj.age);

// function sayname(fname="taha",mname="hero", lname=fname.toUpperCase()){
//     console.log("iam:",fname," ",mname," ",lname);
// }
// sayname("taha");

// function solve(value1,value2,value3){
//     console.log("the data is:",value1,value2,value3);
// }
// solve("taha","hero","kai");

let src={
age:12,
wt:56,
ht:170,
};
let src2={
    value:20,
    name1:"taha",
}
let dest={...src,src2};  //...is used to access the keys of the object
dest.age=21;
console.log("src:",src);
console.log("dest:",dest);
clc(3,5);
console.log(global);



