// class person  {
//       constructor (fname,mname,lname){
//           this.fname=fname;
//           this.mname=mname;
//           this.lname=lname;
//       }
//       getname(){
//         return `${this.fname}${this.mname}${this.lname}`
//       }
// }
// const p1 = new person('taha',' ','hero');
// console.log(p1.getname());


const obj1={
    pname: 'kai',
    aname: 'hiwatari',
    getfullname: function (){
      if(this.aname !== undefined) return `${this.pname} ${this.aname}`;
      return this.fame;
    },
};
const obj2={
  pname:'max',
  aname:'tate',
};
obj2.__proto__= obj1;

console.log(obj1.getfullname());
console.log(obj2.getfullname());
console.log(obj2.toString());


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

