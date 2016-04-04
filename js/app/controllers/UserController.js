function UserController(user) {
  debugger
  this.user = user.data;
}

angular
	.module('app')
	.controller('UserController', UserController);