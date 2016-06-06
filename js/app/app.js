angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/user/:id', {
          templateURL: '/views/user.html',
          controller: 'UserController as ctrl',
          resolve: {
            user: function ($routeParams, $http) {
              return $http.get('http://0.0.0.0:8882/rest/user/' + $routeParams.id);
            }
          }
        });
    });