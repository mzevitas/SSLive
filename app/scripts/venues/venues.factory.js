;(function() {

    'use strict';

    angular.module('app')
        .factory('VenueFactory', ['$http', '$state', 'PARSE',
            function($http, $state, PARSE) {


                // var user = UserFactory.user();

                var getVenue = function() {
                    return $http.get(PARSE.URL + 'classes/venues', PARSE.CONFIG);

                };
                return {
                    get: getVenue,

                };

            }
        ]);
}());
