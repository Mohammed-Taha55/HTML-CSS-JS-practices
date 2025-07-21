function ptanhi(fn, delay){
    let myId;
    return function(...args){
    clearTimeout(myId);
    myId = setTimeout(() => {
        fn.apply(this, args)
    },delay);
    };
}
function greet(name){
    console.log(`hello ${name}`);
}

const sachmenhipta = ptanhi(() => greet("taha"),3000);
sachmenhipta() 