// Supervisors
var preload_data = [ {
	"name": "Hazem Khaled",
	"email": "hazem.khaled@gmail.com",
	"password": "202cb962ac59075b964b07152d234b70",
	"type": "S",
	"pic": "https://d13pix9kaak6wt.cloudfront.net/avatar/users/h/a/z/hazemkhaled_1374881909_15.jpg"
}, {
	"name": "Islam Askar",
	"email": "islamaskar@gmail.com",
	"password": "202cb962ac59075b964b07152d234b70",
	"type": "S",
	"pic": "https://lh3.googleusercontent.com/-TBmWVRoYsOE/AAAAAAAAAAI/AAAAAAAAFcA/CEYBB7D_3as/s120-c/photo.jpg"
}, {
	"name": "Mohammed Elsabagh",
	"email": "hazem.khaled@gmail.com",
	"password": "202cb962ac59075b964b07152d234b70",
	"type": "S",
	"pic": "https://lh3.googleusercontent.com/-N4H_Fp6Avko/AAAAAAAAAAI/AAAAAAAAAB8/1Gle44Ve08c/s120-c/photo.jpg"
} ];

migration.up = function( migrator ) {
	migrator.createTable( {
		"columns": {
			"id": "INTEGER PRIMARY KEY AUTOINCREMENT",
			"name": "TEXT",
			"email": "TEXT",
			"password": "TEXT",
			"type": "TEXT",
			"pic": "TEXT",
			"trackId": "INTEGER"
		}
	} );
	var i = 0;
	for( i; i < preload_data.length; i += 1 ) {
		migrator.insertRow( preload_data[ i ] );
	}
};

migration.down = function( db ) {

};
