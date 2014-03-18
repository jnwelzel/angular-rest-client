'use strict';

/* Services */

var user_rsrc = 'http://localhost:8080/rest/resources/users/:id';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource']).
  value('version', '0.1').
  factory('User', ['$resource', 
    function($resource) {
      return $resource(user_rsrc, {}, {
        find: {method: 'GET', params: {id: 'id'}},
        update: {method: 'PUT', params: {id: 'id'}}
      });
    }]);
