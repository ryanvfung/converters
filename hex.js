function hexcalc() {
	var hex = document.getElementById("hex");
	var red = document.getElementById("red");
	var green = document.getElementById("green");
	var blue = document.getElementById("blue");
	var redtemp = 0;
	var greentemp = 0;
	var bluetemp = 0;
	var hexstatus = document.getElementById("hexstatus");
	var invalid = 0;
	if (hex.value.length == 0) {
		hexstatus.innerHTML = "Waiting for input";
	} else if (hex.value.length == 6) {
		redtemp = parseInt("0x" + hex.value.substring(0,2));
		greentemp = parseInt("0x" + hex.value.substring(2,4));
		bluetemp = parseInt("0x" + hex.value.substring(4,6));
		if ( (redtemp >= 0) && (bluetemp >= 0) && (greentemp >= 0) ){
			red.value = redtemp;
			green.value = greentemp;
			blue.value = bluetemp;
			hexstatus.innerHTML = "Processed 6-digit hex RGB value";
		} else {
			red.value = " ";
			green.value = " ";
			blue.value = " ";
			hexstatus.innerHTML = "Invalid or unrecognised input";
		}
	} else if ((hex.value.length == 7) && (hex.value.substring(0,1)=="#")) {
		redtemp = parseInt("0x" + hex.value.substring(1,3));
		greentemp = parseInt("0x" + hex.value.substring(3,5));
		bluetemp = parseInt("0x" + hex.value.substring(5,7));
		if ( (redtemp >= 0) && (bluetemp >= 0) && (greentemp >= 0) ){
			red.value = redtemp;
			green.value = greentemp;
			blue.value = bluetemp;
			hexstatus.innerHTML = "Processed 6-digit hex RGB value with hash";
		} else {
			red.value = " ";
			green.value = " ";
			blue.value = " ";
			hexstatus.innerHTML = "Invalid or unrecognised input";	
		}
	} else if (hex.value.length == 3) {
		redtemp = 17 * parseInt("0x" + hex.value.substring(0,1));
		greentemp = 17 * parseInt("0x" + hex.value.substring(1,2));
		bluetemp = 17 * parseInt("0x" + hex.value.substring(2,3));
		hexstatus.innerHTML = "Processed 3-digit hex.value RGB value";
		if ( (redtemp >= 0) && (bluetemp >= 0) && (greentemp >= 0) ){
			red.value = redtemp;
			green.value = greentemp;
			blue.value = bluetemp;
			hexstatus.innerHTML = "Processed 3-digit hex.value RGB value";
		} else {
			red.value = " ";
			green.value = " ";
			blue.value = " ";
			hexstatus.innerHTML = "Invalid or unrecognised input";
		}
	} else if ((hex.value.length == 4) && (hex.value.substring(0,1)=="#")) {
		redtemp = 17 * parseInt("0x" + hex.value.substring(1,2));
		greentemp = 17 * parseInt("0x" + hex.value.substring(2,3));
		bluetemp = 17 * parseInt("0x" + hex.value.substring(3,4));
		hexstatus.innerHTML = "Processed 3-digit hex.value RGB value";
		if ( (redtemp >= 0) && (bluetemp >= 0) && (greentemp >= 0) ){
			red.value = redtemp;
			green.value = greentemp;
			blue.value = bluetemp;
			hexstatus.innerHTML = "Processed 3-digit hex.value RGB value with hash";
		} else {
			red.value = " ";
			green.value = " ";
			blue.value = " ";
			hexstatus.innerHTML = "Invalid or unrecognised input";
		}
	}
	else hexstatus.innerHTML = "Invalid or unrecognised input";
}
function rgbcalc() {
	var hex = document.getElementById("hex");
	var red = document.getElementById("red");
	var green = document.getElementById("green");
	var blue = document.getElementById("blue");
	var hexstatus = document.getElementById("hexstatus");
	var stemp;
	var invalid = 0;
	var hex1, hex2, hex3, hex4, hex5, hex6;
	var rp = 0, gp = 0, bp = 0;
	if( (red.value<0) || (red.value>255) || (red.value!=Math.floor(red.value)) ){rp=1}
	if( (green.value<0) || (green.value>255) || (green.value!=Math.floor(green.value)) ){gp=1}
	if( (blue.value<0) || (blue.value>255) || (blue.value!=Math.floor(blue.value)) ){bp=1}
	if(rp==1||gp==1||bp==1){stemp="red, green and blue values"}
	else if(rp==1||gp==1){stemp="red and green values"}
	else if(rp==1||bp==1){stemp="red and blue values"}
	else if(gp==1||gp==1){stemp="green and blue values"}
	else if(rp==1){stemp="red value"}
	else if(gp==1){stemp="green value"}
	else if(bp==1){stemp="blue value"}
	if(rp!=0||gp!=0||bp!=0){hexstatus.innerHTML = "Invalid " + stemp + ". RGB values must be an integer between 0 and 255 inclusive."}
	else {
		hex1 = Math.floor(red.value/16);
		hex2 = red.value - (hex1*16);
		hex3 = Math.floor(green.value/16);
		hex4 = green.value - (hex3*16);
		hex5 = Math.floor(blue.value/16);
		hex6 = blue.value - (hex5*16);
		hex.value = "" + x(hex1) + x(hex2) + x(hex3) + x(hex4) + x(hex5) + x(hex6);
		hexstatus.innerHTML = "Processed RGB values";
	}
}
function x(dec){
	if(dec==15){return "F"}
	else if(dec==14){return "E"}
	else if(dec==13){return "D"}
	else if(dec==12){return "C"}
	else if(dec==11){return "B"}
	else if(dec==10){return "A"}
	else return dec;
}