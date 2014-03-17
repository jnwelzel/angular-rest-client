'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {templateUrl: 'partials/users.html', controller: 'UsersController'});
  $routeProvider.when('/newUser', {templateUrl: 'partials/new_user.html', controller: 'NewUserController'});
  $routeProvider.when('/user/:id', {templateUrl: 'partials/user.html', controller: 'UserController'});
  $routeProvider.when('/user/edit/:id', {templateUrl: 'partials/edit_user.html', controller: 'EditUserController'});
  $routeProvider.when('/user/delete/:id', {controller: 'DeleteUserController'});
  $routeProvider.otherwise({redirectTo: '/users'});
}]);
