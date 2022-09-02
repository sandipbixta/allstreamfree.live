document.addEventListener('DOMContentLoaded',submit);


function submit(){
    let form = document.querySelector('#form');
    form.addEventListener('submit',function(e){
        e.preventDefault();
        let fname=document.getElementById('fname').value;
        let lname=document.getElementById('lname').value;
        let email=document.getElementById('email1').value;

        let formData= {
            fname:fname,
            lname:lname,
            email:email
        }
        let fetchObj={
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(formData),
    
            };
        fetch('http://localhost:3000/formData',fetchObj).then(res=>res.json()).then(data=>console.log(data));
        let p = document.createElement('p');
        document.getElementById('bottom').append(p);
        p.style.fontFamily="'Poppins', sans-serif";
        p.style.fontSize="40px"
        p.innerText="Thank you for subscribing. We have received your data."
        form.remove();
        // form.reset();
    });
}

let a = document.querySelectorAll('.news a')
a[0].addEventListener('click',e=>e.preventDefault());
a[1].addEventListener('click',e=>e.preventDefault());
a[2].addEventListener('click',e=>e.preventDefault());