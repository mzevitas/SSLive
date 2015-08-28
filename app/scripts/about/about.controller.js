;(function (){

  'use strict';

  angular.module('app')
    .controller('AboutCtrl', ['$scope', '$http', '$state', 'PARSE', 'AboutFactory', '$cacheFactory', 
    function ($scope, $http, $state, PARSE, AboutFactory,$cacheFactory){

       var cache = $cacheFactory.get('$http');



      AboutFactory.get().success( function (response) {
        $scope.abouts = response.results;
      });
    

  

    }]);
}());