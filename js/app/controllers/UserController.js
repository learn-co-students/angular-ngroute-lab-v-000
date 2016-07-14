angular 
	.module('app')
	.controller('UserController', function (user) {
		var ctrl = this;

		ctrl.user = user.data;
	});