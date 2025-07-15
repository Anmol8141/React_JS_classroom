console.log("js page is intigrated successfully")
function dis(n){
    //var a= document.getElementById(n).value;
    console.log(`Button ${n} pressed`);
    console.log(n);
    document.getElementById("result").innerHTML += n;
}
function solve(){
    console.log(`Button  pressed`);
    var s= document.getElementById("result").innerHTML;
    console.log(s);
    document.getElementById("result").innerHTML=eval(s);
}
function clr(){
     document.getElementById("result").innerHTML="";
}
