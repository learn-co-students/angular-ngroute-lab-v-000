function UserController(userData) {
	// console.log($routeParams.name); //$routeParams.name = liam, jaden, or mary
	var ctrl = this;
	// UserService
	// 	.getUser($routeParams.name)
	// 	.then(function (res) {
	// 		ctrl.user = res.data;
	// 	})
	ctrl.user = userData.data;
	console.log(ctrl.user.name.title);
}

angular
	.module('app')
	.controller('UserController', UserController);
