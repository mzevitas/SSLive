;(function() {

    'use strict';

    angular.module('app')
        .factory('SongsFactory', ['$http', '$state', 'PARSE',
            function($http, $state, PARSE) {

                var getSong = function() {
                    return $http.get(PARSE.URL + 'classes/songs', PARSE.CONFIG);

                };

                return {
                    get: getSong,

                };

            }
        ]);
}());
