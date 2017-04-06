function UserController($routeParams, UserService) {
    var ctrl = this;
 
    UserService
        .getUser($routeParams.id)
        .then(function (res) {
            ctrl.user = res.data; // our user object is populated from the backend
        });
}

angular
	.module('app')
	.controller('UserController', UserController)
	
