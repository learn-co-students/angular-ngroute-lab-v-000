function UserController($routeParams, UserService) {
    var ctrl = this;

    UserService
        .getUser($routeParams.id)
        .then(function (res) {
            ctrl.user = res.data; // our user object is populated from the backend
        });
}

function UserService($http) {
	 this.getUser = function (id) {
			 return $http.get('/user/' + id);
	 };
}
angular
    .module('app')
    .controller('UserController', UserController);
