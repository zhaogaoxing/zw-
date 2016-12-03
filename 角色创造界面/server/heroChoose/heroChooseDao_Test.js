var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit : 10,
	host		: 'localhost',
	user		: 'root',
	password	: '123456',
	database	: 'db_user'
});


var sql =  'select * from t_heroChoose where t_heroChoose.userID=?';

var values = [];								 

var result = {};														

//exports.heroChoose = function heroChoose(socket){    

	values.push(1);  //socket.user.userID

	pool.getConnection(function(err, connection){
		connection.query({sql:sql,values:values},function(err, rows, fields){	
		

			if(rows.length == 0){
				console.log('None');
				//socket.emit('heroChoose',false);
			}else{
				console.log(rows);
				//socket.heroChoose = rows;
				//socket.emit('heroChoose',socket.heroChoose);
			}
		});
		connection.release();

		values = [];

	});
	
//}