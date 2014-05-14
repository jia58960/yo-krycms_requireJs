define(['controllers/controllers', 'services/client_service','services/dept_service'],
 function(controllers) {
  controllers.controller('buzGroupListCtrl',['$scope','clientFactory', function($scope,clientFactory){
    $scope.groups;
    getGroups();

    function getGroups() {
        clientFactory.getGroups()
            .success(function (groups) {
                $scope.groups = groups;
            })
            .error(function (error) {
                $scope.status = 'Unable to load groups data: ' + error.message;
            });
    }

  }])
  .controller('buzGroupSetCtrl',['$scope',,'clientFactory', '$modal', '$log', function($scope,clientFactory,$modal, $log){
        var deptMembers = [
            { text: '资金部', children: [
                { id: '2', text: '郑伟' },
                { id: '5', text: '黄志艳' }
            ]},
            { text: '业务部', children: [
                { id: '1', text: '陈家奎' },
                { id: '6', text: '陈忠涛' }
            ]},
            { text: '商务中心', children: [
                { id: '4', text: '魏美玲' },
                { id: '3', text: '贺洁' },
                { id: '9', text: '梁晓莹' }
            ]},
            { text: '办公室', children: [
                { id: '8', text: '刘艳静' },
                { id: '7', text: '秋歌' }
            ]}
        ];

        function findState(id) {
            for (var i=0; i<deptMembers.length; i++) {
                for (var j=0; j<deptMembers[i].children.length; j++) {
                    if (deptMembers[i].children[j].id == id) {
                        return deptMembers[i].children[j];
                    }
                }
            }
        }

        $scope.deptMember = ['ID','HI'];

        $scope.deptMeb = {
            query: function (query) {
                query.callback({ results: deptMembers });
            },
            initSelection: function(element, callback) {
                var val = $(element).select2('val');
                return callback(findState(val));
            }
        };
        $scope.groups;
        $scope.group={};
        
        getGroups();
        getGroup($stateParams.groupId);

        function getGroups() {
            clientFactory.getGroups()
                .success(function (groups) {
                    $scope.groups = groups;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load groups data: ' + error.message;
                });
        }

        function getGroup(groupId){
            clientFactory.getGroup(groupId)
                .success(function (group) {
                    $scope.group = group;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load group data: ' + error.message;
                });
        }

        $scope.updateGroup = function (group) {

            var data = {
                group:group,
                employeeIds:$scope.employeeIds
            };
            clientFactory.updateGroup(group.groupId,data)   
            .success(function () {
                $scope.status = 'Updated group! Refreshing customer list.';
            })
            .error(function (error) {
                $scope.status = 'Unable to update group: ' + error.message;
            });
        };

    }])
 .controller('buzGroupAddCtrl',['$scope','deptFactory','clientFactory', function($scope,deptFactory,clientFactory){

    $scope.depts;
    $scope.group={};
    $scope.groups;
    getDeptsAndEmployees();

    function getDeptsAndEmployees() {
        deptFactory.getDeptsAndEmployees()
            .success(function (depts) {
                $scope.depts = depts;
                $scope.employeeIds = [1];
                $scope.group.manageId = [1,7];
                console.log($scope.employeeIds);
            })
            .error(function (error) {
                $scope.status = 'Unable to load depts data: ' + error.message;
            });
    }

    $scope.show = function() {
        console.log($scope.employeeIds);
    }

    $scope.insertGroup = function(group) {
        var data = {
            group:group,
            employeeIds:$scope.employeeIds
        };
         clientFactory.insertGroup(data)
        .success(function () {
            $scope.status = 'Inserted Group! Refreshing Group list.';
            $scope.groups.push(group);
        })
        .error(function(error) {
            $scope.status = 'Unable to insert group: ' + error.message;
        });
    }

 }])
});
   