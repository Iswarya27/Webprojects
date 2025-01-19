const wrap=document.querySelector('.wrapper');
const loginLink=document.querySelector('.loginlink');
const registerLink=document.querySelector('.registerlink');
const btn=document.querySelector('.btnlogin');
const closeBtn=document.querySelector('.close');


registerLink.addEventListener('click',()=>{
    wrap.classList.add('active');
})

loginLink.addEventListener('click',()=>{
    wrap.classList.remove('active');
})
btn.addEventListener('click',()=>{
    wrap.classList.add('active-popup');
})
closeBtn.addEventListener('click',()=>{
    wrap.classList.remove('active-popup');
})
