let result = 0;

document.getElementById("plus").addEventListener("click",function (){
	let num1 = Number(document.getElementById("num1").value);
	let	num2 = Number(document.getElementById("num2").value); 
	result = num1+num2;	
	document.getElementById("result").innerHTML = result;
});
document.getElementById("minus").addEventListener("click",function (){
	let num1 = Number(document.getElementById("num1").value);
	let	num2 = Number(document.getElementById("num2").value); 
	result = num1-num2;	
	document.getElementById("result").innerHTML = result;
});
document.getElementById("multiple").addEventListener("click",function (){
	let num1 = Number(document.getElementById("num1").value);
	let	num2 = Number(document.getElementById("num2").value); 
	result = num1*num2;	
	document.getElementById("result").innerHTML = result;
});
document.getElementById("divide").addEventListener("click",function (){
	let num1 = Number(document.getElementById("num1").value);
	let	num2 = Number(document.getElementById("num2").value); 
	result = num1/num2;	
	document.getElementById("result").innerHTML = result;
});

