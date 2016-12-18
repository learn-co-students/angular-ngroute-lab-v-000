angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/user/:name', {
          templateUrl: 'views/user.html',
          controller: 'UserController as ctrl',
          resolve: {
            user: function($route, UserService) {
              return UserService.getUser($route.current.params.name);
            }
          }
        });
    });