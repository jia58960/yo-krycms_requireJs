
define(['controllers/controllers', 'services/resource_service'],
  function(controllers) {
  controllers.controller('resourceCtrl',  ['$scope', '$stateParams', 'resourceFactory', 
        function ($scope, $stateParams, resourceFactory) {
  	console.log("resourceCtrl");
	
	$scope.status;
    $scope.resources;
    $scope.resource;

    getResource($stateParams.resourceId);
    getResources();

 	function getResource(resourceId) {

        resourceFactory.getResource(resourceId)
        .success(function (resource) {
            $scope.resource = resource;
            console.log("getResource");
        })
        .error(function (error) {
            $scope.status = 'Unable to load Resource data: ' + error.message;
        });
    }

    function getResources() {
        resourceFactory.getResources()
            .success(function (resources) {
                $scope.resources = resources;
                console.log("getResources");
            })
            .error(function (error) {
                $scope.status = 'Unable to load Resources data: ' + error.message;
            });
    }

    $scope.master = {};

    $scope.updateResource = function (resource) {
        $scope.master = angular.copy(resource);
        resourceFactory.updateResource(resource)   
        .success(function () {
            $scope.status = 'Updated Resource! Refreshing customer list.';
        })
        .error(function (error) {
            $scope.status = 'Unable to update Resource: ' + error.message;
        });
    };

    $scope.insertResource = function (resource) {
        resourceFactory.insertResource(resource)
        .success(function () {
            $scope.status = 'Inserted Resource! Refreshing customer list.';
            $scope.resources.push(resource);
        })
        .error(function(error) {
            $scope.status = 'Unable to insert Resource: ' + error.message;
        });
    };

    $scope.isUnchanged = function(resource){
     return angular.equals(resource, $scope.master);
    };


    }]);
});
	