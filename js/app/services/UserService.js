function UserService($http) {
  this.getUser = function(name) {
    debugger
    return $http.get('http://0.0.0.0:8882/rest/user/' + name)
  }
}

angular
  .module('app')
  .service('UserService', UserService);