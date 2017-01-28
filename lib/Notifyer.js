'use strict'
let ChannelsObj = require("./channelLoader.js");
class Notifyer {
	constructor(notification){
		this.notification = {}
		var Notification = notification;
		if ( Notification.hasOwnProperty('name') && Notification.hasOwnProperty('channels')) {
		    	if(typeof Notification.name == 'string' && typeof Notification.channels[0] == 'object'){
		    		this.notification.name = Notification.name
		    		this.notification.channels = Notification.channels
		    	}else{
		    			 throw new Error('malformed notification object');
		    	}

		}else{
			 throw new Error('malformed notification object');
		}
	}

	send(done){
		var errors = [];
		var responses = [];

		done();


	}

}

module.exports = Notifyer;
