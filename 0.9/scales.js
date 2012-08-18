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

function scalesgen() {
	var n = ["C ","C♯","D ","D♯","E ","F ","F♯","G ","G♯","A ","A♯","B ","C ","C♯","D ","D♯","E ","F ","F♯","G ","G♯","A ","A♯","B ","C ","C♯","D ","D♯","E ","F ","F♯","G ","G♯","A ","A♯","B "]
	var b = ["C ","D♭","D ","E♭","E ","F ","G♭","G ","A♭","A ","B♭","B ","C ","D♭","D ","E♭","E ","F ","G♭","G ","A♭","A ","B♭","B ","C ","D♭","D ","E♭","E ","F ","G♭","G ","A♭","A ","B♭","B "]
	var g = "   ";
	var k = document.getElementById("key").value * 1;
	var major = document.getElementById("major");
	var majorb = document.getElementById("majorb");
	var majorp = document.getElementById("majorp");
	var majorpb = document.getElementById("majorpb");
	var minorh = document.getElementById("minorh");
	var minorhb = document.getElementById("minorhb");
	var minorma = document.getElementById("minorma");
	var minormab = document.getElementById("minormab");
	var minormd = document.getElementById("minormd");
	var minormdb = document.getElementById("minormdb");
	var minorp = document.getElementById("minorp");
	var minorpb = document.getElementById("minorpb");
	var dom = document.getElementById("dom");
	var domb = document.getElementById("domb");
	var dim = document.getElementById("dim");
	var dimb = document.getElementById("dimb");
	var tone = document.getElementById("tone");
	var toneb = document.getElementById("toneb");
	major.value = n[k]+g+n[k+2]+g+n[k+4]+g+n[k+5]+g+n[k+7]+g+n[k+9]+g+n[k+11];
	majorb.value = b[k]+g+b[k+2]+g+b[k+4]+g+b[k+5]+g+b[k+7]+g+b[k+9]+g+b[k+11];
	majorp.value = n[k]+g+n[k+4]+g+n[k+7];
	majorpb.value = b[k]+g+b[k+4]+g+b[k+7];
	minorh.value = n[k]+g+n[k+2]+g+n[k+3]+g+n[k+5]+g+n[k+7]+g+n[k+8]+g+n[k+11];
	minorhb.value = b[k]+g+b[k+2]+g+b[k+3]+g+b[k+5]+g+b[k+7]+g+b[k+8]+g+b[k+11];
	minorma.value = n[k]+g+n[k+2]+g+n[k+3]+g+n[k+5]+g+n[k+7]+g+n[k+9]+g+n[k+11];
	minormab.value = b[k]+g+b[k+2]+g+b[k+3]+g+b[k+5]+g+b[k+7]+g+b[k+9]+g+b[k+11];
	minormd.value = n[k+10]+g+n[k+8]+g+n[k+7]+g+n[k+5]+g+n[k+3]+g+n[k+2]+g+n[k];
	minormdb.value = b[k+10]+g+b[k+8]+g+b[k+7]+g+b[k+5]+g+b[k+3]+g+b[k+2]+g+b[k];
	minorp.value = n[k]+g+n[k+3]+g+n[k+7];
	minorpb.value = b[k]+g+b[k+3]+g+b[k+7];
	dom.value = n[k+7]+g+n[k+11]+g+n[k+14]+g+n[k+17];
	domb.value = b[k+7]+g+b[k+11]+g+b[k+14]+g+b[k+17];
	dim.value = n[k]+g+n[k+3]+g+n[k+6]+g+n[k+9];
	dimb.value = b[k]+g+b[k+3]+g+b[k+6]+g+b[k+9];
	tone.value = n[k]+g+n[k+2]+g+n[k+4]+g+n[k+6]+g+n[k+8]+g+n[k+10];
	toneb.value = b[k]+g+b[k+2]+g+b[k+4]+g+b[k+6]+g+b[k+8]+g+b[k+10];
	document.getElementById("scalesstatus").innerHTML = "Generated scales in the key of " + n[k];
}