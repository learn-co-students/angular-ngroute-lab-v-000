function UserController(user) {
	var vm = this;

	vm.user = user.data // our user object is populated from the backend
}

angular
	.module('app')
	.controller('UserController', UserController);
