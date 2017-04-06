function UserService() {
  this.getUser = function(name) {
    return $http.get('/user/' + name);
  }
}

angular 
  .module('app')
  .controller('UserService', UserService)