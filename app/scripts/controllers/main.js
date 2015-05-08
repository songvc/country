'use strict';

/**
 * @ngdoc function
 * @name countryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the countryApp
 */

 viewsModule.config(function($routeProvider){
	$routeProvider.when('/',{
 		templateUrl: 'views/main.html',
        controller: 'MainCtrl'
	})
})

viewsModule.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
    ];
  });
