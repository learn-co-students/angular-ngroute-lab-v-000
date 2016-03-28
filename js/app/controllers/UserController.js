function UserController(user) {
	this.data = user;
}

angular
	.module('app')
	.controller('UserController', UserController);
