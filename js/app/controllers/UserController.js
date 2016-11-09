function UserController(userServiceReturnVal) {
  this.user = userServiceReturnVal.data;
}

angular
	.module('app')
	.controller('UserController', UserController);