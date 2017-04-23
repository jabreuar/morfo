angular.module('morfo.calendar.services', [])

.factory('CalendarService', ['$http', function ($http) {
   return {
    getSchedule: function(){
      return $http.get("http://localhost:10816/api/values/");
    }
  };
}]);