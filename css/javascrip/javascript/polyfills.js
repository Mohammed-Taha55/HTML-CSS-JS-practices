// arr = [1,2,3,4,5,6];


// const n = arr.map((e)=>e*3); //map is like a magical pen that can change list and give a new list which u hav coded,
// console.log(n);


// fill = [1,2,3,4,5,6];

   //fiter is filtering the given list and uppdate according to the new given code,

// const s = fill.filter(num => num % 2 == 0);
//  console.log(s);

//  const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, current) => accumulator + current,0);

// console.log(sum);  //reduce is like combines the list into a single result, 


if(! Array.prototype.myforeach) {
   Array.prototype.myforeach = function (cb){
      
     for(let i = 0; i < this.length; i ++){
      cb (this[i],i)
     }
   }
   if(! Array.prototype.mymap) {
      Array.prototype.mymap = function (cb){
         const result = [];
         for(let i=0; i<this.length;i++){
           const value =  cb(this[i],i)
           result.push(value)
         }
         return result;
      }
         }
         if(!Array.prototype.myreduce){
            Array.prototype.myreduce = function(cb){
               let acc = this[0]
               for(let i = 1; i<this.length;i++){
                  acc = cb(acc,this[i])
               }
               return acc;
            }
         }
}
const arr = [1,2,3,4,5];
arr.myforeach((value,index)=>
   console.log(`at index: ${index} value ${value}`)
);

const trippledarr = arr.mymap((e) => e* 3);
console.log(trippledarr);

const myred = arr.myreduce(
   (abtak, current) => abtak + current 
);
console.log(myred);






























