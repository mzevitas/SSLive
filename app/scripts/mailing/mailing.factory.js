;(function() {

	'use strict';

    angular.module('app')
        .factory('MailFactory', ['$http', '$state', 'PARSE', 
            function($http, $state, PARSE) {



        var addMail = function(mailObj) {
            return $http.post(PARSE.URL + 'classes/mail', mailObj, PARSE.CONFIG)
                .success(function() {
                    

                });
        };


                return {
                    add: addMail

                };

            }
        ]);
}());