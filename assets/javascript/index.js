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

document.addEventListener('DOMContentLoaded', function(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a0ee7f718bmshd0b98f2a185067ep12fcdejsn8ff84a6aeaa9',
            'X-RapidAPI-Host': 'football-web-pages1.p.rapidapi.com'
        }
    };
    fetch('https://football-web-pages1.p.rapidapi.com/league-table.json?comp=1&team=1', options)
	.then(response => response.json())
	.then(function(response){
        let myArray=response.league-table.teams;
        myArray.forEach((element,index) => {
            let td =document.getElementsByTagName('td')
            td[index].innerText=element.name
            td[index+1].innerText=element.total-points
        });
        console.log(myArray);
    })
	.catch(err => console.error(err));    
})