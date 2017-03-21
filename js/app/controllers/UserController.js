function UserController(userResp) {
  this.userInfo = userResp.data;
}

angular
	.module('app')
	.controller('UserController', UserController);