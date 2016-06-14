function UserController() {
  this.data = user.data
}

angular
	.module('app')
	.controller('UserController', UserController);