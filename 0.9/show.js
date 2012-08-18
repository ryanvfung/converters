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

/* Show/Hide Content
 * Coded from scratch by Ryan Fung
 * Version 1.0 (2012-05-02)
 *  Upon clicking show content, show content and offer to hide content
 *  Upon clicking hide content, hide content and offer to show content
 *  Click on anchor links will force show content and offer to hide content
 */

function faz(){
	if(fa) fa()
}
function hexshow(){
	hex = document.getElementById("hexconvbox");
	hexshowbutton = document.getElementById("hexshowbutton");
	if (hex.style.display=="none"){
		hex.style.display="block";
		hexshowbutton.innerHTML = "Hide Hex Converter";
		faz();
	} else {
		hex.style.display="none";
		hexshowbutton.innerHTML = "Show Hex Converter";
		faz();
	}
}
function dimshow(){
	dim = document.getElementById("dimconvbox");
	dimshowbutton = document.getElementById("dimshowbutton");
	if (dim.style.display=="none"){
		dim.style.display="block";
		dimshowbutton.innerHTML = "Hide Dimensions Converter";
		faz();
	} else {
		dim.style.display="none";
		dimshowbutton.innerHTML = "Show Dimensions Converter";
		faz();
	}
}
function musicshow(){
	music = document.getElementById("musicconvbox");
	musicshowbutton = document.getElementById("musicshowbutton");
	if (music.style.display=="none"){
		music.style.display="block";
		musicshowbutton.innerHTML = "Hide Music Metadata Converter";
		faz();
	} else {
		music.style.display="none";
		musicshowbutton.innerHTML = "Show Music Metadata Converter";
		faz();
	}
}
function scalesshow(){
	scales = document.getElementById("scalescalcbox");
	scalesshowbutton = document.getElementById("scalesshowbutton");
	if (scales.style.display=="none"){
		scales.style.display="block";
		scalesshowbutton.innerHTML = "Hide Scales Calculator";
		faz();
	} else {
		scales.style.display="none";
		scalesshowbutton.innerHTML = "Show Scales Calculator";
		faz();
	}
}
function quadshow(){
	quad = document.getElementById("quadsolverbox");
	quadshowbutton = document.getElementById("quadshowbutton");
	if (quad.style.display=="none"){
		quad.style.display="block";
		quadshowbutton.innerHTML = "Hide Quadratic Solver";
		faz();
	} else {
		quad.style.display="none";
		quadshowbutton.innerHTML = "Show Quadratic Solver";
		faz();
	}
}
function hexforceshow(){
	hex = document.getElementById("hexconvbox");
	hexshowbutton = document.getElementById("hexshowbutton");
	hex.style.display="block";
	hexshowbutton.innerHTML = "Hide Hex Converter";
	faz();
}
function dimforceshow(){
	dim = document.getElementById("dimconvbox");
	dimshowbutton = document.getElementById("dimshowbutton");
	dim.style.display="block";
	dimshowbutton.innerHTML = "Hide Dimensions Converter";
	faz();
}
function musicforceshow(){
	music = document.getElementById("musicconvbox");
	musicshowbutton = document.getElementById("musicshowbutton");
	music.style.display="block";
	musicshowbutton.innerHTML = "Hide Music Metadata Converter";
	faz();
}
function scalesforceshow(){
	scales = document.getElementById("scalescalcbox");
	scalesshowbutton = document.getElementById("scalesshowbutton");
	scales.style.display="block";
	scalesshowbutton.innerHTML = "Hide Scales Calculator";
	faz();
}
function quadforceshow(){
	quad = document.getElementById("quadsolverbox");
	quadshowbutton = document.getElementById("quadshowbutton");
	quad.style.display="block";
	quadshowbutton.innerHTML = "Hide Quadratic Solver";
	faz();
}