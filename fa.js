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