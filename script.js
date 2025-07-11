let num = document.getElementById('textareaa');

let nums=document.getElementById('nums');
num.addEventListener("input",()=>
{

  let length= num.value.length;
  nums.innerHTML=length+'✅';  
  if(length>100){
    let sign= '❌';
    nums.innerHTML=length+sign;
  }
})
