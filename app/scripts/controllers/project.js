define(['controllers/controllers', 'services/client_service'],
    function (controllers) {
        controllers
            //客户管理
            .controller('client_manageCtrl', function ($scope, resourceFactory, $modal) {

            })
            .controller('projectListCtrl', function ($scope, clientFactory, resourceFactory, $modal) {
                $scope.status;
                $scope.groups;
                //mock data
                $scope.groups = [
                    {
                        groupName: '拓展部',
                        groupId: 11,
                        projects: [
                            {
                                projectId: 111,
                                projectName: '金光项目'
                            },
                            {
                                projectId: 112,
                                projectName: '上海江铜'
                            }
                        ],
                        managers: [
                            {
                                managerId:111,
                                managerName:'陈家奎'
                            },
                            {
                                managerId:112,
                                managerName:'陈忠涛'
                            }
                        ]
                    },
                    {
                        groupName: '融资租赁部',
                        groupId: 12,
                        projects: [
                            {
                                projectId: 111,
                                projectName: '金光项目'
                            },
                            {
                                projectId: 112,
                                projectName: '上海江铜'
                            }
                        ],
                        managers: [
                            {
                                managerId:111,
                                managerName:'陈家奎'
                            },
                            {
                                managerId:112,
                                managerName:'陈忠涛'
                            }
                        ]
                    }
                ];
//                getGroups();

//                $scope.menus;
//                listMenus(1);
//                console.log("clientManageCtrl");
//
//                function listMenus(resourceTypeId) {
//                    resourceFactory.listMenus(resourceTypeId)
//                        .success(function (menus) {
//                            $scope.menus = menus;
//                        })
//                        .error(function (error) {
//                            $scope.status = 'Unable to load Menus data: ' + error.message;
//                        });
//                }

                function getGroups() {
                    clientFactory.getGroups()
                        .success(function (groups) {
                            $scope.groups = groups;
                            for (var i = 0; i < groups.length; i++) {
                                console.log(groups[i]);
                                var groupId = groups[i].groupId;
                                console.log(groupId);
                                getGroupProjects(i, groupId);
                                getGroupMangers(i, groupId);
                            }
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to load groups data: ' + error.message;
                        });
                }

                function getGroupProjects(index, groupId) {
                    clientFactory.getGroupProjects(groupId)
                        .success(function (projects) {
                            $scope.groups[index].projects = projects;
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to load groups data: ' + error.message;
                        });
                }

                function getGroupMangers(index, groupId) {
                    clientFactory.getGroupMangers(groupId)
                        .success(function (managers) {
                            $scope.groups[index].managers = managers;
                        })
                        .error(function (error) {
                            $scope.status = 'Unable to load groups data: ' + error.message;
                        });
                }
            });
    });