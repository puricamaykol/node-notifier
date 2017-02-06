'use strict'

class pusherChannel{
    send(callback){
        var errors = []
        var responses = {}
        setTimeout(function() {
            callback(errors, responses)
        }, 1000)
    }
}

module.exports = pusherChannel