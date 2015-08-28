;(function() {

    'use strict';

    angular.module('app')
        .factory('MediaFactory', ['$http', '$state', 'PARSE',
            function($http, $state, PARSE) {

                var getMedia = function() {
                    return $http.get(PARSE.URL + 'classes/media', PARSE.CONFIG);
                

                };

                return {
                    get: getMedia,

                };

            }
        ]);
}());
