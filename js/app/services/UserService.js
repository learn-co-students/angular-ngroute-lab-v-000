function UserService($http) {
    this.getUser = function (name) {
        return $http.get('/user/' + name);
    };
}

angular.module('app').service('userService', UserService);