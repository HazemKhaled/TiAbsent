function transfomer( model ) {
	var transform = model.toJSON( );
	transform.balance = "Balance : " + Math.floor( Math.random( ) * ( 600 - 400 ) + 400 ) + "/600";
	return transform;
}

Alloy.Collections.user.fetch( );

//Alloy.Collections.user.models.length;

function setActionBar( ) {
	$.users.activity.actionBar.subtitle = "We have " + Alloy.Collections.user.models.length + " user";
}

function openReport( e ) {
	// get the clicked item from that section
	var item = $.list.sections[ 0 ].getItemAt( e.itemIndex );

	// clicked button
	// alert(e.bindId);
}

function closeMe () {
	$.users.close();
}
