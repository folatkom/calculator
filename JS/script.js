const startMessage = document.getElementById("startMessage");
const output = document.getElementById("output");
const equals = document.getElementById("equals");
const ce = document.getElementById("ce");
const c = document.getElementById("c");
const chosen = document.getElementById("chosen");
let operation;
let num1 = "";
let num2 = ""; 
let spareNum = "";
let nextNum = false;
let isEqualsClicked = false;
let isCEClicked = false;

const calculate = (n1,n2) => {
    n1=Number(n1);
    n2=Number(n2);
    if (operation == "plus") {
    	result = n1+n2;
    }
    else if (operation == "minus") {
    	result = n1-n2;
    }
    else if (operation == "multiple") {
    	result = n1*n2;
    }
    else if (operation == "divide") {
    	result = n1/n2;
    }
    else if (operation == "power") {
        if(!Number.isInteger(n1) || !Number.isInteger(n2)){
            alert("Power calculating only for integers");
            result = n1;
        }
        else {
            result = Math.pow(n1,n2); 
        }
    }
    else if (operation == "factorial") {
        if (!Number.isInteger(n1)) {
            alert("Factorial calculating only for integers");
            result = n1;
        }
        else {
            result = 1;
            for (let i = 1; i<=n1; i++) {
                result *= i;
            }            
        }
    }
    return result;
}

const calculatorReady = () => {
    document.querySelectorAll(".num").forEach(item => item.classList.add("inactive"));
    document.querySelectorAll(".calc").forEach(item => item.classList.add("inactive"));

    document.querySelectorAll(".numActive").forEach(item => item.addEventListener("click", function() {
        if (isEqualsClicked && isCEClicked == false) {
            num1 = "";
            num2 = "";
            isEqualsClicked = false; 
        }
        isCEClicked == false;
        if(nextNum == false) {
            num1 += this.innerHTML;
            spareNum = num1;
            output.innerHTML = num1;
        }
        else {
            num2 += this.innerHTML;
            output.innerHTML = num2;
        }     
    }));

    document.querySelectorAll(".calcActive").forEach(item => item.addEventListener("click", function() {
        isCEClicked = false;
        if (isEqualsClicked) {
            operation = "";
            isEqualsClicked = false;
        }

        if (nextNum == false) {
            nextNum = true;
        }
        else {
            spareNum = num1;
            output.innerHTML = calculate(num1,num2);
            num1 = output.innerHTML;
            num2 = "";
        }
        operation = this.id;
    }));

    equals.addEventListener("click", function() {
        if (nextNum) {
            spareNum = num1;
            output.innerHTML = calculate(num1,num2);
            num1 = output.innerHTML;
            isEqualsClicked = true;
        }
    })

    c.addEventListener("click", function() { 
        output.innerHTML = "";
        num1 = "";
        num2 = "";
        nextNum = false;
    });

    ce.addEventListener("click", function() {
        isCEClicked = true;
        if (nextNum == false) {
            num1 = "";
        }
        else {
            num1 = spareNum;
            num2 = "";
        }
        output.innerHTML = "";
    });    
}

document.querySelectorAll(".num").forEach(item => item.addEventListener("click", function(){
    this.classList.add("numActive");
    this.classList.remove("num");
}));
document.querySelectorAll(".calc").forEach(item => item.addEventListener("click", function(){
    this.classList.add("calcActive");
    this.classList.remove("calc");
}))

chosen.addEventListener("click", function(){
    document.querySelectorAll(".num").forEach(item => item.replaceWith(item.cloneNode(true)));
    document.querySelectorAll(".calc").forEach(item => item.replaceWith(item.cloneNode(true)));
    
    startMessage.classList.add("invisible");
    output.classList.remove("invisible");
    chosen.classList.add("inactive");
    equals.classList.remove("inactive");
    c.classList.remove("inactive");
    ce.classList.remove("inactive");
    chosen.replaceWith(chosen.cloneNode(true));
    calculatorReady();
});