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
    }
  };
}]);