angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider){
      $routeProvider.when('/user/:id', {
        controller: 'UserController as user',
        templateUrl: 'views/user.html',
        resolve: {
          user: function($http, $route){
            return $http.get('http://0.0.0.0:8882/rest/user/' + $route.current.params.id)
          }
        }
      })
    });
