angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider) {
    	$routeProvider
    		.when('/user/:name', {
    			templateURL: 'views/user.html',
    			controller: 'UserController',
    			resolve: {
    				user: function($routeParams, UserService) {
    					return UserService.getUser($routeParams.name);
    				}
    			}
    		});
    });