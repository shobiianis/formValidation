
inpName=document.getElementById("inpName")
inpPhone=document.getElementById("inpPhone")
inpEmail=document.getElementById("inpEmail")
var statusabc=false;
function submitForm(e){
e.preventDefault();
if(inpName.value==" " || !inpName.value)   {
    alert("put name")
     return
}
if(inpPhone.value.length!=11){
    alert("wrong number")
    return;
}
for(var i=0;i<inpEmail.value.length;i++){
if(  inpEmail.value.charAt(i)=="@"){
 
    statusabc=true

}
  
}



if(statusabc==true){

    console.log("form Submitted")
}
else{
    alert("input Write Email")
    return
}




}