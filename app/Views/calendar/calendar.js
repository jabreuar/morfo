'use strict';

angular.module('morfo.calendar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/calendar', {
    templateUrl: 'views/calendar/CalendarView.html',
    controller: 'CalendarCtrl'
  });
}])

.controller('CalendarCtrl', [function() {

}]);