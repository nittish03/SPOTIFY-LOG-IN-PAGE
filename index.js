let a=document.getElementById("cbL");
let mailL=document.getElementById("mailL");
let passwordL=document.getElementById("passwordL");
let buttonL=document.getElementById("buttonL");
function showP(){
    if(document.getElementById("cbL").checked){
        document.getElementById("passwordL").type="text";
        console.log("checked");
    }else{
        document.getElementById("passwordL").type="password";
        console.log("not checked");
    }
}
document.getElementById("cbL").onclick=showP;
buttonL.onclick=(e)=>{
e.preventDefault();
alert("thank you for loging in");
passwordL.value="";
mailL.value="";
}
