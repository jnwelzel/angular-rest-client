'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('UsersController', ['$scope', '$http', function($scope, $http) {
    $http.get('http://localhost:8080/rest/resources/users').
      success(function(data) {
        $scope.users = data;
      });
  }])
  .controller('NewUserController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
    $scope.master = {};

    $scope.create = function(user) {
      $scope.master = angular.copy(user);
      $http.post('http://localhost:8080/rest/resources/users', $scope.master).
        success(function() {
          $window.alert('New user created successfully.');
          $location.path('/users');
        }).
        error(function() {
          $window.alert('Error.');
        });
    }
  }])
  .controller('UserController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('http://localhost:8080/rest/resources/users/' + $routeParams.id).
      success(function(data) {
        $scope.user = data;
      });
  }]);