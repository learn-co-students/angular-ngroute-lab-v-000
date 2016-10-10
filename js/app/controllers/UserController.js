function UserController(user) {
  var ctrl = this;
  debugger;
  ctrl.user = user.data;
}

angular
  .module('app')
  .controller('UserController', UserController);