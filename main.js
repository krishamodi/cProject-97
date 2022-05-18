number1 = localStorage.getItem("number1");
number2 = localStorage.getItem("number2");

document.getElementById("number1").innerHTML = number1 + ":";
document.getElementById("number2").innerHTML = number1 + ":";

function add(){
    num1= document.getElementById("number1").value;
    num2= document.getElementById("number2").value;
    answer= Number(num1) + Number(num2);
	document.getElementById("answer").innerHTML= answer;
}
    
number1 = localStorage.getItem("number1");
number2 = localStorage.getItem("number2");

document.getElementById("number1").innerHTML = number1 - ":";
document.getElementById("number2").innerHTML = number1 - ":";


function sub(){
    num1= document.getElementById("number1").value;
    num2= document.getElementById("number2").value;
    answer2= Number(num1) - Number(num2);
	document.getElementById("answer2").innerHTML= answer2;
}



    