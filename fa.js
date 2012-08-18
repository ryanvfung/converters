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

/* Footer Aligning (fa.js)
 * Coded from scratch by Ryan Fung
 * Version 1.01 (2012-05-02)
 * Aligns #footer to the bottom of the browser window (removes the footer from normal content flow)
 * If the browser height is so small that the footer is not immediately visible, restore footer to normal content flow
 * Upon dynamic content change, run fa() to update footer position
 * Run footer alignment from other scripts with:
	function faz(){if(fa)fa()}
 */

window.onload=function(){fa()}
window.onresize=function(){fa()}
function fa(){
	height = document.getElementById("header").offsetHeight + document.getElementById("content").offsetHeight + footer.offsetHeight;
	height = document.getElementsByTagName("body")[0].offsetHeight;
	footer = document.getElementById("footer");
	if(window.innerHeight >= height){
		footer.style.position = "fixed";
		footer.style.top = (window.innerHeight - footer.offsetHeight) + "px";
		footer.style.width = "100%";
	} else {
		footer.style.position = "relative";
		footer.style.top = 0;
	}
}