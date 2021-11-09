let result = 0;
let operation;

$("button").click(function(){
	let num1 = Number($("#num1").val());
	let	num2 = Number($("#num2").val()); 
    operation = $(this).attr("id");
    console.log(num1);
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
    $("#result").html(result);  
});