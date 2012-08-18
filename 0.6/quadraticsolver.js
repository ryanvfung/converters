// JavaScript Document

var solve = document.getElementById("solve");
// solve.addEventListener("click",solveQuadratic.solve,false);
var enableComplex = document.getElementById("enableComplex");
// enableComplex.value = false;
// enableComplex.addEventListener("click",invertEnableComplex,false);
invertEnableComplex = function(){
	if (enableComplex.value == false){enableComplex.value = true;}
	else {enableCopmlex.value = false;}
}
solve.onclick = function(){
	var a = document.getElementById("quadrat").value;
	var b = document.getElementById("linear").value;
	var c = document.getElementById("constant").value;
	var solution1 = document.getElementById("solution1").value;
	var solution2 = document.getElementById("solution2").value;
	var solutiontype = document.getElementById("solutiontype").value;
	var discriminant = Math.pow(b,2) - (4 * a * c);
	if (discriminant == 0) {
		solution1 = (-b / (2 * a));
		solution2 = (-b / (2 * a));
		solutiontype = "One repeated real root";
	} else if (discriminant > 0) {
		solution1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		solution2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		solutiontype = "Two real roots";
	} else {
		if (enableComplex.value == false) {
			solutiontype = "No real roots";
		} else {
			solution1 = (-b / (2 * a)) + " + " + (Math.sqrt(-discriminant) / (2 * a)) + "i";
			solution2 = (-b / (2 * a)) + " - " + (Math.sqrt(-discriminant) / (2 * a)) + "i";
			solutiontype = "Two complex roots";
		}
	}
}