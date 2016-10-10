function UserService($http) {
    this.getUser = function(id) {
        var user = $http.get('http://0.0.0.0:8882/rest/user/' + id);
        return user;
    }
}

angular
    .module('app')
    .service('UserService', UserService);
