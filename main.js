const btn=document.querySelector('.btn');

btn.addEventListener('mouseover',(e)=>{
    e.preventDefault
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');

})
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault()
    document.querySelector('body').classList.add('magenta');
})