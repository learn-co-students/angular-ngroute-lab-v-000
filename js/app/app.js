angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/user/:id', {
            templateUrl: 'views/user.html',
            controller: 'UserController as user',
            resolve: {
              user: function ($routeParams, UserService) {
                return UserService.getuser($routeParams.id);
              }
            }
        });
    });
