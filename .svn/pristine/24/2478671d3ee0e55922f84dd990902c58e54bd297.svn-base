define(['app'], function(app) {
  return app.config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
        $stateProvider

           //系统设置首页路由
            .state('home.index.module.sys_config',{
                url: '/sys_config',
                views:{
                    'content@home.index':{
                        templateUrl: 'views/sys_config/sys_config.html'
                        //controller:'roleCtrl'
                    }
                }
            })

          //角色设置路由
          .state('home.index.module.set_role', {
            url: '/set_role',
            views:{
                'content@home.index':{
                    templateUrl: 'views/sys_config/set_role.html',
                    controller:'roleCtrl'
                }
            }
          })
          .state('home.index.module.set_role.detail', {
            url: '/detail/:roleId',
            templateUrl: 'views/sys_config/role_info.html',
            controller: 'roleDetailCtrl'
          })  
          .state('home.index.module.set_role.add', {
            url: '/add',
            templateUrl: 'views/sys_config/role_add.html',
            controller:'roleAddCtrl'
          })

          //角色权限设置路由
          .state('home.index.module.set_pertorole',{
          	url:'/set_pertorole',
          	views: {
                'content@home.index':{
                    templateUrl: 'views/sys_config/set_pertorole.html',
                    controller: 'per_roleCtrl'
                }
            }
          })

          //用户角色设置路由
          .state('home.index.module.set_usertorole',{
          	url:'/set_usertorole',
            views: {
                'content@home.index':{
                    templateUrl: 'views/sys_config/set_usertorole.html',
                    controller: 'user_roleCtrl'
                }
            }
          })

          //用户设置路由
          .state('home.index.module.set_user', {
            url: '/set_user',
            views:{
                'content@home.index':{
                    templateUrl: 'views/sys_config/set_user.html',
                    controller:'DeptCtrl'
                }
            }
          })
          .state('home.index.module.set_user.add', {
            url: '/add',
            templateUrl: 'views/sys_config/user_add.html',
            controller:'employeeAddCtrl'
          })
          .state('home.index.module.set_user.userlist', {
            url: '/deptId/:deptId',
            templateUrl: 'views/sys_config/user_list.html',
            controller: 'employeeCtrl'
          })
          .state('home.index.module.set_user.edit', {
            url: '/edit/employeeId/:employeeId',
            templateUrl: 'views/sys_config/user_info.html',
            controller:'employeeUpdateCtrl'
          })
           .state('home.index.module.set_user.role', {
            url: '/deptId/:deptId',
            templateUrl: 'views/sys_config/user_rolelist.html',
            controller: 'roleCtrl'
          })

          //部门设置路由
          .state('home.index.module.set_dept', {
            url: '/set_dept',
            views: {
                'content@home.index': {
                    templateUrl: 'views/sys_config/set_dept.html',
                    controller:'DeptCtrl'
                }
            }
          })
          .state('home.index.module.set_dept.add', {
            url: '/add',
            templateUrl: 'views/sys_config/dept_add.html',
            controller:'DeptAddCtrl'
          })
          .state('home.index.module.set_dept.detail', {
            url: '/detail/:deptId',
            templateUrl: 'views/sys_config/dept_info.html',
            controller: 'emplCtrl'
          })         
      }]);
});