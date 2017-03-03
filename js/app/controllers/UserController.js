function UserController(user) {
	var ctrl = this;

	ctrl.user = user.data;
	console.log(ctrl.user);
}

angular
	.module('app')
	.controller('UserController', UserController);