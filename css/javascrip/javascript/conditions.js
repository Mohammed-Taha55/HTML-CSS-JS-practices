let guests = 8
let pizza;
// small <=2
// medium <=5
// large

if (guests<=2){
    pizza="small"
}
else if (guests<=5){
    pizza="medium"
}
else{
    pizza="large"
}
console.log(pizza)

let weather = "sunny"

if (weather === "rainy"){
console.log("carry umbrella");
}
else if (weather === "cloudy"){
    console.log("carry jacket");
}
else{
    console.log("clear weather");
}


function grade(marks){
    if(marks>=90){
     return "A";
    }
    else if(marks>=70){
        return "B";
    }
    else if(marks>=60){
        return "C";
    }
    else if(marks>=40){
        return "D";
    }
    else{
        return "f";
    }
}
 let result = grade(99);
console.log(result);