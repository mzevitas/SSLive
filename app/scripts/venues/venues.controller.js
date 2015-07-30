;(function (){

  'use strict';

  angular.module('app')
    .controller('VenueCtrl', ['$scope', '$http', '$state', 'PARSE', 'VenueFactory', '$cacheFactory',
    function ($scope, $http, $state, PARSE, VenueFactory, $cacheFactory){

       var cache = $cacheFactory.get('$http');

      VenueFactory.get().success( function (response) {
        $scope.venues = response.results;
      });

    }]);
}());