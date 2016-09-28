angular
  .module('app', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user/:id', {
        // Configuration Object
        // View Configuration
        templateUrl: 'views/user.html',
        // Controller Configuration
        controller: 'UserController as user',
        resolve: {
          user: function ($http, $route) {
            return $http.get('http://0.0.0.0:8882/rest/user/' + $route.current.params.id)
          }
        }
      });
  });
