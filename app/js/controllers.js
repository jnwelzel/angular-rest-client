'use strict';

var user_resource = 'http://localhost:8080/rest/resources/users/';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('UsersController', ['$scope', 'User', function($scope, User) {
        $scope.users = User.query();
  }])
  .controller('NewUserController', ['$scope', '$window', '$location', 'User', function($scope, $window, $location, User) {
    $scope.master = {};

    $scope.create = function(user) {
      $scope.master = angular.copy(user);
      User.save(
        {}, $scope.master, 
        function() {
          $window.alert('New user successfully created.');
          $location.path('/users');
        },
        function() {
          $window.alert('Error.');
        }
      );
    }
  }])
  .controller('UserController', ['$scope', '$routeParams' ,'$window', '$location', 'User', function($scope, $routeParams, $window, $location, User) {
    $scope.user = User.find({id: $routeParams.id});

    $scope.delete = function(user) {
      var ok = confirm('Are you sure?');
      if (ok) {
        user.$delete(
          {id: user.id},
          function() {
            $window.alert('User successfully deleted.');
            $location.path('/users');
          },
          function() {
            $window.alert('Error.');
          }  
        );
      }
    };
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