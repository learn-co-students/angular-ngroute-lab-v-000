angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/user/:id', {
          templateUrl: '/views/user.html',
          controller: 'UserController as ctrl',
          resolve: {
            user: function($routeParams, $route, UserService){
              return UserService.getUser($route.current.params.id)
            }
          }
        })
      })
