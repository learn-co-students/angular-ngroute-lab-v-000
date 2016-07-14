angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/user/:name', {
                templateUrl: 'views/user.html', 
                controller: 'UserController as user',
                resolve: {
                    user: function(UserService, $route) {
                        return UserService.getUser($route.current.params.name);
                    }
                }
            });
    });