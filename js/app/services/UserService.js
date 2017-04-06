function UserService($http) {
    this.getUser = function(name) {
        return $http.get('http://0.0.0.0:8882/user/' + name);
    };
}