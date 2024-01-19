let a=document.getElementById("cb");
let mail=document.getElementById("mail");
let password=document.getElementById("password");
let button=document.getElementById("button");
function showP(){
    if(a.checked){
        password.type="text";
        console.log("checked");
    }else{
        password.type="password";
        console.log("not checked");
    }
}
a.onclick=showP;
button.onclick=()=>{
alert("thank you for loging in");
password.value="";
mail.value="";
}
