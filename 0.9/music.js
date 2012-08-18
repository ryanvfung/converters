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

function time(type) {
	var minutes = document.getElementById("min");
	var seconds = document.getElementById("sec");
	var total = document.getElementById("total");
	if(type==1){
		total.value = ((minutes.value * 60) * 1) + (seconds.value * 1);
	} else if(type==2){
		seconds.value = total.value % 60;
		minutes.value = (total.value - seconds.value) / 60;
	}
}
function byteratecalc(){
	var bitrate = document.getElementById("bitrate");
	var byterate = document.getElementById("byterate");
	byterate.value = bitrate.value / 8;
}
function bitratecalc(){
	var bitrate = document.getElementById("bitrate");
	var byterate = document.getElementById("byterate");
	bitrate.value = byterate.value * 8;
}
function kilobytecalc(){
	var megabyte = document.getElementById("size");
	var kilobyte = document.getElementById("sizekb");
	kilobyte.value = megabyte.value * 1024;
}
function megabytecalc(){
	var megabyte = document.getElementById("size");
	var kilobyte = document.getElementById("sizekb");
	megabyte.value = kilobyte.value / 1024;
}
function calc(type){
	var minutes = document.getElementById("min");
	var seconds = document.getElementById("sec");
	var total = document.getElementById("total");
	var bitrate = document.getElementById("bitrate");
	var byterate = document.getElementById("byterate");
	var megabyte = document.getElementById("size");
	var kilobyte = document.getElementById("sizekb");
	if(type==1){
		kilobyte.value = total.value * byterate.value;
		megabyte.value = kilobyte.value / 1024;	
	}
	if(type==2){
		byterate.value = kilobyte.value / total.value;
		bitrate.value = byterate.value * 8;
	}
	if(type==3){
		total.value = kilobyte.value / byterate.value;
		seconds.value = total.value % 60;
		minutes.value = (total.value - seconds.value) / 60;
	}
}