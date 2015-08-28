;(function (){

  'use strict';

  angular.module('app')
    .controller('MediaCtrl', ['$scope', '$http', '$state', 'PARSE', 'MediaFactory', '$cacheFactory', 
    function ($scope, $http, $state, PARSE, MediaFactory,$cacheFactory){

       var cache = $cacheFactory.get('$http');



      MediaFactory.get().success( function (response) {
        $scope.medias = response.results;
      });
    

 
  

    }]);
}());