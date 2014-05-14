define(['services/services'],
    function (services) {
        services.factory('customerFactory', ['$http', function ($http) {

//            var urlBase = 'http://10.188.199.4:8080/YIXUN_1.5_WEB';
//            var urlBase = 'http://10.188.192.41:8080';
            var urlBase = 'http://10.188.192.200:8000';
            var customerFactory = {};
            var customerUrl = '/customer';

            //获取所有客户
            customerFactory.getAllCustomers = function () {
                return $http.get(urlBase + customerUrl + '/all', {cache: true});
            };

            return customerFactory;
        }]);
    });