angular.module('app')
  .service('UserService', ['$http', function($http){
    this.getUser = function(name){
      return $http.get('http://0.0.0.0:8882/rest/user/' + name);      
    };
  }]);