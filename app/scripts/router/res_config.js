define(['app','controllers/resource'], function(app) {
  return app.config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider,   $urlRouterProvider) {
                $stateProvider
                    //注册资源路由
                    .state('home.index.module.res_reg', {
                        url: '/res_reg',
                        views:{
                            'content@home.index':{
                                templateUrl: 'views/res_config/res_reg.html',
                                controller: 'resRegCtrl'
                            }
                        }
                    })

                    //编辑资源路由
                    .state('home.index.module.res_edit',{
                        url: '/res_edit',
                        views: {
                            'content@home.index':{
                                templateUrl: 'views/res_config/res_edit.html',
                                controller: 'resEditCtrl'
                            }
                        }
                    })
            }]);
});
