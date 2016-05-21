function UserController($scope, $route, $routeParams, $http) {
  $scope.getUser = function (id) {
    $http.get('http://0.0.0.0:8882/rest/user/' + id)
    .then(function (res) {
      $scope.first = res.data.name.first;
      $scope.last = res.data.name.last;
      $scope.email = res.data.email;
    });
  };
  $scope.getUser($routeParams.id);
}

angular
	.module('app')
	.controller('UserController', UserController);