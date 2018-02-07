function UserController(user) {
  this.data = user.data
}

function UserService($http){
  this.getUser = function(id){
    return $http.get('/user/' + id)
  }
}

angular
	.module('app')
	.controller('UserController', UserController)
  .service('UserService', UserService)
