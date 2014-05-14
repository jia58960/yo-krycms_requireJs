define(['app'], function (app) {
    return app.config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider

                    //我的任务（任务列表）
                    .state('home.index.module.task_list', {
                        url: '/task_list',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/task_manage/task_list.html'
                            }
                        }
                    })
                    //新增任务
                    .state('home.index.module.task_add', {
                        url: '/task_add',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/task_manage/task_add.html'
                            }
                        }
                    })
                    //任务详情
                    .state('home.index.module.task_inf', {
                        url: '/task_inf',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/task_manage/task_inf.html'
                            }
                        }
                    })
                    //新增任务回复
                    .state('home.index.module.tskReply_add', {
                        url: '/tskReply_add',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/task_manage/tskReply_add.html'
                            }
                        }
                    })
                    //新增任务进度汇报
                    .state('home.index.module.tskReport_add', {
                        url: '/tskReport_add',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/task_manage/tskReport_add.html'
                            }
                        }
                    })
            }]);
});