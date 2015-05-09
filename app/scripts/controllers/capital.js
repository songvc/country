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

viewsModule.controller('CapitalCtrl', function ($scope, countryInfo, findCountry, countryDetails, countryNeighbor, countrySearch) {
	
	var capital;
	var geoNameId;
	var countryName = countryDetails.country;

	countryInfo()	
		.then(function(data){
			$scope.countries = data.geonames;
			console.log($scope.countries);
			$scope.country = findCountry(countryName , $scope.countries);
			console.log($scope.country);
			capital = $scope.country.capital;
			geoNameId = $scope.country.geonameId;
			console.log(geoNameId);

			countryNeighbor(geoNameId)
				.then(function(data2){
					$scope.neighbor = data2.geonames;
					console.log($scope.neighbor);
				})

			countrySearch(capital,capital)
				.then(function(data3){
					$scope.searchResult = data3.geonames;
					console.log($scope.searchResult);
				})


		});	
	


	// countryNeighbor()
	// 	.then(function(data2){
	// 		$scope.neighbor = data2;
	// 		console.log($scope.nieghbor);
	// 	});

	// countrySearch()
	// 	.then(function(data){
	// 		$scope.neighbor = data;
	// 		consolelog($scope.data);
	// 	})	

});

