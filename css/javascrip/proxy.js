const user = {
    name : 'taha',
    age : 21,
    password : 123,
}
const proxyuser = new Proxy (user,{
    get(target,prop){
        console.log(prop)
        if(prop === 'password'){
            throw new Error ('access denied');
        }
    return target[prop]
    }
})
console.log(proxyuser.age);

//negative indexing
// let arr= [1,2,3,4,5,6,7,8]
// function negative(arr){
//     return new Proxy (arr,{
//         get(target , prop){
//             const index = Number(prop)
//             if(! isNaN (index)) {
//                 if(index < 0) {
//                     return target[target.length + index];
//             }
//             return target[index];
//         }
//         return target[prop];
//         }

//     });
// }
// let proxyarr = negative(arr);
// console.log(proxyarr[-1]);
// console.log(proxyarr[-3]);



//get : this is  triggered when you read a value from the object

//proxy :  when using a proxy u can control what happens when someoone tries to acces the property

//set : this is triggered when you assing a value to a property 