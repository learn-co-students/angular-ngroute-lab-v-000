angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider) {
    	$routeProvider
    			.when('/user/:id', {
    				templateUrl: 'js/app/views/user.html',    				
    				controller: 'UserController as vm',
    				resolve: {
            	user: function ($route, UserService) {            		           		
               	return UserService.getUser($route.current.params.id);
            	}
          	}
    		});    	
    });