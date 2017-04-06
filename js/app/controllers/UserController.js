function UserController($routeParams, user) {
	var ctrl = this;
	ctrl.user = user.data;
	// UserService
	// 	.getUser($routeParams.name)
	// 	.then(function(res) {
	// 		ctrl.user = res.data;
	// 	})
}

angular
	.module('app')
	.controller('UserController', UserController);
