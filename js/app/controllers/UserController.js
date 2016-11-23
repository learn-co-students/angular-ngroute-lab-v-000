function UserController($routeParams, UserService) {
	debugger;
	var ctrl = this;
	ctrl.user = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);
