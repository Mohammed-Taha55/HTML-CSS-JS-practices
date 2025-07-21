const addbtn = document.getElementById('add-btn');
const todoin = document.getElementById('todo-in');
const todoitem = document.getElementById('todo-item');
addbtn.addEventListener('click', () => {
   const value  = todoin.value;
const li = document.createElement('li');
li.innerText = value;
const delbtn = document.createElement('button');
delbtn.innerText = 'X';
delbtn.addEventListener('click', () =>{
    li.remove();
});
const donebtn = document.createElement('button');
donebtn.innerText = "*"
donebtn.addEventListener('click',()=>{
li.innerText= "task done"
})
const dbbtn = document.createElement('button');
dbbtn.innerText = 'x',
dbbtn.addEventListener('click',()=>{
    li.remove(donebtn);
})
li.appendChild(delbtn)
li.appendChild(donebtn)
li.appendChild(dbbtn)
todoitem.appendChild(li);
todoin.value='';
});
