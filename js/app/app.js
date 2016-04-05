angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/user/:id', {
          controller: 'UserController as user',
          templateUrl:'views/user.html',
          resolve:{
            user: function($routeParams,UserService){
              return UserService.getUser($routeParams.id)
            }
          }
        });
    });