<!DOCTYPE html>
<html lang="pl-PL">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Calculator</title>
	<link rel="stylesheet" type="text/css" href="CSS/style.css">
</head>
<body>
	<div id="calculator">
		<div id="topContainer">
			<div id="startMessage">Choose numbers and operations you need</div>
			<div id="output" class="invisible"></div>
		</div>
		<div id="container">
			<div id="numbers">
				<button class="num">7</button>
				<button class="num">8</button>
				<button class="num">9</button>
				<button class="num">4</button>
				<button class="num">5</button>
				<button class="num">6</button>
				<button class="num">1</button>
				<button class="num">2</button>
				<button class="num">3</button>
				<button class="num">0</button>
				<button class="num">.</button>
				<button id="equals" class="inactive">=</button>
				
			</div>
			<div id="operators">
				<button id="plus" class="calc">+</button>
				<button id="minus" class="calc">-</button>
				<button id="multiple" class="calc">*</button>
				<button id="divide" class="calc">/</button>
				<button id="power" class="calc">^</button>
				<button id="factorial" class="calc">!</button>
				<button id="ce" class="inactive">CE</button>
				<button id="c"class="inactive">C</button>
				
			</div>
		</div>
		<div id="bottomContainer">
			<button id="chosen" class="functionalButton">Confirm buttons</button>
			<a href="index.html"><button class="functionalButton">Reset buttons</button></a>			
		</div>
	</div>
<script src="JS/script.js"></script>
</body>
</html>
