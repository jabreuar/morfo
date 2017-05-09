angular.module('morfo.school.services', [])

.factory('SchoolService', ['$http', function ($http) {
   return {
    getAddress: function(postalCode) {

return $http({method: 'GET', url: 'https://viacep.com.br/ws/'+ postalCode + '/json/'}).
        then(function(response) {
            return response;
        }, function(response) {
            alert('Ocorreu um erro ao obter o cep');
      });
    },
   saveNewSchool: function(data){
       var req = {
            method: 'POST',
            url: 'http://morfo.cloudapp.net:8080/morfologia/api/v1/instituicoes',
            headers: {
            'Content-Type': "application/json"
            },
            data: JSON.stringify(data)
        }

       return $http(req).then(function(response){
            return response;
        }, function(){

        });
   }
  };
}]);