angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/user/:id', {
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function(UserService, $route) {
              //console.log($route)
              return UserService.getUser($route.current.params.id);
            }
          }
        });
    });
