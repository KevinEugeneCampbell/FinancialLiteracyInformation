//console.log("Hello");
//console.log("I like pineapple");

//window.alert("This is an alert");

//document.getElementById("myP").textContent = "Hello";

//let x;
//let y;
//x = 100;
//y = 200;

//document.getElementById("myP").textContent = x;

//console.log(`x is ${x}`);

//let username;

//username = window.prompt("What's your username?");

//console.log(username);
/*
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myP").textContent = `Welcome ${username}`;
}
*/
var compoundObject = {"Monthly":{},"Annually":{}};
let compoundSel;
window.onload =  function(){
    var compoundSel = document.getElementById("compound");
    for(var x in compoundObject){
        compoundSel.options[compoundSel.options.length] =  new Option(x, x);
    }
}
console.log(compoundSel);