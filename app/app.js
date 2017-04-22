'use strict';

// Declare app level module which depends on views, and components
angular.module('morfo', ['ngRoute','ui.bootstrap','morfo.calendar','morfo.login','morfo.version', 'morfo.school']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/views/calendar'});
}]);
