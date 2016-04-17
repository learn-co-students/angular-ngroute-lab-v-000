function UserController(user) {
	var ctrl = this;
	ctrl.user = user.data;
	// debugger;

}

angular
	.module('app')
	.controller('UserController', UserController);
