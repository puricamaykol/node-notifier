'use strict'

class websocketChannel{
    send(callback){
        var errors = []
        var responses = {}
        setTimeout(function() {
            callback(errors, responses)
        }, 1000)
    }
}

module.exports = websocketChannel