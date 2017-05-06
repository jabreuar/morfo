'use strict';

angular.module('morfo.school', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/school', {
    templateUrl: 'views/school/schoolView.html',
    controller: 'schoolctrl'
  });
}])

.controller('schoolctrl', ['$scope', 'SchoolService', function($scope, SchoolService) {

  $scope.getAdressDetail = function(){
			SchoolService.getAddress($scope.postalcode).then(function(response){
          $scope.city = response.data.localidade;
				  $scope.state = response.data.uf;
					$scope.address = response.data.bairro;
			});
	}

	$scope.submitForm = function(isValid) {
		if (isValid) { 
			alert('our form is amazing');
		}
	};
}]);