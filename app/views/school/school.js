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

	$scope.saveSchool = function() {

   /*{
    "cep": "98700001",
    "emailAlt" : "teste@gmail.com",
    "endereco" : "1",
    "nnCategoria" : "1",
    "nnEmail": "teste@gmail.com",
    "nnNivel" : "1",
    "nnNome": "ESCOLA ESTADUAL MENINO FROM HELL",
    "nnSenha": "123456",
    "telefone" : "99999999"
   }*/
     
    var data = { 
			nnSenha: $scope.password, 
			nnNome: $scope.schoolname, 
			//city: $scope.city, 
			//state: $scope.state, 
			endereco: $scope.address, 
			nnEmail: $scope.email, 
			cep: $scope.postalcode,
			telefone: $scope.phoneNumber,
			emailAlt: $scope.secondaryEmail,
			nnNivel : "1",
			nnCategoria : $scope.category
		}

    SchoolService.saveNewSchool(data).then(function(response){
         if(response.status == "200"){
					 alert("Cadastro Realizado com Sucesso!");
				 }
		});
	};
}]);