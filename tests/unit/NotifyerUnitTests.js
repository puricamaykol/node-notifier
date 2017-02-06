var expect = require('chai').expect
var sinon = require('sinon')

describe('Notifyer', function() {
	var notifyer = require("../../lib/Notifyer.js")
	let channelsFactory = require("../../lib/channelsFactory")
	let notification = {send: function(){}}
	describe('# Send()', function() {
		beforeEach(function() {
			 channelsFactory = [
				{   name:"pusherChannel",
					send: function(callback){
						setTimeout(function() {
							callback(null,{name: 'pusherChannel'})
						}, 1000)
					}
				},
				{ name: "emailChannel",
					send: function(callback){
						setTimeout(function() {
							callback(null, { name: 'emailChannel'})
						}, 1000)
					}
				},
				{  name: "websocketChannel",
					send: function(callback){
						setTimeout(function() {
							callback(null,{ name: 'websocketChannel'})
						}, 1000)
					}
				},
				{  name: "webhook",
					send: function(callback){
						setTimeout(function() {
							callback(null,{ name: 'webhookChannel'})
						}, 1000)
					}
				}
			];
			 notification = {
				"name": "Invoice notification",
				"message": "An invoice has been created!!!",
				"channels":[
					{
						"channelName": "pusherChannel", "payload": {}
					},
					{
						"channelName": "emailChannel", "payload": {}
					},
					{
						"channelName": "websocketChannel", "payload": {}
					},
					{
						"channelName": "webhookChannel", "payload": {}
					}
				]
			};
		});

		afterEach(function() {
			channelsFactory = {};
			notification = {};
		});

		it("Should accept welformed notification object", function(){
				var Notifyer = new notifyer(notification, channelsFactory)
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

		it("Should return an Array of objects with response info for every channel in channels Object", function(done){
			this.timeout(5000);
			var Notifyer = new notifyer(notification,channelsFactory)
					Notifyer.send(function(err,res){
						expect(res).to.be.an("array")
						expect(res).to.have.lengthOf(channelsFactory.length)
						done();
					});

		});

		/*it("Should not send message without value object", function() {
			expect(function(){
				var Notifyer = new notifyer()
			}).to.throw("parameter 1 expected to be Notification Object");

		});*/
		/*it("Should not send message without channels object", function() {

			expect(function(){
				var Notifyer = new notifyer(notification)
			}).to.throw("parameter 2 expected to be a Channels Object");

		});*/
		/*it("Should not send message with malformed channels object", function() {
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
			var channelsObject = {
				"channelName": {},
				"channelName2": {send: function(){}},
			};
			expect(function(){
				var Notifyer = new notifyer(notificacionDummy, channelsObject)
			}).to.throw("parameter 2 expected to be a Channels Object");

		});*/

		/*
		it("Should not send message via a channel with missing payload info", function() {});



		it("Should return propper error message for a channel with malformed payload object", function() {});

		it("Should return propper error message if a channel doesn't exist", function() {});*/

		it("Dado un usuario Administrador con sesion iniciada, '\n' cuando el usuario crea una capa llenando todos los datos necesarios '\n', entonces debería ver un mensaje que diga que se creo una capa nueva y ver los datos de dicha capa.", function() {});

	});

});