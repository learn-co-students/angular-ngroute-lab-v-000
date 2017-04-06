angular
    .module('app', [''])
    .configure(function ($routeProvider) {
      $routeProvider
        .when('/user/:name', {
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function ($routeParams, UserService) {
              return UserService.getService($routeParams.name);
            }
          }
        });
    });