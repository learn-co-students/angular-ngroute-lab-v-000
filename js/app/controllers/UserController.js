function UserController() {
	this.user = fairyDust.data;
}

angular
	.module('app')
	.controller('UserController', UserController);