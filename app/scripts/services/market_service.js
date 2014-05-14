define(['services/services'],
    function (services) {
        services.factory('marketFactory', ['$http', function ($http) {

            var urlBase = 'http://10.188.199.4:8080/YIXUN_1.5_WEB';
//            var urlBase = 'http://10.188.192.41:8080';
            var marketFactory = {};
            var marketUrl = '/marketingPlan';

            //添加营销计划基本信息及其关联
            marketFactory.addMarketingPlanAll = function (data) {
                return $http.post(urlBase + marketUrl + '/all', data);
            };

            return marketFactory;
        }]);
    });