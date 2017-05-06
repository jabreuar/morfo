'use strict';

// Declare app level module which depends on views, and components
angular.module('morfo', ['ngRoute', 'ngMessages', 'ui.bootstrap','morfo.calendar', 'morfo.login','morfo.version', 'morfo.school', 'ui.calendar', 'morfo.calendar.services', 'morfo.school.services']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/views/calendar'});
}]);
