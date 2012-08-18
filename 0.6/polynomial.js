// JavaScript Document
function sq(x){return Math.pow(x,2);}
function cb(x){return Math.pow(x,3);}
function rt(x){return Math.sqrt(x);}
function cbrt(x){return Math.pow(x,1/3);}
function solve() {
	var cubic = document.getElementById("cubic").value;
	var quad = document.getElementById("quad").value;
	var linear = document.getElementById("linear").value;
	var constant = document.getElementById("constant").value;
	var roots = document.getElementById("roots");
	if((cubic!=0) && (cubic!="")){
		var a = cubic;
		var b = quad;
		var c = linear;
		var d = constant;
		var e = (18*a*b*c*d) - (4 * cb(b) * d) + (sq(b)*sq(c)) - (4*a*cb(c)) - (27*sq(a)*sq(d));
		var f = (2*cb(b)) - (9*a*b*c) + (27*sq(a)*d);
		var g = rt(sq(f) - (4*cb(sq(b)-(3*a*c))));
		var h = cbrt( (f+g)/2);
		var i = cbrt( (f-g)/2);
		var j = -1 / (3*a);
		var k = rt(3)*j/2;
		var re1 = j*(b*1+h+i);
		var re2 = j* ((b - ((h+i)/2)));
		var im2 = k*(h-i);
		var re3 = j* ((b - ((i+h)/2)));
		var im3 = k*(i-h);
		roots.rows = 3;
		roots.value = re1 + "\n" + re2 + " + " + im2 + "i \n" + re3 + " + " + im3 + "i";
		// If Δ > 0, then the equation has three distinct real roots.
		// If Δ = 0, then the equation has a multiple root and all its roots are real.
		// If Δ < 0, then the equation has one real root and two nonreal complex conjugate roots.
	} else {
		var a = quad;
		var b = linear;
		var c = constant;
		var d = sq(b) - (4*a*c);
		roots.rows = 2;
		if(d >= 0){
			var root1 = (-b + rt(d)) / (2*a);
			var root2 = (-b - rt(d)) / (2*a);
			roots.value = root1 + "\n" + root2 + "\n";
		} else {
			var re = -b / (2*a);
			var im = rt(-d) / (2*a);
			roots.value = re + " + " + im + "i \n" + re + " - " + im + "i";
		}
	}
}