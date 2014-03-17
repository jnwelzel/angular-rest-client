'use strict';

var user_resource = 'http://localhost:8080/rest/resources/users/';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('UsersController', ['$scope', '$http', function($scope, $http, daService) {
    $http.get(user_resource).
      success(function(data) {
        $scope.users = data;
      });
    console.log(daService.daThing);
  }])
  .controller('NewUserController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
    $scope.master = {};

    $scope.create = function(user) {
      $scope.master = angular.copy(user);
      $http.post(user_resource, $scope.master).
        success(function() {
          $window.alert('New user successfully created.');
          $location.path('/users');
        }).
        error(function() {
          $window.alert('Error.');
        });
    }
  }])
  .controller('UserController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get(user_resource + $routeParams.id).
      success(function(data) {
        $scope.user = data;
      });

      $scope.edit = function(user) {}

      $scope.delete = function(user) {}
  }])
  .controller('EditUserController', ['$scope', '$http', '$routeParams', '$window', '$location', function($scope, $http, $routeParams, $window, $location) {
    $http.get(user_resource + $routeParams.id).
      success(function(data) {
        $scope.user = data;
      });

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
      $http.put(user_resource, $scope.master).
        success(function() {
          $window.alert('User successfully edited.');
          $location.path('/users/' + user.id);
        }).
        error(function() {
          $window.alert('Error.');
        });
    }
  }]);