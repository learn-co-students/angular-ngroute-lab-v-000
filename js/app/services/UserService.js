function UserService($http) {
    this.getUser = function (username) {
        return $http.get('http://0.0.0.0:8882/rest/user/' + username);
    };
}

angular.module('app').service('UserService', UserService);
