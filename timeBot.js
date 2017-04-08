'use strict';

var dateFormat = require('dateformat');
const vk = new (require( 'vk-io' ));

vk.setToken('Токен сообщества');

vk.longpoll.start()
	.then(() => {
		console.log('Long Poll started');
	});

vk.longpoll.on('message',(message) => {

	var now = new Date();

	if (message.flags[1] != 'answered') {
				var now = new Date();
				message.send( dateFormat(now, "h:MM:ss TT") );
	}

});
