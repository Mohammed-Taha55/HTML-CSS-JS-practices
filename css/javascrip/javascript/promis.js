let promis=new Promise((resolve,reject)=>{
    let success = p ;
    if(success){
        console.log("successfull");
    }
    else{
        console.log("rejected");
    }
});

promis.then((message)=>{
    console.log("then ka message is"+message);
}).catch((error)=>{
    console.log("error"+error);
})

// console.log('taha');
// let a =2;
// let b=4;
// console.log('sum', a+b);
// setTimeout(()=>console.log('iam settime'),100*50);

// const obj = {
//     name : "taha",
//     greet : function() {
//         console.log(`this is ${this.name}`);
//     }
// }
// setTimeout(obj.greet.bind(obj), 3*1000);
// console.log('bye');

