
            
function new_data(){   
console.log("hi");
       
var login__name=document.getElementById("login__name").value;
    var login__password=document.getElementById("login__password").value;
    var login__confirmpassword=document.getElementById("login__confirmpassword").value;

console.log(login__name);
console.log(login__password);
console.log(login__confirmpassword);

localStorage.setItem("login__name",login__name);
localStorage.setItem("login__password",login__password);
localStorage.setItem("login__confirmpassword",login__confirmpassword);
if(localStorage.setItem("login__password")==localStorage.setItem("login__confirmpassword")){
  
        alert('data stored');
}
else{
    alert("NO LUCK")
}
}
 
    

/*var userDetails :
{
  name : login__name,
  password : login__password,
  confirm_password : login__confirmpassword
}*/
function login()
{

 var dataName = localStorage.getItem('login_name');
    var datapass = localStorage.getItem('login_password');

    var username = document.getElementById('userName');
    var password = document.getElementById('passwor d');
   
    if(username.value == dataName && password.value == datapass) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}
