let logEmail = document.getElementById("em");
let logPassword = document.getElementById("pass");
const barcodepage  = document.querySelector(".barcodepage");
const loginpage = document.querySelector(".loginpage");
let paragraph = document.getElementById("para");
let signuppage = document.querySelector(".wrapper");
let signpass1 =  document.getElementById("pass1");
let signpass2 = document.getElementById("pass2");
let signUpEmail = document.getElementById("signUpEmail");
let userName = document.getElementById("userName");


let newEmail = "";
let newPass = "";

const email = "v.verma7271@gmail.com"; 
const password = "12345";

function login(){
    // console.log(newEmail);
    // console.log(newPass);
    // console.log(logEmail.value);
    // console.log(logPassword.value);

    if(logEmail.value === email && logPassword.value === password){
        loginpage.classList.add("active");
        barcodepage.classList.add("active");
    }
    else if(logEmail.value === newEmail && logPassword.value === newPass){
        loginpage.classList.add("active");
        barcodepage.classList.add("active");
     }
    else{
        para.textContent = "Please enter valid Email & password !" ;
        setTimeout(function(){
            document.getElementById("para").innerHTML = '';
        }, 1000);
            }
}


function signup(){
    signuppage.classList.add("active");
    loginpage.classList.add("active");
    barcodepage.classList.remove("active");
}

function submit(){
    if(signpass1.value === signpass2.value && signpass1.value!="" && (signpass1.value.length >=5)){
        // alert("Created Successfully");
        if (confirm("Created Successfully Proceed To Login")){
            // location.reload();
            signuppage.classList.remove("active");
            loginpage.classList.remove("active");
            barcodepage.classList.remove("active");
            newEmail = signUpEmail.value;
            newPass = signpass1.value;
            signpass1.value = "";
            signpass2.value ="";
            signUpEmail.value="";
            userName.value="";
        }
    }
    else{
      alert("Make sure your password is same and contains atleast 5 character");
    }
}