function UserController($routeParams, UserService) {
	var ctrl = this;
	console.log(ctrl);
	UserService
		.getUser($routeParams.name)
		.then(function (res) {
			ctrl.user = res.data;
		})

}

angular
	.module('app')
	.controller('UserController', UserController);
