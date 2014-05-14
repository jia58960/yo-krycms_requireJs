
define(['services/services'],
  function(services) {

    services.factory('resourceFactory', ['$http', function ($http) {

    $http.defaults.useXDomain = true ;

//     var url_prefix = 'http://10.188.199.4:8080/YIXUN_1.5_WEB/';
//        var url_prefix = 'http://10.188.192.41:8080/';
     var url_prefix = 'http://10.188.192.200:8000/';
     var resourceUrl = 'resource'
      var resourceFactory = {};

    resourceFactory.listMenus = function (resourceTypeId) {
       // var path = url_prefix + 'resource/listMenus?resourceTypeId='+resourceTypeId;
        return $http.get(url_prefix + resourceUrl + '/menu');
    };
 
    resourceFactory.listResourcesByType = function (resourceTypeId) {
       var path = url_prefix + 'resource/listResourcesByType?resourceTypeId='+resourceTypeId;
        return $http.get(path);
    };

    resourceFactory.listSubResourcesByType = function (resourceId,resourceTypeId) {
       var path = url_prefix + 'resource/listSubResourcesByType?resourceId='+ resourceId + '&resourceTypeId='+resourceTypeId;
        return $http.get(path);
    };

    resourceFactory.getResources = function () {
        return $http.get(url_prefix + resourceUrl + '/all');
    };

    resourceFactory.getResource = function (resourceId) {
        return $http.get(url_prefix + resourceUrl + '/'+resourceId);
    };

    resourceFactory.insertResource = function (resource) {
        return $http.post(url_prefix + resourceUrl,resource);
    };

    resourceFactory.updateResource = function (resourceId,resource) {
        console.log("123123",resource);
        return $http.put(url_prefix + resourceUrl +'/'+resourceId,resource);
    };
    resourceFactory.deleteResource = function (resourceId) {
        return $http.delete(url_prefix + resourceUrl +'/'+resourceId);
    };

    return resourceFactory;
  }]);
});