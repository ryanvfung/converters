/*******************
	Copyright 2012 Ryan Fung, Zywxn
	
	This file is part of Zywxn Converter Suite.

	Zywxn Converter Suite is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	Zywxn Converter Suite is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with Zywxn Converter Suite.  If not, see <http://www.gnu.org/licenses/>.
*******************/

function rt(x){return Math.sqrt(x);}
function solve(){
	var quad = document.getElementById("quad").value;
	var linear = document.getElementById("linear").value;
	var constant = document.getElementById("constant").value;
	var roots = document.getElementById("roots");
	var temp;
	var a = quad;
	var b = linear;
	var c = constant;
	var d = Math.pow(b,2) - (4*a*c);
	if(a==0){
		roots.innerHTML = "The leading coefficient cannot be zero.";
	} else{
		temp = " for the quadratic equation ";
		if (a!=1) temp = temp + a;
		temp = temp + "x<sup>2</sup>";
		if (b<0) temp = temp + " − " + (-b);
			else if (b>0) temp = temp + " + " + b;
		if (b<0 || b>0) temp = temp + "x";
		if (c<0) temp = temp + " − " + (-c);
			else if (c>0) temp = temp + " + " + c;
		temp = temp + " = 0 :<br />";
		if(d==0){
			var root = -b / (2*a);
			temp = "is one repeated root" + temp + root;
		} else if(d > 0){
			var root1 = (-b + rt(d)) / (2*a);
			var root2 = (-b - rt(d)) / (2*a);
			temp = "are two real roots" + temp + root1 + "<br />" + root2;
		} else {
			var re = -b / (2*a);
			var im = rt(-d) / (2*a);
			temp = "are two non-real roots" + temp + re + " + " + im + "i<br />" + re + " − " + im + "i";
		}
		roots.innerHTML = "There " + temp;
	}
}