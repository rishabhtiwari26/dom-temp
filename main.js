const btn=document.querySelector('.btn');

btn.addEventListener('mouseover',(e)=>{
    e.preventDefault
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');

})
// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault()
//     document.querySelector('body').classList.add('magenta');
// })
btn.addEventListener('click',store);

function store (e){
    
    var namee=document.querySelector('#name')
    var email=document.getElementById('email')
    obj1={
        "Name":namee.value,
        "Email": email.value
    }
    obj1_ser = JSON.stringify(obj1)
    localStorage.setItem('Obj1',obj1_ser)
    obj1_deser = JSON.parse(localStorage.getItem(obj1))
    
}