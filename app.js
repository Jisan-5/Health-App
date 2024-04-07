let counter =document.querySelector('.counter');
let count = 1;
setInterval(()=>{
    if(count<75){
        count++; counter.innerText = count 
    }
    },100)