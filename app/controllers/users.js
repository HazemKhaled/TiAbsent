function transfomer( model ) {
	var transform = model.toJSON( );
	transform.balance = "Balance : " + Math.floor( 600 + Math.random( ) * 0 ) + "/600";
	return transform;
}

Alloy.Collections.user.fetch( ); 