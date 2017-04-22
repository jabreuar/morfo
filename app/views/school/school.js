'use strict';

angular.module('morfo.school', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/school', {
    templateUrl: 'views/school/schoolView.html',
    controller: 'schoolctrl'
  });
}])

.controller('schoolctrl', [function() {

}]);