'use strict';

// Declare app level module which depends on views, and components
angular.module('morfo', ['ngRoute','morfo.calendar','morfo.login','morfo.version']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/views/calendar'});
}]);
