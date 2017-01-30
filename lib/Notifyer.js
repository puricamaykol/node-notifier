'use strict'
let ChannelsObj = require("./channelLoader.js");
class Notifyer {
	/**
	 * @param  {notification}
	 * @param  {channelsObject}
	 * @return {[type]}
	 */
	constructor(notification, channelsObject){
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

	send(callback){
		var errors = [];
		var responses = [];
		for (var i = this.notification.channels.length - 1; i >= 0; i--) {
			

			responses[this.notification.channels[i].channelName] = {};
		}//
		 setTimeout(function() {
        callback(errors, responses);
    		}, 1000);


	}

}

module.exports = Notifyer;
