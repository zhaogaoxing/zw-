var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname + '/public'));


io.on('connection', function(socket){

	console.log('a user connected');
	
	//begin--------------------登录----------------------------
	
		socket.on('login',function(user){		

			require('login/logindao').login(user, socket);
		});	

	//end----------------------登录----------------------------

	//begin--------------------角色选择------------------------
	
		socket.on('heroChoose',function(){		

			require('heroChoose/heroChooseDao').heroChoose(socket);
		});	

	//end----------------------角色选择------------------------

	//begin--------------------角色注册------------------------

		socket.on('heroTexture',function(data){
			socket.heroTexture= data;
			console.log('角色注册形象索引为: '+ socket.heroTexture);
		});

	//end----------------------角色注册------------------------
	
	//begin--------------------角色配置------------------------

		socket.on('getHeroTexture',function(data){
			
			console.log('角色配置形象索引为: '+ socket.heroTexture);
			socket.emit('getHeroTexture',socket.heroTexture);
		});

	//end----------------------角色配置------------------------


});

http.listen(3000, function(){
	console.log('listening on : 3000');
});





