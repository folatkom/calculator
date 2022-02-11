let operation;
const output = document.getElementById("output");
let num1 = "";
let num2 = ""; 
let nextNum = false;

const calculate = (n1,n2) => {
    n1=Number(n1);
    n2=Number(n2);
    if (operation == "plus"){
    	result = n1+n2;
    }
    else if (operation == "minus"){
    	result = n1-n2;
    }
    else if (operation == "multiple"){
    	result = n1*n2;
    }
    else if (operation == "divide"){
    	result = n1/n2;
    }
    else if (operation == "power"){
        result = Math.pow(n1,n2);
    }
    else if (operation == "factorial"){
        result = 1;
        for(let i = 1; i<=n1; i++){
            result *= i;
        }
    }
    return result;
};

document.querySelectorAll(".num").forEach(item=>item.addEventListener("click", function(){
    if(nextNum == false){
        num1+=this.innerHTML;
        output.innerHTML = num1;
    }
    else {
        num2+=this.innerHTML;
        output.innerHTML = num2;
    }     
}));

document.querySelectorAll(".calc").forEach(item=>item.addEventListener("click", function(){
    if (nextNum == false) {
        nextNum = true;
        operation = this.id;
    }
    else {
        outputIsReady = true;
        output.innerHTML = calculate(num1,num2);
        num1=output.innerHTML;
        num2 = "";
        operation = this.id;
    }
}));

