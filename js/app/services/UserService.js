function UserService($http) {
  this.getUser = function(id) {
    var user = $http.get('http://jsonplaceholder.typicode.com/users/' + id);
    return user;
  };
}

angular
  .module('app')
  .service('UserService', UserService);
