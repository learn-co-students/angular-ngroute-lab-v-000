function UserController(userServiceReturnVal) {
  this.user = userServiceReturnVal.body;
}

angular
	.module('app')
	.controller('UserController', UserController);