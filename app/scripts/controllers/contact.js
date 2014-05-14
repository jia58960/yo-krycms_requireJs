define(['controllers/controllers', 'services/contact_service'],
 function(controllers) {
  controllers.controller('contactListCtrl',['$scope','contactFactory', function($scope,contactFactory){
    $scope.contacts;
    getContacts();

    function getContacts() {
        contactFactory.getContacts()
            .success(function (contacts) {
                $scope.contacts = contacts;
            })
            .error(function (error) {
                $scope.status = 'Unable to load contacts data: ' + error.message;
            });
    }

  }])
  .controller('contactDetailCtrl',['$scope',,'contactFactory', '$modal', '$log', function($scope,contactFactory,$modal, $log){
        $scope.contacts;
        $scope.contact={};
        
        getContacts();
        getContact($stateParams.contactId);

        function getContacts() {
            contactFactory.getContacts()
                .success(function (contacts) {
                    $scope.contacts = contacts;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load contacts data: ' + error.message;
                });
        }

        function getContact(contactId){
            contactFactory.getContact(contactId)
                .success(function (contact) {
                    $scope.contact = contact;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load contact data: ' + error.message;
                });
        }

        $scope.updateContact = function (contact) {

            var data = {
                contact:contact
            };
            contactFactory.updateContact(contact.contactId,data)   
            .success(function () {
                $scope.status = 'Updated contact! Refreshing contact list.';
            })
            .error(function (error) {
                $scope.status = 'Unable to update contact: ' + error.message;
            });
        };

    }])
 .controller('buzContactAddCtrl',['$scope','contactFactory', function($scope,contactFactory){
    $scope.contact={};
    $scope.contacts;

    $scope.insertContact = function(contact) {
        var data = {
            contact:contact
        };
         contactFactory.insertContact(data)
        .success(function () {
            $scope.status = 'Inserted Contact! Refreshing BAnk list.';
            $scope.contacts.push(contact);
        })
        .error(function(error) {
            $scope.status = 'Unable to insert contact: ' + error.message;
        });
    }

 }])
});