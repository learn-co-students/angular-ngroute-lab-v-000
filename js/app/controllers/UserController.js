function UserController() {
}

angular
	.module('app',['ngRoute'])
	.controller('UserController', UserController)
	.config(function($routeProvider) {
		$routeProvider
		.when('/user/:id', {
			templateUrl: 'views/user.html',
			controller: 'UserController',
			resolve: {
				user: function($routeParams, UserService) {
				return UserService.getUser($routeParams.name);
			  }
			}
		})
	});
