function UserService($http) {
    this.getUser = function (name) {
        return $http.get('http://0.0.0.0:8882/rest/user/' + namr);
    };
}

function UserController($routeParams, UserService) {
    var ctrl = this;

    UserService
        .getUser($routeParams.name)
        .then(function (res) {
            ctrl.user = res.data; // our user object is populated from the backend
        });
}

angular
	.module('app')
	.controller('UserController', UserController)
	.service('UserService', UserService);
