function UserController(user) {
  var ctrl= this;
  this.user = user.data
}

angular
	.module('app')
	.controller('UserController', UserController);