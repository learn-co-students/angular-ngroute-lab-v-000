function UserController(user) {
  this.data = user.data
  debugger
}

angular
	.module('app')
	.controller('UserController', UserController);