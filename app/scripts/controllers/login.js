define(['controllers/controllers', 'services/login_service','services/websocket','services/websocket/login'],
 function(controllers) {
  controllers.controller('loginCtrl', function ($scope,loginFactory,sWSocket,toaster,$location,$timeout,ws) {
  	console.log("loginCtrl");

	$scope.status;

	var appId = 'heartBeat';
	var methodId = 'heartBeat';
	  var callback = function(evendata){
		  console.log("evendatadddddddddddd:",evendata);
		  $scope.menu = evendata;
		  $scope.$apply();
		  console.log($scope.menu);
	//		        console.log("scope:",$scope);
	  }
	  var callback1 =  function(evendata){
		  console.log("aaaaaaaaaaaaa:",evendata);
		  $scope.menu = evendata;
		  $scope.$apply();
		  console.log($scope.menu);
//		        console.log("scope:",$scope);
	  }


  $scope.doLogin = function(user){
    loginFactory.doLogin(user)
      .success(function (success) {
          if(success.resultCode == 200){

            $scope.status = '登录成功';
            console.log("doLogin");
            $location.path('/home');

	        sWSocket.register(appId,methodId,callback);

	          $timeout(function () {
		          console.log("unregister");
		          sWSocket.unregister(appId,methodId,callback);
	          }, 8000);

	          sWSocket.register(appId,methodId, callback1);
	          $timeout(function () {
		          console.log("unregister callback1");
		          sWSocket.unregister(appId,methodId,callback1);
	          }, 3000);
	          var content2 = {
		          userName:'hmm',
		          userPassword:'111'
	          };
	          sWSocket.send('login', 'doLogin', content2);

          }else if (success.resultCode == 102) {
	          toaster.pop('error', "操作失败", success.resultReason);
	          $scope.status = success.resultReason;
          };

      })
      .error(function (error) {
          $scope.status = '登录失败: ' + error.message;
//          console.log($scope.status);
      });
  };

  $scope.logout = function(){
      loginFactory.logout()
        .success(function () {
            $scope.status = '退出成功';
            console.log("logout");
        })
        .error(function (error) {
            $scope.status = '退出失败: ' + error.message;
        });
  };
  //注销scope时注销方法
  $scope.$on("$destroy",function(){
	  console.log("on-destroy");
	  sWSocket.unregister(appId,methodId,callback);
  });


  $scope.$watch(
	  function () {
		  return sWSocket.data;
	  },
	  function (value) {
		  if (value) {
			  console.log("watch");
			  $scope.data = sWSocket.data;
		  }
	  }
  );

  });
});