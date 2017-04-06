function UserController(user) {
	// var ctrl = this;
	this.information = user.data;
	// console.log(this.user.email);
}

angular
	.module('app')
	.controller('UserController', UserController);
