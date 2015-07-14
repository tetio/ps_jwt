(function() {
  'use strict';

  angular.module('psJwtApp')
    .controller('RegisterCtrl',
                  RegisterCtrl);

    function RegisterCtrl($scope, $http) {
      var url = "/";
      var user = {};
      $scope.submit = function() {
        $http.post(url, user)
        .success(function(res) {
          console.log("good");
        })
        .error(function(err) {
          console.log("bad");
        })
      }
    }
}());
