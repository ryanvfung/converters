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