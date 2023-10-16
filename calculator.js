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
let compoundObject = ["Annually","Semiannually","Quarterly",
"Monthly","Semimonthly","Biweekly","Weekly","Daily"];
let compoundSel;
let principal;
let ir;
let t;
console.log(compoundSel)
document.getElementById("mySubmit").onclick = function(){
    principal = document.getElementById("p").value;
    ir = document.getElementById("ir").value;
    t = document.getElementById("ily").value;
    compoundSel = document.getElementById("compound").value;
    if (compoundSel === "Monthly"){
        compoundSel = 12;
    }
    else if (compoundSel === "Daily"){
        compoundSel = 365;
    }
    else if (compoundSel === "Weekly"){
        compoundSel = 52;
    }
    else if (compoundSel === "Biweekly"){
        compoundSel = 26;
    }
    else if (compoundSel === "Semimonthly"){
        compoundSel = 24;
    }
    else if (compoundSel === "Quarterly"){
        compoundSel = 4;
    }
    else if (compoundSel === "Semiannually"){
        compoundSel = 2;
    }
    else if (compoundSel === "Annually"){
        compoundSel = 1;
    }
    let r = ir / 100;
    let n = compoundSel;
    let a = principal * (1 + (r / n)) ** (n*t);
    document.getElementById("myP").textContent = "Total Balance: "+ a.toFixed(2);
    document.getElementById("myP2").textContent = "Total Accrued Interest:  "+ (a.toFixed(2) -  principal).toFixed(2);

}