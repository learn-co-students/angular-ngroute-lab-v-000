angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: 'animal is {{first}}',
          controller: 'UserController'
        })
        .when('/user/:id', {
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function (MyService, $route) {
              return MyService.getU($route.current.params.id);
            }
          }
        });
    });