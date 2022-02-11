let result = 0;
let operation;
const calc = document.querySelector(".calc");
const output = document.getElementById("output");

document.querySelectorAll(".calc").forEach(item=>item.addEventListener("click",function(){
	let num1 = Number(document.getElementById("num1").value);
	let	num2 = Number(document.getElementById("num2").value); 
    operation = this.id;
    if (operation == "plus"){
    	result = num1+num2;
    }
    else if (operation == "minus"){
    	result = num1-num2;
    }
    else if (operation == "multiple"){
    	result = num1*num2;
    }
    else {
    	result = num1/num2;
    }
    output.innerHTML = result;  
}));