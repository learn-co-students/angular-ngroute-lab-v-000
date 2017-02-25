angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/user/:id', {
          templateUrl: 'views/user.html',
          controller: 'UserController as ctrl',
          resolve: {
            user: function ($http, $routeParams) {
              return $http.get("http://0.0.0.0:8882/rest/user/" + $routeParams.id)
            }
          }
        })
    })