let submit=document.getElementById('submit');
submit.addEventListener("click", add)

function add(e){
    obj={
        Name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        mobile:document.getElementById('mobile').value
    }
    let obj_ser=JSON.stringify(obj)
    localStorage.setItem(obj.email,obj_ser)
    let obj_deser=JSON.parse(localStorage.getItem(obj.email))
    console.log(obj_deser)
    let li = document.createElement('li')
    li.className='by-email'
    let li_value=document.createTextNode(obj_deser.Name+' '+obj_deser.email+' '+obj_deser.mobile)
    li.appendChild(li_value)
    document.body.appendChild(li)
}
