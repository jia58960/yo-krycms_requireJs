define(['services/services'],
    function (services) {
        services.factory('contactFactory', ['$http', function ($http) {

//            var urlBase = 'http://10.188.199.4:8080/YIXUN_1.5_WEB';
//            var urlBase = 'http://10.188.192.41:8080';
            var urlBase = 'http://10.188.192.200:8000';
            var contactFactory = {};
            var contactUrl = '/contact';

            //判断是否已存在联系人data = {contactName:string,contactMobilePhone:string}
            contactFactory.isExists = function(data){
                return $http.post(urlBase + contactUrl + '/isExists/',data);
            };

            //添加联系人data ={contact:formObject,contactMoreInfoText:string}
            contactFactory.addContact = function(data){
                return $http.post(urlBase + contactUrl + '/',data);
            };
            //删除联系人
            contactFactory.delContact = function(contactId){
                return $http.delete(urlBase + contactUrl + '/'+contactId);
            };
            //更新联系人
            contactFactory.updateContact = function(contactId,contact){
                return $http.put(urlBase + contactUrl + '/'+contactId,contact);
            };
            //获取指定联系人
            contactFactory.getContact = function (contactId) {
                return $http.get(urlBase + contactUrl + '/' + contactId, {cache: true});
            };
            //获取联系人的相关联系人
            contactFactory.getRelatedContacts = function (contactId) {
                return $http.get(urlBase + contactUrl + '/'+contactId+'/relatedContacts', {cache: true});
            };
            //获取所有联系人
            contactFactory.getContacts = function () {
                return $http.get(urlBase + contactUrl + '/all', {cache: true});
            };
            //获取银行联系人
            contactFactory.getBankContacts = function (bankId) {
                return $http.get(urlBase + contactUrl + '/bank/' + bankId, {cache: true});
            };
            //获取客户联系人
            contactFactory.getCustomerContacts = function (customerId) {
                return $http.get(urlBase + contactUrl + '/customer/' + customerId, {cache: true});
            };
            //为客户添加联系人关联data ={contact:formObject,customerPosition:formObject}
            contactFactory.addCustomerContactRelation = function (customerId,data) {
                return $http.get(urlBase + contactUrl + '/customer/' + customerId+'/customerPosition', data);
            };
            //添加银行联系人关联data ={contact:formObject,bankContactPosition:formObject,positionBankType:formObject}
            contactFactory.addBankContactRelation = function (bankId,data) {
                return $http.get(urlBase + contactUrl + '/bank/' + bankId+'/bankContactPosition/PositionBankType', data);
            };
            //添加银行职位分支行类型
            contactFactory.addPositionBankType = function (positionBankType ) {
                return $http.post(urlBase + contactUrl + '/positionBankType' , positionBankType);
            };
            //添加银行联系人职位
            contactFactory.addBankContactPosition = function (bankContactPosition ) {
                return $http.post(urlBase + contactUrl + '/bankContactPosition' , bankContactPosition );
            };
            //获取所有银行联系人职位
            contactFactory.getAllBankContactPosition = function () {
                return $http.get(urlBase + contactUrl + '/position', {cache: true});
            };
            //获取所有银行职位分支行类型
            contactFactory.getAllPositionBankType = function(){
                return $http.get(urlBase + contactUrl + '/positionBankType', {cache: true});
            };

            //添加客户联系人data ={contact:formObject,customerPosition:formObject,contactMoreInfoText:string}
            contactFactory.addCustomerContact = function(customerId,data){
                return $http.post(urlBase + contactUrl + '/customer/'+customerId+'/customerPosition/',data );
            };
            //添加银行联系人data ={contact:formObject,bankContactPosition:formObject,positionBankType:formObject,contactMoreInfoText:string}
            contactFactory.addBankContact = function(bankId,data){
                return $http.post(urlBase + contactUrl + '/bank/'+bankId+'/bankContactPosition/positionBankType', data);
            };
            //联系人生日提醒,提前三天提醒
            contactFactory.remindContact = function(){
                return $http.get(urlBase + contactUrl + '/birthday', {cache: true});
            };
            //根据银行职位分行类别获取其相关的所有银行职位
            contactFactory.getAllBankContactPositionByPositionBankTypeId = function(positionBankTypeId){
                return $http.get(urlBase + contactUrl + '/positionBankType/'+positionBankTypeId, {cache: true});
            };

            return contactFactory;
        }]);
    });