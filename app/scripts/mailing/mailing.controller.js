;(function (){

  'use strict';

  angular.module('app')
    .controller('MailCtrl', ['$scope', '$http', '$state', 'PARSE', 'MailFactory', '$cacheFactory',
    function ($scope, $http, $state, PARSE, MailFactory,  $cacheFactory){

       var cache = $cacheFactory.get('$http');

     

      $scope.addMail = function (mailObj) {
        $scope.mails = {};
        MailFactory.add(mailObj).success( function (results) {
          mailObj.objectId = results.objectId;
          cache.remove(PARSE.URL + 'classes/mail');
          console.log("Email Added");
        
        });
      };
    }]);
}());