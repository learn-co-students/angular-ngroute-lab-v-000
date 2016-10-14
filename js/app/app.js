angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider){
      $routeProvider
        .when('/user/:id', {
          templateUrl: 'js/views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function($routeParams){
              return UserController($routeParams.id)
            }
          }
        })
    });
