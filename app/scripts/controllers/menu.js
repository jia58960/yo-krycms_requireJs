
define(['controllers/controllers', 'services/resource_service'],
  function(controllers) {
  controllers.controller('menuCtrl', ['$scope', 'resourceFactory','sWSocket', function ($scope, resourceFactory,sWSocket) {
  	//console.log("menuCtrl");

  	$scope.status;
    $scope.menus;
	var appId = 'heartBeat';
	var methodId = 'heartBeat';
  	listMenus(1);


    function listMenus(resourceTypeId) {
        resourceFactory.listMenus(resourceTypeId)
            .success(function (menus) {
                $scope.menus = menus;
                //console.log(menus);

//		        sWSocket.register(appId, methodId, function(evendata){
//			        console.log("dddddd:",evendata);
//		        });
//		        console.log("menu-register");
//		        var content2 = {
//			        userName:'hmm',
//			        userPassword:'111'
//		        };
//		        sWSocket.send('login', 'doLogin', content2);

	        })
            .error(function (error) {
                $scope.status = 'Unable to load Menus data: ' + error.message;
            });
    }

  //注销scope时注销方法
  $scope.$on("$destroy",function(){
	  sWSocket.unregister(appId,methodId);
  });

  }])
  .controller('submenuCtrl',['$scope', '$stateParams', 'resourceFactory', function ($scope, $stateParams, resourceFactory){

    //console.log($stateParams);

    $scope.status;
    $scope.submenus;

    getSubResourcesByType($stateParams.res,1);

    function getSubResourcesByType (resourceId,resourceTypeId){
       resourceFactory.listSubResourcesByType(resourceId,resourceTypeId)
            .success(function (submenus) {
                $scope.submenus = submenus;
            })
            .error(function (error) {
                $scope.status = 'Unable to load Menus data: ' + error.message;
            });
    }
  }]);
});