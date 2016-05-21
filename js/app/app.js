angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/',{
          template: "woohoo!",
          controller: 'UserController'
        })
        .when('/user/:id',{
          templateUrl: 'views/user.html',
          controller: 'UserController as user',
          resolve: {
            user: function($route, UserSerivce){
              return UserService.getUser($route.current.params.id);
            }
          }
        });
    });
