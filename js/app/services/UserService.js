function UserService($http) {
  this.getUser = function(name) {
    return $http.get('http://localhost:8882/rest/user/' + name);
  };
}

angular
  .module('app')
  .service('UserService', UserService);