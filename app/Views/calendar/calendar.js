'use strict';

angular.module('morfo.calendar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/calendar', {
    templateUrl: 'views/calendar/CalendarView.html',
    controller: 'CalendarCtrl'
  });
}])

.controller('CalendarCtrl', ['$scope', 'CalendarService', function($scope, CalendarService) {
    
    CalendarService.getSchedule()
      .success(function(shedule) {
        
      })
      .finally(function() {
        
      });

    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
}]);