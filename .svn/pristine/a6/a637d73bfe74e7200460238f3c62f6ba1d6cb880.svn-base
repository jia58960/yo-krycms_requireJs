define(['app'], function (app) {
    return app.config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider

                    //客户管理页
                    .state('home.index.module.client_page', {
                        url: '/client_page',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/client_manage/client_page.html',
                                controller: 'projectListCtrl'
                            }
                        }
                    })

                    //以下页面为DEMO页面


                    //客户项目列表页
                    .state('home.index.module.clientprolist_page', {
                        url: '/clientprolist_page',
                        views: {
                            'content@home.index': {
                                templateUrl: 'views/client_manage/pages/clientprolist_page.html'
                            }
                        }
                    })
                    .state('home.index.module.clientprolist_page.ofen', {
                        url: '/ofen',
                        views: {
                            'client@home.index.module.clientprolist_page': {
                                templateUrl: 'views/client_manage/pages/clientprolist_ofen.html'
                            }
                        }
                    })
                    .state('home.index.module.clientprolist_page.prolist', {
                        url: '/prolist',
                        views: {
                            'client@home.index.module.clientprolist_page': {
                                templateUrl: 'views/client_manage/pages/clientprolist.html'
                            }
                        }
                    })
                    //过程管理列表页
                    .state('home.index.module.processlist_page', {
                        url: '/processlist_page',
                        views: {
                            'content@home.index': {
                                templateUrl: 'views/client_manage/pages/processlist_page.html'
                            }
                        }
                        //controller: 'resConfigCtrl'
                    })
                    //过程管理详细页
                    .state('home.index.module.processdetail_page', {
                        url: '/processdetail_page',
                        views: {
                            'content@home.index': {
                                templateUrl: 'views/client_manage/pages/processdetail_page.html'
                            }
                        }
                    })
                    //新增过程管理页
                    .state('home.index.module.processAdd', {
                        url: '/processAdd',
                        views: {
                            'content@home.index': {
                                templateUrl: 'views/client_manage/pages/processAdd.html'
                            }
                        }
                    })
                    //新增过程管理页
                    .state('home.index.module.clientAdd', {
                        url: '/clientAdd',
                        views: {
                            'content@home.index': {
                                templateUrl: 'views/client_manage/pages/clientAdd.html'
                            }
                        }
                    })
            }]);
});
