function UserController(user) {
	this.user = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);
