viewsModule.config(function($routeProvider){
	$routeProvider.when('/countries/:country/capital',{
		templateUrl: 'views/capital.html',
		controller: 'CapitalCtrl',
		resolve: {
			countryDetails:[
				'$route',
				function($route){
					return $route.current.params;
				}

			]
		}
	})
})

viewsModule.controller('CapitalCtrl', function ($scope, countryInfo, findCountry, countryDetails) {
	countryInfo()	
		.then(function(data){
			$scope.countries = data.geonames;
			console.log($scope.countries);
			$scope.country = findCountry(countryDetails.country,$scope.countries)
			console.log($scope.country);
		});	
	
	console.log($scope.country);

		

	// countryNeighbor()
	// 	.then(function(data){
	// 		$scope.neighbor = data;
	// 		consolelog($scope.data);
	// 	});

	// countrySearch()
	// 	.then(function(data){
	// 		$scope.neighbor = data;
	// 		consolelog($scope.data);
	// 	})	

});

