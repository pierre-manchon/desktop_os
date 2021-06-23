// DRAG DRAGGABLE ELEMENT IF SHIFT IS PRESSED
function isKeyPressed(event) {
	if(event.shiftKey) {
		$('.desktop').draggable({
			// containment:"#body",
			cursor: "grab",
			axis: "y"
		});
	} else {
		try {
			$('.desktop').draggable('destroy');
		}
		catch(e)
		{}
	}
};
// GET AND DISPLAY TIME
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').innerHTML =
	h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}