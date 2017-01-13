angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/user/:param', {
                templateUrl: 'views/user.html',
                controller: 'UserController as vm',
                resolve: {
                    user: function ($routeParams, UserService) {
                        console.log($routeParams);
                        return UserService.getUser($routeParams.param);
                    }
                }
            });
    });
