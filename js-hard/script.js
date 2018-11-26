var btn2 = document.getElementById("btn2");
var btn1 = document.getElementById("btn1");
var block1 = document.getElementById("first");
var block2 = document.getElementById("second");

function verify(){
    var age = document.getElementById("adult").value;
        
    if (age >= 18){
        block1.style.display = 'none';
        btn1.style.display = 'none';
        btn2.style.display = 'block';
        block2.style.display = 'flex';   
    }
    else{
        alert ("вам нет 18 !");
    }
}
function allow(){
    var allow = document.getElementById("allow");
    allow.style.display = 'block';
    btn2.style.display = 'none';
    block2.style.display = 'none';
    console.log("пользователь допущен");
}
function reject(){
    var reject = document.getElementById("reject");
    reject.style.display = 'block';
    btn2.style.display = 'none';
    block2.style.display = 'none';
    
}

submit.addEventListener('click', verify);
yes.addEventListener('click', allow);
no.addEventListener('click', reject);
