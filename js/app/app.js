angular
  .module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/user/:name', {
        templateUrl: 'views/user.html',
        controller: 'UserController as vm',
        resolve: {
          user: function($http, $route) {
            // debugger
            // return UserService.getUser($route.current.params.name);
            return $http.get('http://0.0.0.0:8882/rest/user/' + $route.current.params.name);
          }
        }
      })
  });