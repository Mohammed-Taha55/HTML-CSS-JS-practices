let user={
    name:"taha",
    age:21,
    value:true
};

let admin={};
for(let x in user){
   admin[x]=user[x];
}
for(let y in admin){
    console.log(user[y]);
}

