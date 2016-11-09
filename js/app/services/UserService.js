function UserService($http){
  this.getUser = function(user_name){
    return $http.get('/user/' + user_name);
  }
}

angular
  .module('app')
  .service('UserService', UserService);