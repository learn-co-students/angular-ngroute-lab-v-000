function UserController(user) {
	var ctrl = this;

	ctrl.user = user.data // our user object is populated from the backend
}

angular
	.module('app')
	.controller('UserController', UserController);
