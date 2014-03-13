'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('UsersController', ['$scope', '$http', function($scope, $http) {
    $http.get('http://10.80.81.67:8080/rest/resources/users').
      success(function(data) {
        $scope.users = data;
      });
  }]);