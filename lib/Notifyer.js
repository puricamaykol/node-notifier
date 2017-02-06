'use strict'
let ChannelsObj = require("./channelLoader.js");
let async = require("async");
class Notifyer {
	/**
	 * @param  {notification} Notification object
	 * @param  {channelsObject} Object that holds all notification channels objects. Each should have a send() method
	 * that return an object with response info
	 * @return {void}
	 * @TODO Automate channelsObject injection
	 * @TODO Notification Queue handling
	 */
	constructor(notification, channelsObject) {
		this.notification = {}
		this.channelsSendMethodsArray = []
		this.channels = channelsObject
		var Notification = notification

		if (Notification == null || Notification == '' || Notification == false) {
			throw new Error('parameter 1 expected to be Notification Object')
		} else if (Notification.hasOwnProperty('name') && Notification.hasOwnProperty('channels') && Notification.hasOwnProperty('message')) {
			if (typeof Notification.name == 'string' && typeof Notification.channels[0] == 'object' && typeof Notification.message == 'string') {
				this.notification.name = Notification.name
				this.notification.channels = Notification.channels
			} else {
				throw new Error('malformed notification object')
			}

		} else {
			throw new Error('malformed notification object')
		}

		if (this.channels == null || this.channels == '' || this.channels == false || this.channels == {}) {
			throw new Error('parameter 2 expected to be a Channels Object')
		}
		var me = this
		this.channelsSendMethodsArray = this.channels.map(function(channel){
			return channel.send.bind(me)
		})


	}

	/**
	 * Tries to send the notification over each channel
	 * @param callback
	 */
	send(callback) {
		async.parallel(this.channelsSendMethodsArray, function(err, results) {
				callback(null,results)
		});
	}
}

module.exports = Notifyer
