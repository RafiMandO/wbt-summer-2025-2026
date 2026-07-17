document.getElementById("clubForm").addEventListener("submit", validateForm);

function validateForm(event){

    event.preventDefault();

    let fname=document.getElementById("fname").value.trim();
    let lname=document.getElementById("lname").value.trim();
    let email=document.getElementById("email").value.trim();
    let password=document.getElementById("password").value;
    let category=document.getElementById("category").value;
    let reason=document.getElementById("reason").value.trim();
    let message=document.getElementById("message");
    let namePattern=/^[A-Za-z]+$/;
    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!namePattern.test(fname)){
        message.style.color="red";
        message.innerHTML="First Name must contain alphabets only.";
        return;
    }

    if(!namePattern.test(lname)){
        message.style.color="red";
        message.innerHTML="Last Name must contain alphabets only.";
        return;
    }

    if(!emailPattern.test(email)){
        message.style.color="red";
        message.innerHTML="Enter a valid email.";
        return;
    }

    if(!passwordPattern.test(password)){
        message.style.color="red";
        message.innerHTML="Password must be at least 8 characters with uppercase, lowercase and number.";
        return;
    }

    let gender=document.querySelector('input[name="gender"]:checked');

    if(gender==null){
        message.style.color="red";
        message.innerHTML="Please select gender.";
        return;
    }

    let clubs=document.querySelectorAll('input[name="club"]:checked');

    if(clubs.length==0){
        message.style.color="red";
        message.innerHTML="Select at least one club.";
        return;
    }

    if(category==""){
        message.style.color="red";
        message.innerHTML="Select a club category.";
        return;
    }

    if(reason.length<10){
        message.style.color="red";
        message.innerHTML="Reason should contain at least 10 characters.";
        return;
    }

    message.style.color="green";
    message.innerHTML="Registration Successful!";
}