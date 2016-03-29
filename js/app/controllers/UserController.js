function UserController(user) {
  this.contact = user.data
}

angular
  .module('app')
  .controller('UserController', UserController);
