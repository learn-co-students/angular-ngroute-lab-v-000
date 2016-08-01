function UserController(user) {
	var ctrl = this
	ctrl.user = user.data
	// this.getUser= function(id){
	// 	return $http.get('/user/' + id)
	// }
}

angular
	.module('app')
	.controller('UserController', UserController);
