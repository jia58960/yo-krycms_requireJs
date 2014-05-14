define(['app'], function (app) {
    return app.config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider

                    //业务组设置路由
                    .state('home.index.module.buz_group_manage', {
                        url: '/buz_group_manage',
                        views:{
                            'content@home.index':{
                                templateUrl: 'views/buz_manage/buz_group_manage.html'
                            }
                        }
                    })
                    .state('home.index.module.buz_group_manage.list', {
                        url: '/list',
                        templateUrl: 'views/buz_manage/buz_group_list.html',
                        controller: 'buzGroupListCtrl'
                    })
                    .state('home.index.module.buz_group_manage.add', {
                        url: '/add',
                        templateUrl: 'views/buz_manage/buz_group_add.html',
                        controller: 'buzGroupAddCtrl'
                    })
                    .state('home.index.module.buz_group_manage.detail', {
                        url: '/detail',
                        templateUrl: 'views/buz_manage/buz_group_view.html',
                        controller: 'buzGroupSetCtrl'
                    })
                    
                    //项目（组）设置路由
                    .state('home.index.module.pro_group_manage', {
                        url: '/pro_group_manage',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/buz_manage/pro_group_manage.html'
                            }
                        }
                    })
                    .state('home.index.module.pro_group_manage.add', {
                        url: '/add',
                        templateUrl: 'views/buz_manage/pro_group_add.html'

                    })
                    .state('home.index.module.pro_group_manage.detail', {
                        url: '/detail',
                        templateUrl: 'views/buz_manage/pro_group_view.html'
                    })
            }]);
});
