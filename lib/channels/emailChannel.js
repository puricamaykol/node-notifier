'use strict'

class emailChannel{

    send(callback){
        var errors = []
        var responses = {}
        setTimeout(function() {
            callback(errors, responses)
        }, 1000)
    }
}

module.exports = emailChannel