function UserController($scope, user) {
    $scope.first = user.data.name.first;
    $scope.last = user.data.name.last;
    $scope.email = user.data.email;
}

function MyService($http) {
  this.getU = function (id) {
    return $http.get('http://0.0.0.0:8882/rest/user/' + id);
  };
}

angular
	.module('app')
	.controller('UserController', UserController)
  .service('MyService', MyService);