define(['controllers/controllers', 'services/empl_service'],
 function(controllers) {
  controllers.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
});
