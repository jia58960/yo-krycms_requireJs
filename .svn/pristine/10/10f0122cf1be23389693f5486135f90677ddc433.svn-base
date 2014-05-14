define(['app'], function (app) {
    return app.config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider

                    //银行管理首页
                    .state('home.index.module.bank_page', {
                        url: '/bank_page',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/bank_manage/bank_page.html'
                            }
                        }
                    })

                    //授信进度DEMO页
                    .state('home.index.module.credit_index', {
                        url: '/credit_index',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/bank_manage/pages/credit_index.html'
                            }
                        }
                    })
                    .state('home.index.module.credit_index.add', {
                        url: '/add',
                        views:{
                            'content@home.index':{
                                templateUrl: 'views/bank_manage/pages/credit_add.html'
                            }
                        }
                    })
                    .state('home.index.module.credit_index.detail', {
                        url: '/detail',
                        views:{
                            'content@home.index':{
                                templateUrl: 'views/bank_manage/pages/credit_detail.html',
                                controller: 'buzGroupSetCtrl'
                            }
                        }
                    })

                    //新增银行表单页DEMO页
                    .state('home.index.module.bankAdd', {
                        url: '/bankAdd',
                        views:{
                            'content@home.index':{
                                templateUrl: 'views/bank_manage/pages/bankAdd.html',
                                controller: 'bankAddCtrl'
                            }
                        }

                    })

					//银行联系人总览DEMO页
					.state('home.index.module.bankContact', {
						url: '/bankContact',
                        views:{
                            'content@home.index':{
                                templateUrl: 'views/bank_manage/pages/bankContact.html',
                                controller: 'bankContactCtrl'
                            }
                        }

					})

                    //新增银行联系人DEMO
                    .state('home.index.module.contactAdd', {
                        url: '/contactAdd',
                        views:{
                            'content@home.index':{
                                templateUrl: 'views/bank_manage/pages/contactAdd.html',
                                controller: 'contactAddCtrl'
                            }
                        }

                    })

                    //新增相关联系人DEMO
                    .state('home.index.module.contactRelateAdd', {
                        url: '/contactRelateAdd',
                        views:{
                            'content@home.index':{
                                templateUrl: 'views/bank_manage/pages/contactRelateAdd.html',
                                controller: 'contactRelateAddCtrl'
                            }
                        }

                    })

                    //新增营销记录DEMO
					.state('home.index.module.marketAdd', {
						url: '/marketAdd',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/bank_manage/pages/marketAdd.html',
                                controller: 'marketAddCtrl'
                            }
                        }

					})
            }]);
});