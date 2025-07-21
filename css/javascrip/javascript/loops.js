// for(let i=1;i<=10;i++){ printing multiples chrs
//     console.log("taha")
// }

// for(let i=1;i<=9;i++)
// {                       printing numbers
//     console.log(i);
// }

// printing reverse numbers
// for(let i=9;i>0;i--)
// {                             
//     console.log(i);
// }

// for(let i=1;i<=6;i++){
//     if(i==4)
//         break;  BREAK
//     else
//     console.log(i);
// }

// for(i=1;i<=4;i++){
//     if(i==3)
//         continue;    CONTINUE
//     else
//     console.log(i);
// }

// while
// let i=1;
// while(i<=10){
//     console.log("taha");
//     i++;
// }

// let i=5;
// while(i>0){
//     console.log(i)
//     i--;
// }

// let i=1;
// while(i<=5){
//     if(i==3)
//         break;
//     else
//     console.log(i);
//    i++;
// }

// let i=1;
// while(i<=5){
    
//     if(i==3){
//         i++;
//         continue;
//     }
//     else
//     console.log(i);
// i++;
// }

// let i=1;
// do{
//     console.log("taha");
//     i++;

// }while(i<=9);

// let op1 = "english ";
// let op2 = "hindi ";

// let ans = op1+op2;
// console.log(ans);

// let op1 = "kai";
// let op2 = "taha";
// console.log(op1.length);
// console.log(op2.toUpperCase());

// let sentence = "hello //jee //kaise// //ho";
// let words= sentence.split('//');
// console.log(words);
// console.log(words.join('-'));

// let arr = ["kai","tyson","ray","max","Tala"]
// arr.length
// for(let i=0;i<arr.length;i++){
// console.log(`bladers at index ${i}: ${arr[i]}`);
// }

let arr2 = [2,5,6,8,9,5];
let arr3 = [];
function addarr(numbers){
    let sum=0;
    for(let i=0; i < numbers.length; i++){
          sum=sum+numbers[i];
    }
    return sum;

  //sum =0
  // 0 + 2 = 2
  // sum = 2 
  // 2 + 5 = 7
  // sum = 7
  // 7 + 6 = 13
  // sum = 13
  // 13 + 8

}
let result = addarr(arr2);
console.log(result);


let sum = 0;
let i=1;
while(i <= 4){
    sum = sum + i; //1  
    i++;
}

console.log(sum);