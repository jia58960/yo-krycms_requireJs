define(['directives/module_mobilePhoneUnique','services/contact_service'],
    function(directives) {
        directives.directive('mobilePhoneUnique', ['contactFactory',function (contactFactory) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, element) {
                    element.bind('blur', function(eventObj) {
                        var data = {
                            contact:{
                                contactName:document.getElementById('contactName').value,
                                contactMobilePhone:eventObj.target.value
                            }
                        };
                        if(data.contact.contactMobilePhone=='')return;
                        contactFactory.isExists(data)
                            .success(function (message) {
                                console.log(message);
                                if(message.resultCode==102){
                                    scope.numberUnique = true;
                                }else{
                                    scope.numberUnique = false;
                                }
                            })
                            .error(function (error) {
                                scope.status = 'Unable to contacts : ' + error.message;
                            });
                    });
                }
            }
        }]);
    });
