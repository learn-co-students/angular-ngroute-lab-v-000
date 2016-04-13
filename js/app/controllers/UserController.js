function UserController(user) {
  console.log(user);
  var ctrl = this;
  ctrl.user = user.data;

}

angular
	.module('app')
	.controller('UserController', UserController);
