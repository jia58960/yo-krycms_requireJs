
define(['services/services'],
  function(services) {

    services.factory('userFactory', ['$http', function ($http) {

        // $http.defaults.useXDomain = true ;
        var urlBase = 'http://10.188.192.200:8080/user';
        var userFactory = {};

        userFactory.getUsers = function () {
        return $http.get(urlBase+'/all');
        };

        userFactory.getUser = function (userId) {
        return $http.get(urlBase+'/'+userId);
        };

        userFactory.insertUser = function (user) {
        return $http.post(urlBase,user);
        };

        userFactory.updateUser = function (user) {
        return $http.put(urlBase+'/'+user.userId,user);
        };

        userFactory.onlineSize = function () {
        return $http.get(urlBase+'/onlineSize');
        };

        userFactory.onlines = function () {   
        return $http.get(urlBase+'/onlines');
        };

        return userFactory;
    }]);

  });