;(function (){

  'use strict';

  angular.module('app')
    .controller('GigCtrl', ['$scope', '$http', '$state', 'PARSE', 'GigFactory',
    function ($scope, $http, $state, PARSE, GigFactory){


      GigFactory.get().success( function (response) {
        $scope.gigs = response.results;
      });


    }]);
}());