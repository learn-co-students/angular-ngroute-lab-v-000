function UserController(user) {
  this.user = user;
}

angular
	.module('app')
	.controller('UserController', UserController);