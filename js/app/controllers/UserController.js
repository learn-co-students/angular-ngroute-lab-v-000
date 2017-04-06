function UserController($routeParams) {
	this.data = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);
