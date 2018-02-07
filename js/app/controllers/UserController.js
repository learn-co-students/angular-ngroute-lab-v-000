function UserController(user) {
	var ctrl = this;
	this.data = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);
