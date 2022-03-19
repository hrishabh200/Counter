let change=document.getElementById('span1');
let inc=document.getElementById('inc');
let dec=document.getElementById('dec');
let reset=document.getElementById('res');
var make=0;
inc.addEventListener('click',()=>{
 change.innerHTML=++make;
})
dec.addEventListener('click',()=>{
    if(make!=0)
    change.innerHTML=--make;
   })
   reset.addEventListener('click',()=>{
    change.innerHTML=0;
   })