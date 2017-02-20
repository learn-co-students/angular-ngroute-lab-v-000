function UserController(user, UserService) {
	var ctrl = this;
	ctrl.user = user.data;
	//UserService			//this will cause flicker, define in resolve prperty in route config
	//	.getUser($routeParams.name)
	//	.then(function (res) {
	//		ctrl.user = res.data;
	//	})
}

angular
	.module('app')
	.controller('UserController', UserController);
