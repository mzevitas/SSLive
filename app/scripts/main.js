;(function() {

    'use strict';
    
angular.module('app', ['ui.router',  'ngMaterial'])
    .constant('PARSE', {
        URL: 'https://api.parse.com/1/',
        CONFIG: {
            headers: {
                'X-Parse-Application-Id': 'RBIg848SejjBwRjJgCFobwJesEan2nd2TzCU6oSq',
                'X-Parse-REST-API-Key': 'MdMDZR1bD02sD8UPu97Hxk9MrGT0NJoMvwiyrbk0',
                'Content-Type': 'application/json'
            }

        }
    })
        
		.config( function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		      $stateProvider
		      .state( 'home', {
		        url: '/',
		        templateUrl: 'views/home.tpl.html'
		      })

		      .state('about',{
		      	url: '/about',
		      	templateUrl: 'views/about.tpl.html'
		      })
		      .state('live',{
		      	url: '/live',
		      	templateUrl: 'views/live.tpl.html'
		      })
		      .state('contact',{
		      	url: '/contact',
		      	templateUrl: 'views/contact.tpl.html'
		      })
		      .state('media',{
		      	url: '/media',
		      	templateUrl: 'views/media.tpl.html'
		      });
		     



		});




}());
		      