function doClick(e) {
	alert($.label.text);
}

function login(e) {
	var win = Alloy.createController('TracksView').getView();
	win.open();
}

$.index.open();
