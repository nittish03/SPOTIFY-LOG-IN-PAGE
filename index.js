let a=document.getElementById("cb");
let mail=document.getElementById("mail");
let password=document.getElementById("password");
let button=document.getElementById("button");
function showP(){
    if(document.getElementById("cb").checked){
        document.getElementById("password").type="text";
        console.log("checked");
    }else{
        document.getElementById("password").type="password";
        console.log("not checked");
    }
}
document.getElementById("cb").onclick=showP;
button.onclick=()=>{
alert("thank you for loging in");
password.value="";
mail.value="";
}
