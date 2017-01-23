angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/user/:id', {
          templateUrl: 'views/user.html',
          controller: 'UserController as vm',
          resolve: {
            user: function($http, $route) {
              return $http.get('http://0.0.0.0:8882/rest/user/' + $route.current.params.id)
            }
          }
        })
    })