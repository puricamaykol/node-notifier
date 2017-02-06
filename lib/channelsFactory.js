'use strict'
let ChannelsObj = require("./channelLoader.js");
class channelsFactory {
    /**
     * Gets passed a notification value object and returns an Array holding the needed channel objects
     * The intention of this is to invert control
     * @param notificationObject
     * @TODO import channels from individual packages (each channel will be used as an individual npm package)
     */
   /* constructor(notificationObject) {
        this.channels = []
        for (var i = notificationObject.channels.length - 1; i <= 0; i--) {
            this.channels[notificationObject.channels[i].channelName] = new ChannelsObj[notificationObject.channels[i].channelName](notificationObject.channels[i].settings)
        }
        return this.channels
    }*/
}

module.exports = channelsFactory;