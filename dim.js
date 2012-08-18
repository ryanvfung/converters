function dimcalc(type) {
	var ppi = document.getElementById("dpi");
	var px = document.getElementById("pixels");
	var pt = document.getElementById("points");
	var mm = document.getElementById("millimetres");
	var inch = document.getElementById("inches");
	if(type==1){inch.value = px.value / ppi.value;}
	if(type==3){inch.value = mm.value / 25.4;}
	px.value = inch.value * ppi.value;
	pt.value = inch.value * ppi.value / 72;
	mm.value = 25.4 * inch.value;
}
function rescalc(){
	var reswidth = document.getElementById("reswidth");
	var resheight = document.getElementById("resheight");
	var ressize = document.getElementById("ressize");
	ressize.value = Math.sqrt( (Math.pow(reswidth.value,2)) + (Math.pow(resheight.value,2)) );
}
function screenwidthmmcalc(){
	var screenwidthmm = document.getElementById("screenwidthmm");
	var screenwidth = document.getElementById("screenwidth");
	screenwidth.value = screenwidthmm.value / 25.4;
}
function screenheightmmcalc(){
	var screenheightmm = document.getElementById("screenheightmm");
	var screenheight = document.getElementById("screenheight");
	screenheight.value = screenheightmm.value / 25.4;
}
function screencalc(){
	var screenwidth = document.getElementById("screenwidth");
	var screenheight = document.getElementById("screenheight");
	var screensize = document.getElementById("screensize");
	screensize.value = Math.sqrt( (Math.pow(screenwidth.value,2)) + (Math.pow(screenheight.value,2)) );
}
function resppi(){
	var ressize = document.getElementById("ressize");
	var screensize = document.getElementById("screensize");
	var res = document.getElementById("res");
	res.value = ressize.value / screensize.value;
}
function restransfer(){
	dpi = document.getElementById("dpi");
	res = document.getElementById("res");
	dpi.value = res.value;
}