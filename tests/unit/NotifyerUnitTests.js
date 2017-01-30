var expect = require('chai').expect


describe('Notifyer', function() {
var notifyer = require("../../lib/Notifyer.js")

	describe('# Send()', function() { 
		it("Should accept welformed notification object", function(){
				var notificacionDummy = {
					"name": "Invoice notification",
					"channels":[
						{
							"channelName": "email", "payload": {} 
						}
					] 
				};
				var Notifyer = new notifyer(notificacionDummy)

				expect(Notifyer).to.be.an("object")
		});
		it("Should not accept malformed notification object", function(){
				var notificacionDummy = {
					"names": "Invoice notification",
					"channel":[
						
					] 
				};			
		/*Si no se envuelve el llamado a la funcion (en este caso el constructor) en 
		*una funcion anonima, chai no captura la excepcion sino el propio Node
		*Y la prueba va a fallar
		*/
				expect(function(){ 
					var Notifyer = new notifyer(notificacionDummy)
				}).to.throw("malformed notification object");
		});

		it("Should return an Array of objects with response info for each channel specified in value object", function(done){
			var notificacionDummy = {
				"name": "Invoice notification",
				"channels":[
					{
						"channelName": "pusher", "payload": {},
					},
					{
						"channelName": "sucketIo", "payload": {},
					},
					{	
						"channelName": "genericChannelName", "payload": {},
					}
				]
			};

			var Notifyer = new notifyer(notificacionDummy)
					Notifyer.send(function(err, res){
					expect(res).to.be.an('array');
					for (var i = notificacionDummy.channels.length - 1; i >= 0; i--) {
						//notificacionDummy[i]
						//	console.log(notificacionDummy.channels[i].channelName, "nombre del canal"+i+"'\n'");
						expect(res).to.have.property(notificacionDummy.channels[i].channelName);
						expect(res[notificacionDummy.channels[i].channelName]).to.be.an("object");
					}
						
						/*expect(res).to.have.property('pusher');
						expect(res.pusher).to.be.an("object");
						expect(res.pusher).to.have.an("object");
						expect(res).to.have.property('sucketIo');
						expect(res.sucketIo).to.be.an("object");
						expect(res).to.have.property('genericChannelName');
						expect(res.genericChannelName).to.be.an("object");*/
						done();
					});

		});

		/*
		it("Should not send message via a channel with missing payload info", function() {});

		it("Should not send message without value object", function() {});

		it("Should return propper error message for a channel with malformed payload object", function() {});

		it("Should return propper error message if a channel doesn't exist", function() {});*/

	});

});