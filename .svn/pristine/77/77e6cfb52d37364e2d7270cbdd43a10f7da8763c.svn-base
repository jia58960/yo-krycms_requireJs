
define(['controllers/controllers', 'services/user_service','services/role_service'],
  function(controllers) {
  controllers.controller('user_roleCtrl',  ['$scope', '$stateParams', 'userFactory', 'permissionFactory',
        function ($scope, $stateParams, userFactory,permissionFactory) {

             $scope.users;
            $scope.user_selected = [];
            $scope.role_selected = [];

            init();

            function init () {
                getUsers();
                getRoles();
            }    

            function getUsers() {
            userFactory.getUsers()
                .success(function (users) {
                    $scope.users = users;
                    console.log(users);
                })
                .error(function (error) {
                    $scope.status = 'Unable to load Users data: ' + error.message;
                });
            }

            function getRoles() {
                permissionFactory.listAllRoles()
                    .success(function (roles) {
                        $scope.roles = roles;
                        console.log(roles);
                    })
                    .error(function (error) {
                        $scope.status = 'Unable to load roles data: ' + error.message;
                    });
            }

            $scope.addRolesToUsers = function(){
                console.log($scope.user_selected);
                console.log($scope.role_selected);
                var data = {
                  userId:$scope.user_selected,
                  roleId:$scope.role_selected
                };

                permissionFactory.addRolesToUsers(data)
                .success(function () {
                    $scope.status ="addRolesToUsers success";
                })
                .error(function (error) {
                    $scope.status = 'Unable to addRolesToUsers: ' + error.message;
                });
            }

        }])
   .controller('userCtrl',  ['$scope', '$stateParams', 'userFactory', 
        function ($scope, $stateParams, userFactory) {
  	console.log("userCtrl");
	
	$scope.status;
    $scope.users;
    $scope.user;

    //getUser($stateParams.userId);
	getUsers();

 	function getUser(userId) {

        userFactory.getUser(userId)
        .success(function (user) {
            $scope.user = user;
            
        })
        .error(function (error) {
            $scope.status = 'Unable to load User data: ' + error.message;
        });
    }
    function getUsers() {
        userFactory.getUsers()
            .success(function (users) {
                $scope.users = users;
                console.log(users);
            })
            .error(function (error) {
                $scope.status = 'Unable to load Users data: ' + error.message;
            });
    }

    $scope.master = {};

    $scope.updateUser = function (user) {
        $scope.master = angular.copy(user);     
        userFactory.updateUser(user)   
        .success(function () {
            $scope.status = 'Updated User! ';
        })
        .error(function (error) {
            $scope.status = 'Unable to update User: ' + error.message;
        });
    };

    $scope.insertUser = function (user) {
        userFactory.insertUser(user)
        .success(function () {
            $scope.status = 'Inserted User! Refreshing customer list.';
            $scope.Users.push(user);
        })
        .error(function(error) {
            $scope.status = 'Unable to insert User: ' + error.message;
        });
    };

    $scope.isUnchanged = function(user){
     return angular.equals(user, $scope.master);
    };
}]);
});	