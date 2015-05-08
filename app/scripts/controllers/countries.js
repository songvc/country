viewsModule.config(function($routeProvider){
	$routeProvider.when('/countries',{
		templateUrl: 'views/countries.html',
		controller: 'CountriesCtrl'
	})
})

viewsModule.controller('CountriesCtrl', function ($scope, $location, countryInfo) {
	countryInfo().then(function(response){
		$scope.countries = response.geonames;
	});


	$scope.go = function(hash){
		$location.path(hash);
	}
});

