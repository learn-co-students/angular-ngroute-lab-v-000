angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/user/:id', {
          templateUrl: 'views/user.html',
          controller: 'UserController',
          resolve: {
                    user: function ($routeParams) {
                        // return $http.get('/user/'+$routeParams.name);
                      return UserService.getUser($routeParams.id);
                    }
                }
        });
    });