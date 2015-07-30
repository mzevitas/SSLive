;(function (){

  'use strict';

  angular.module('app')
    .controller('SongCtrl', ['$scope', '$http', '$state', 'PARSE', 'SongsFactory', '$cacheFactory', 
    function ($scope, $http, $state, PARSE, SongsFactory,$cacheFactory){

       var cache = $cacheFactory.get('$http');



      SongsFactory.get().success( function (response) {
        $scope.songs = response.results;
      });
    

  

    }]);
}());