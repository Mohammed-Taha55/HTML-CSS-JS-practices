function cbc(color){
    document.body.style.backgroundColor = color
}


const theme = document.getElementById('eve');
theme.addEventListener('click', () => {
    console.log(document.body.style.backgroundColor);
const switchs = document.body.style.backgroundColor;

if(!switchs || switchs == 'white'){
      cbc('black');
      theme.innerText = 'light mode';
 } else {
      cbc('white');
      theme.innerText = 'dark mode';    
      }
});

    
