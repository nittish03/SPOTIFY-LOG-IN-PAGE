
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
document.getElementById("buttonL").onclick=(e)=>{
e.preventDefault();
alert("thank you for loging in");
document.getElementById("passwordL").value="";
document.getElementById("mailL").value="";
}
