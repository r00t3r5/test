//Site sql connection
var database_params = {
	database: 'DATABASE HERE',
	host: 'localhost',
	user: 'DB USERNAME HERE',
	password: 'DB PASSWORD HERE'
}

//Bot sql connection
var pool  = mysql.createPool({
	connectionLimit : 10,
	database: 'DATABASE HERE',
	host: 'localhost',
	user: 'DB USERNAME HERE',
	password: 'DB PASSWORD HERE'
});
