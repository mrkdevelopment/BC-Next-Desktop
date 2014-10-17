app.service('Auth', ['$http', function($http){

    return {
        login: function(username, password){
            return $http.post(LOGIN_API, {username: username, password: password, tokenExpiryPeriod: 'long'})
        }
    }

}])