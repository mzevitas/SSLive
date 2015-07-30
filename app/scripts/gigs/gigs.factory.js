;(function() {

	'use strict';

    angular.module('app')
        .factory('GigFactory', ['$http', '$state', 'PARSE',  
            function($http, $state, PARSE) {



        var getGig = function() {
            return $http.get(PARSE.URL + 'classes/gigs', PARSE.CONFIG);

        };

                return {
                    get: getGig,
                    

                };

            }
        ]);
}());