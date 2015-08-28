;(function() {

    'use strict';

    angular.module('app')
        .factory('AboutFactory', ['$http', '$state', 'PARSE',
            function($http, $state, PARSE) {

                var getAbout = function() {
                    return $http.get(PARSE.URL + 'classes/about', PARSE.CONFIG);
                };
                return {
                    get: getAbout,
                };
            }
        ]);
}());
