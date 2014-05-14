
define(['services/services'],
  function(services) {

    services.factory('loginFactory', ['$http', function ($http) {

    // $http.defaults.useXDomain = true ;
     var url_prefix = 'http://10.188.199.4:8080/YIXUN_1.5_WEB/';
    var loginFactory = {};
    
    loginFactory.doLogin = function (user) {
       var path = url_prefix + 'login/doLogin';
        return $http.post(path,user);
    };

    loginFactory.logout = function () {
        var path = url_prefix + 'login/logout';
        return $http.post(path);
    };

    return loginFactory;
  }]);
});